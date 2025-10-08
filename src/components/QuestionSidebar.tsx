import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Plus, FileText, MessageSquare, Star, FolderPlus, Folder, FileQuestion } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import DraggableQuestionItem from './DraggableQuestionItem';

interface Question {
  id: number;
  type: 'multiple' | 'text' | 'rating';
  title: string;
  description: string;
  options?: string[];
  required: boolean;
  sectionId?: number;
}

interface Section {
  id: number;
  title: string;
  description: string;
}

interface QuestionSidebarProps {
  questions: Question[];
  sections: Section[];
  selectedQuestionId?: number;
  selectedSectionId?: number;
  onQuestionSelect: (id: number) => void;
  onSectionSelect: (id: number) => void;
  onQuestionAdd: (type?: 'multiple' | 'text' | 'rating', sectionId?: number) => void;
  onSectionAdd: () => void;
  onMoveQuestion: (dragIndex: number, hoverIndex: number) => void;
  onMoveSection: (dragIndex: number, hoverIndex: number) => void;
}

export default function QuestionSidebar({ 
  questions, 
  sections,
  selectedQuestionId, 
  selectedSectionId,
  onQuestionSelect, 
  onSectionSelect,
  onQuestionAdd,
  onSectionAdd,
  onMoveQuestion,
  onMoveSection
}: QuestionSidebarProps) {
  // 문항 유형별 통계 계산
  const questionStats = React.useMemo(() => {
    const stats = {
      multiple: questions.filter(q => q.type === 'multiple').length,
      text: questions.filter(q => q.type === 'text').length,
      rating: questions.filter(q => q.type === 'rating').length,
    };
    return stats;
  }, [questions]);

  // 섹션별로 문항 그룹화
  const questionsWithoutSection = questions.filter(q => !q.sectionId);
  const getSectionQuestions = (sectionId: number) => 
    questions.filter(q => q.sectionId === sectionId);

  const getStatItems = () => {
    const items = [];
    if (questionStats.multiple > 0) {
      items.push({ type: 'multiple', count: questionStats.multiple, label: '객관식', icon: MessageSquare });
    }
    if (questionStats.text > 0) {
      items.push({ type: 'text', count: questionStats.text, label: '주관식', icon: FileText });
    }
    if (questionStats.rating > 0) {
      items.push({ type: 'rating', count: questionStats.rating, label: '등급형', icon: Star });
    }
    return items;
  };

  const statItems = getStatItems();

  return (
    <>
      {/* 고정 헤더 영역 */}
      <div className="flex-shrink-0 bg-background border-b">
        {/* 설문 구조 제목 */}
        <div className="p-4 pb-3">
          <div className="flex items-center justify-between">
            <h3>설문 구조</h3>
            <div className="flex items-center gap-2">
              {sections.length > 0 && (
                <Badge variant="outline" className="text-xs">
                  {sections.length}개 섹션
                </Badge>
              )}
              <Badge variant="secondary" className="text-xs">
                {questions.length}개 문항
              </Badge>
            </div>
          </div>
        </div>

        {/* 문항 유형별 통계 */}
        {statItems.length > 0 && (
          <div className="px-4 pb-3">
            <div className="space-y-2">
              {statItems.map((item) => (
                <div key={item.type} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{item.label}</span>
                  </div>
                  <span className="text-muted-foreground">{item.count}개</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 추가 버튼들 */}
        <div className="p-4 pt-0">
          <div className="space-y-3">
            {/* 섹션 추가 버튼 */}
            <div>
              <p className="text-xs text-muted-foreground mb-2">섹션 관리</p>
              <Button
                onClick={onSectionAdd}
                size="sm"
                variant="outline"
                className="w-full gap-2 border-dashed"
              >
                <FolderPlus className="h-4 w-4" />
                섹션 추가
              </Button>
            </div>

            {/* 문항 유형별 추가 버튼 */}
            <div>
              <p className="text-xs text-muted-foreground mb-2">문항 추가</p>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  onClick={() => onQuestionAdd('multiple')}
                  size="sm"
                  className="flex-col gap-1 h-auto py-2 bg-blue-50 hover:bg-blue-100 text-blue-700"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span className="text-xs">객관식</span>
                </Button>
                <Button
                  onClick={() => onQuestionAdd('text')}
                  size="sm"
                  className="flex-col gap-1 h-auto py-2 bg-green-50 hover:bg-green-100 text-green-700"
                >
                  <FileText className="h-4 w-4" />
                  <span className="text-xs">주관식</span>
                </Button>
                <Button
                  onClick={() => onQuestionAdd('rating')}
                  size="sm"
                  className="flex-col gap-1 h-auto py-2 bg-purple-50 hover:bg-purple-100 text-purple-700"
                >
                  <Star className="h-4 w-4" />
                  <span className="text-xs">등급형</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 스크롤 영역 */}
      <div className="flex-1 min-h-0">
        <DndProvider backend={HTML5Backend}>
          <ScrollArea className="h-full">
            <div className="p-4 space-y-3">
              {questions.length === 0 && sections.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <FileQuestion className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">설문이 비어있습니다</p>
                  <p className="text-xs">섹션이나 문항을 추가해보세요</p>
                </div>
              ) : (
                <>
                  {/* 섹션 없는 문항들 */}
                  {questionsWithoutSection.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <FileText className="h-3 w-3" />
                        <span>기본 문항</span>
                      </div>
                      {questionsWithoutSection.map((question, index) => (
                        <DraggableQuestionItem
                          key={question.id}
                          question={question}
                          index={questions.findIndex(q => q.id === question.id)}
                          selectedQuestionId={selectedQuestionId}
                          selectQuestion={onQuestionSelect}
                          moveQuestion={onMoveQuestion}
                        />
                      ))}
                    </div>
                  )}

                  {/* 섹션별 문항들 */}
                  {sections.map((section) => {
                    const sectionQuestions = getSectionQuestions(section.id);
                    return (
                      <div key={section.id} className="space-y-2">
                        {/* 섹션 헤더 */}
                        <button
                          onClick={() => onSectionSelect(section.id)}
                          className={`w-full flex items-center gap-2 p-2 rounded-md text-left transition-colors ${
                            selectedSectionId === section.id
                              ? 'bg-blue-100 text-blue-800 border border-blue-200'
                              : 'hover:bg-slate-100 text-slate-700'
                          }`}
                        >
                          <Folder className="h-4 w-4 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">
                              {section.title || '제목 없는 섹션'}
                            </p>
                            {sectionQuestions.length > 0 && (
                              <p className="text-xs text-muted-foreground">
                                {sectionQuestions.length}개 문항
                              </p>
                            )}
                          </div>
                        </button>

                        {/* 섹션 내 문항들 */}
                        {sectionQuestions.length > 0 && (
                          <div className="ml-4 space-y-1 border-l border-slate-200 pl-2">
                            {sectionQuestions.map((question) => (
                              <DraggableQuestionItem
                                key={question.id}
                                question={question}
                                index={questions.findIndex(q => q.id === question.id)}
                                selectedQuestionId={selectedQuestionId}
                                selectQuestion={onQuestionSelect}
                                moveQuestion={onMoveQuestion}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </>
              )}
              {/* 스크롤 여백 */}
              <div className="h-4" />
            </div>
          </ScrollArea>
        </DndProvider>
      </div>

      {/* 고정 푸터 */}
      <div className="p-4 border-t flex-shrink-0 bg-background">
        <p className="text-xs text-muted-foreground text-center">
          문항을 드래그하여 순서를 변경하세요
        </p>
      </div>
    </>
  );
}