import React, { useRef, useEffect, useState } from 'react';
import { Card, CardHeader, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';
import { Trash2, Plus, X, FileQuestion, FolderPlus, Settings } from 'lucide-react';
import { Switch } from '../ui/switch';
import SectionHeader from '../SectionHeader';

interface Question {
  id: number;
  type: 'multiple' | 'text' | 'rating';
  title: string;
  description: string;
  options?: string[];
  optionScores?: number[];
  required: boolean;
  sectionId?: number;
}

interface Section {
  id: number;
  title: string;
  description: string;
}

interface RatingConfig {
  options: string[];
  scores: number[];
}

interface QuestionListEditorProps {
  questions: Question[];
  sections: Section[];
  selectedQuestionId?: number;
  selectedSectionId?: number;
  onUpdate: (id: number, updates: Partial<Question>) => void;
  onDelete: (id: number) => void;
  onAddQuestion: (type?: 'multiple' | 'text' | 'rating', sectionId?: number) => void;
  onAddSection: () => void;
  onUpdateSection: (id: number, updates: Partial<Section>) => void;
  onDeleteSection: (id: number) => void;
  ratingConfig: RatingConfig;
}

export default function QuestionListEditor({
  questions,
  sections,
  selectedQuestionId,
  selectedSectionId,
  onUpdate,
  onDelete,
  onAddQuestion,
  onAddSection,
  onUpdateSection,
  onDeleteSection,
  ratingConfig
}: QuestionListEditorProps) {
  const questionRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const [editingSectionId, setEditingSectionId] = useState<number | undefined>();

  useEffect(() => {
    if (selectedQuestionId && questionRefs.current[selectedQuestionId]) {
      questionRefs.current[selectedQuestionId]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [selectedQuestionId]);

  // 섹션별로 문항 그룹화
  const questionsWithoutSection = questions.filter(q => !q.sectionId);
  const getSectionQuestions = (sectionId: number) =>
    questions.filter(q => q.sectionId === sectionId);

  // 전체 문항 번호 매핑
  const getQuestionNumber = (questionId: number) => {
    return questions.findIndex(q => q.id === questionId) + 1;
  };

  if (questions.length === 0 && sections.length === 0) {
    return (
      <div className="space-y-6">
        <Card className="h-64">
          <CardContent className="flex flex-col items-center justify-center h-full py-16">
            <FileQuestion className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg mb-2">리뷰를 시작해보세요</h3>
            <p className="text-muted-foreground text-center mb-4">
              섹션을 만들어 문항을 체계적으로 구성하거나<br />
              바로 문항을 추가해서 시작하세요
            </p>
            <div className="flex gap-3">
              <Button
                onClick={onAddSection}
                variant="outline"
                className="gap-2"
              >
                <FolderPlus className="h-4 w-4" />
                섹션 추가
              </Button>
              <Button
                onClick={() => onAddQuestion('multiple')}
                className="gap-2 bg-blue-600 text-primary-foreground hover:bg-blue-700"
              >
                <Plus className="h-4 w-4" />
                문항 추가
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* 섹션 없는 문항들 */}
      {questionsWithoutSection.length > 0 && (
        <div className="space-y-6">
          {questionsWithoutSection.map((question) => (
            <QuestionEditorItem
              key={question.id}
              question={question}
              questionNumber={getQuestionNumber(question.id)}
              isSelected={selectedQuestionId === question.id}
              onUpdate={onUpdate}
              onDelete={onDelete}
              ratingConfig={ratingConfig}
              ref={(el) => questionRefs.current[question.id] = el}
            />
          ))}
        </div>
      )}

      {/* 섹션별 문항들 */}
      {sections.map((section) => {
        const sectionQuestions = getSectionQuestions(section.id);
        return (
          <div key={section.id} className="space-y-6">
            <SectionHeader
              section={section}
              isEditing={editingSectionId === section.id}
              onUpdate={onUpdateSection}
              onDelete={onDeleteSection}
              onAddQuestion={onAddQuestion}
              onStartEdit={() => setEditingSectionId(section.id)}
              onCancelEdit={() => setEditingSectionId(undefined)}
            />

            {/* 해당 섹션의 문항들 */}
            {sectionQuestions.map((question) => (
              <QuestionEditorItem
                key={question.id}
                question={question}
                questionNumber={getQuestionNumber(question.id)}
                isSelected={selectedQuestionId === question.id}
                onUpdate={onUpdate}
                onDelete={onDelete}
                ratingConfig={ratingConfig}
                ref={(el) => questionRefs.current[question.id] = el}
              />
            ))}
          </div>
        );
      })}

      {/* 최하단 추가 버튼들 */}
      <div className="flex justify-center gap-3 pt-4">
        <Button
          variant="outline"
          onClick={onAddSection}
          className="gap-2 border-dashed border-input bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        >
          <FolderPlus className="h-4 w-4" />
          섹션 추가
        </Button>
        <Button
          variant="outline"
          onClick={() => onAddQuestion('multiple')}
          className="gap-2 border-dashed border-input bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        >
          <Plus className="h-4 w-4" />
          문항 추가
        </Button>
      </div>
    </div>
  );
}

interface QuestionEditorItemProps {
  question: Question;
  questionNumber: number;
  isSelected: boolean;
  onUpdate: (id: number, updates: Partial<Question>) => void;
  onDelete: (id: number) => void;
  ratingConfig: RatingConfig;
}

const QuestionEditorItem = React.forwardRef<HTMLDivElement, QuestionEditorItemProps>(
  ({ question, questionNumber, isSelected, onUpdate, onDelete, ratingConfig }, ref) => {
    const [newOption, setNewOption] = React.useState('');

    const handleTitleChange = (title: string) => {
      onUpdate(question.id, { title });
    };

    const handleDescriptionChange = (description: string) => {
      onUpdate(question.id, { description });
    };

    const handleTypeChange = (type: 'multiple' | 'text' | 'rating') => {
      const updates: Partial<Question> = { type };

      if (type === 'multiple' && !question.options) {
        updates.options = ['옵션 1', '옵션 2'];
        updates.optionScores = undefined;
      } else if (type === 'rating') {
        // 등급형으로 변경 시 공통 설정 적용
        updates.options = [...ratingConfig.options];
        updates.optionScores = [...ratingConfig.scores];
        updates.required = true; // 등급형은 항상 필수
      } else if (type === 'text') {
        updates.options = undefined;
        updates.optionScores = undefined;
      }

      onUpdate(question.id, updates);
    };

    const handleRequiredChange = (required: boolean) => {
      // 등급형 문항은 필수 설정 변경 불가
      if (question.type === 'rating') {
        return;
      }
      onUpdate(question.id, { required });
    };

    const addOption = () => {
      if (newOption.trim() && question.options) {
        const newOptions = [...question.options, newOption.trim()];
        onUpdate(question.id, { options: newOptions });
        setNewOption('');
      }
    };

    const removeOption = (index: number) => {
      if (question.options) {
        const newOptions = question.options.filter((_, i) => i !== index);
        onUpdate(question.id, { options: newOptions });
      }
    };

    const updateOption = (index: number, value: string) => {
      if (question.options) {
        const newOptions = [...question.options];
        newOptions[index] = value;
        onUpdate(question.id, { options: newOptions });
      }
    };

    const getSelectTriggerStyle = (type: string) => {
      switch (type) {
        case 'multiple':
          return 'border-blue-200 bg-blue-50/50 text-blue-700 hover:bg-blue-100/50 hover:border-blue-300 focus:ring-blue-500/20';
        case 'text':
          return 'border-green-200 bg-green-50/50 text-green-700 hover:bg-green-100/50 hover:border-green-300 focus:ring-green-500/20';
        case 'rating':
          return 'border-purple-200 bg-purple-50/50 text-purple-700 hover:bg-purple-100/50 hover:border-purple-300 focus:ring-purple-500/20';
        default:
          return 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100';
      }
    };

    return (
      <div
        ref={ref}
        className={`transition-all duration-200 ${
          isSelected ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
        }`}
      >
        <Card className={isSelected ? 'border-blue-200 shadow-md' : ''}>
          <CardHeader className="pb-4">
            {/* 인라인 편집 헤더 */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-3">
                {/* 문항 번호와 유형 선택, 필수 토글 */}
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">문항 {questionNumber}.</span>
                  <Select value={question.type} onValueChange={handleTypeChange}>
                    <SelectTrigger className={`w-28 transition-colors ${getSelectTriggerStyle(question.type)}`}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="multiple">객관식</SelectItem>
                      <SelectItem value="text">주관식</SelectItem>
                      <SelectItem value="rating">등급형</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* 필수 입력 토글 */}
                  <div className="flex items-center gap-2 ml-2">
                    <Switch
                      id={`required-${question.id}`}
                      checked={question.required}
                      onCheckedChange={handleRequiredChange}
                      disabled={question.type === 'rating'} // 등급형은 필수 설정 변경 불가
                    />
                    <Label
                      htmlFor={`required-${question.id}`}
                      className={`text-sm cursor-pointer ${
                        question.required ? 'text-red-600' : 'text-muted-foreground'
                      } ${question.type === 'rating' ? 'opacity-75' : ''}`}
                    >
                      필수
                      {question.type === 'rating' && (
                        <span className="text-xs text-muted-foreground ml-1">(고정)</span>
                      )}
                    </Label>
                  </div>
                </div>

                {/* 문항 제목 인라인 편집 */}
                <div className="flex-1">
                  <Input
                    placeholder="문항 제목을 입력해주세요"
                    value={question.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="text-lg border-0 px-0 focus-visible:ring-0 placeholder:text-muted-foreground/60 text-[12px]"
                  />
                </div>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => onDelete(question.id)}
                className="text-red-600 hover:text-red-700 hover:bg-red-50 flex-shrink-0"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* 문항 설명 */}
            <div className="space-y-2">
              <Label>문항 설명 (선택)</Label>
              <Textarea
                placeholder="문항에 대한 추가 설명을 입력해주세요"
                value={question.description}
                onChange={(e) => handleDescriptionChange(e.target.value)}
                rows={3}
              />
            </div>

            {/* 객관식 선택지 */}
            {question.type === 'multiple' && (
              <div className="space-y-3">
                <Label>선택지</Label>
                <div className="space-y-2">
                  {question.options?.map((option, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="flex items-center gap-2 flex-1">
                        <span className="text-sm text-muted-foreground w-6">
                          {index + 1}.
                        </span>
                        <Input
                          value={option}
                          onChange={(e) => updateOption(index, e.target.value)}
                          placeholder={`옵션 ${index + 1}`}
                        />
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeOption(index)}
                        className="text-red-600 hover:text-red-700 flex-shrink-0"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 pt-2">
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-sm text-muted-foreground w-6">
                        {(question.options?.length || 0) + 1}.
                      </span>
                      <Input
                        placeholder="새 선택지를 입력하세요"
                        value={newOption}
                        onChange={(e) => setNewOption(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addOption()}
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={addOption}
                      disabled={!newOption.trim()}
                      className="flex-shrink-0"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* 등급형 문항 - 공통 설정 안내 */}
            {question.type === 'rating' && (
              <div className="space-y-4">
                <Label>등급 설정</Label>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <div className="flex items-start gap-3 mb-3">
                    <Settings className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-purple-800 font-medium mb-1">
                        공통 설정 적용됨
                      </p>
                      <p className="text-sm text-purple-700">
                        이 문항은 기본 정보의 "추가 설정"에서 설정한 등급형 문항 설정이 적용됩니다.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm text-purple-800">현재 적용된 등급:</Label>
                    <div className="grid gap-2">
                      {ratingConfig.options.map((option, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-white rounded border border-purple-200">
                          <span className="text-sm text-gray-900">{index + 1}. {option}</span>
                          <span className="text-sm text-purple-700 font-medium">{ratingConfig.scores[index]}점</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }
);

QuestionEditorItem.displayName = 'QuestionEditorItem';
