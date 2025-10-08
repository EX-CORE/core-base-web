import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Grip, Trash2, ChevronDown, Plus, X } from 'lucide-react';
import { Input } from 'src/components/ui/input';
import { Switch } from 'src/components/ui/switch';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from 'src/components/ui/collapsible';
import { ChevronUp } from 'lucide-react';

interface Question {
  id: number;
  type: 'multiple' | 'text' | 'rating';
  title: string;
  description: string;
  options?: string[];
  optionScores?: number[];
  required: boolean;
  sectionId?: number;
  order: number;
}

interface Section {
  id: number;
  title: string;
  description: string;
  order: number;
}

interface SurveyItem {
  id: number;
  type: 'section' | 'question';
  data: Section | Question;
  order: number;
}

interface RatingConfig {
  options: string[];
  scores: number[];
}

interface DraggableSurveyItemProps {
  item: SurveyItem;
  index: number;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  selectItem: (id: number, type: 'section' | 'question') => void;
  selectedSectionId: number | undefined;
  selectedQuestionId: number | undefined;
  isMainContent?: boolean;
  updateSection?: (id: number, updates: Partial<Section>) => void;
  deleteSection?: (id: number) => void;
  updateQuestion?: (id: number, updates: Partial<Question>) => void;
  deleteQuestion?: (id: number) => void;
  changeQuestionType?: (questionId: number, newType: 'multiple' | 'text' | 'rating') => void;
  showQuestionTypeDropdown?: number | null;
  setShowQuestionTypeDropdown?: (id: number | null) => void;
  ratingConfig?: RatingConfig;
  questions?: Question[];
  isCurrentRatingOpen?: boolean;
  setIsCurrentRatingOpen?: (open: boolean) => void;
}

const ItemType = 'SURVEY_ITEM';

export default function DraggableSurveyItem({
  item,
  index,
  moveItem,
  selectItem,
  selectedSectionId,
  selectedQuestionId,
  isMainContent = false,
  updateSection,
  deleteSection,
  updateQuestion,
  deleteQuestion,
  changeQuestionType,
  showQuestionTypeDropdown,
  setShowQuestionTypeDropdown,
  ratingConfig,
  questions = [],
  isCurrentRatingOpen = true,
  setIsCurrentRatingOpen
}: DraggableSurveyItemProps) {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (dragItem: { index: number }) => {
      if (dragItem.index !== index) {
        moveItem(dragItem.index, index);
        dragItem.index = index;
      }
    },
  });

  const isSelected = item.type === 'section' 
    ? selectedSectionId === item.id 
    : selectedQuestionId === item.id;

  // 메인 컨텐츠 영역에서 섹션 렌더링
  if (isMainContent && item.type === 'section') {
    const sectionData = item.data as Section;
    return (
      <div
        ref={(node) => drag(drop(node))}
        className={`group bg-white border rounded-[10px] w-full border-amber-200 transition-all ${
          isDragging ? 'opacity-50' : ''
        } ${isSelected ? 'border-blue-300 shadow-md' : ''}`}
        onClick={() => selectItem(item.id, 'section')}
      >
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between w-full">
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex gap-3 items-center w-full">
                <span className="text-sm font-medium text-amber-600 leading-5">섹션</span>
                <div className="flex gap-2 items-center pl-2">
                  <span className="text-sm font-medium text-amber-600 leading-5">섹션 구분</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex flex-col gap-2">
                  <Input
                    value={sectionData.title}
                    onChange={(e) => updateSection?.(item.id, { title: e.target.value })}
                    className="!text-[22px] !font-medium !leading-7 border-0 p-0 h-auto bg-transparent focus-visible:ring-0 placeholder:text-slate-400 hover:border-b hover:border-slate-300 focus:border-b focus:border-slate-500 transition-all"
                    placeholder="섹션 제목을 입력해 주세요"
                    style={{ fontSize: '22px', fontWeight: '500', lineHeight: '28px' }}
                  />
                  <div className="h-0 w-full" />
                </div>
                <div className="flex flex-col gap-1 pt-1">
                  <Input
                    value={sectionData.description}
                    onChange={(e) => updateSection?.(item.id, { description: e.target.value })}
                    className="!text-[16px] !font-normal !leading-5 border-0 p-0 h-auto bg-transparent focus-visible:ring-0 placeholder:text-slate-400 hover:border-b hover:border-slate-300 focus:border-b focus:border-slate-500 transition-all"
                    placeholder="섹션 설명을 입력해 주세요"
                    style={{ fontSize: '16px', fontWeight: '400', lineHeight: '20px' }}
                  />
                  <div className="h-0 w-full" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteSection?.(item.id);
                }}
                className="h-8 px-2.5 flex items-center justify-center rounded-[4px] hover:bg-red-50 transition-colors"
              >
                <Trash2 className="h-4 w-4 text-[#E7000B]" />
              </button>
              <div className="h-8 px-2.5 flex items-center justify-center rounded-[4px] cursor-grab opacity-0 group-hover:opacity-100 transition-opacity">
                <Grip className="h-4 w-4 text-amber-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 메인 컨텐츠 영역에서 문항 렌더링
  if (isMainContent && item.type === 'question') {
    const questionData = item.data as Question;
    return (
      <div 
        ref={(node) => drag(drop(node))}
        key={questionData.id} 
        data-question-id={questionData.id}
        className={`group bg-white border rounded-[10px] w-full transition-all ${
          isDragging ? 'opacity-50' : ''
        } ${selectedQuestionId === questionData.id ? 'border-blue-300 shadow-md' : 'border-slate-200'}`}
        onClick={() => selectItem(questionData.id, 'question')}
      >
        {/* 기존 문항 렌더링 코드 */}
        <div className="p-6 space-y-9">
          {/* 문항 헤더 */}
          <div className="flex items-start justify-between w-full">
            <div className="flex-1 flex flex-col gap-6">
              {/* 문항 정보 */}
              <div className="flex gap-3 items-center w-full">
                <span className="text-sm font-normal text-slate-500 leading-5">문항 {questions.findIndex(q => q.id === questionData.id) + 1}.</span>
                <div className="relative question-type-dropdown">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowQuestionTypeDropdown?.(showQuestionTypeDropdown === questionData.id ? null : questionData.id);
                    }}
                    className={`${
                      questionData.type === 'rating' ? 'bg-purple-50 border border-[#e9d4ff] text-[#8200db]' :
                      questionData.type === 'multiple' ? 'bg-blue-50 border border-[#bfdbfe] text-[#1447e6]' :
                      'bg-green-50 border border-[#bbf7d0] text-[#008236]'
                    } rounded-[4px] h-9 px-[12.67px] py-[8.667px] w-28 flex items-center justify-between hover:opacity-80 transition-colors`}
                  >
                    <span className="text-sm font-normal leading-5">
                      {questionData.type === 'rating' ? '등급형' : questionData.type === 'multiple' ? '객관식' : '주관식'}
                    </span>
                    <ChevronDown className={`h-4 w-4 text-[#64748B] opacity-50 transition-transform ${
                      showQuestionTypeDropdown === questionData.id ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {showQuestionTypeDropdown === questionData.id && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-[4px] shadow-lg z-20 min-w-[120px] overflow-hidden">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          changeQuestionType?.(questionData.id, 'multiple');
                          setShowQuestionTypeDropdown?.(null);
                        }}
                        className={`w-full px-3 py-2 text-left text-sm hover:bg-blue-50 transition-colors border-b border-gray-100 ${
                          questionData.type === 'multiple' ? 'bg-blue-50 text-[#1447e6]' : ''
                        }`}
                      >
                        객관식
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          changeQuestionType?.(questionData.id, 'text');
                          setShowQuestionTypeDropdown?.(null);
                        }}
                        className={`w-full px-3 py-2 text-left text-sm hover:bg-green-50 transition-colors border-b border-gray-100 ${
                          questionData.type === 'text' ? 'bg-green-50 text-[#008236]' : ''
                        }`}
                      >
                        주관식
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          changeQuestionType?.(questionData.id, 'rating');
                          setShowQuestionTypeDropdown?.(null);
                        }}
                        className={`w-full px-3 py-2 text-left text-sm hover:bg-purple-50 transition-colors ${
                          questionData.type === 'rating' ? 'bg-purple-50 text-[#8200db]' : ''
                        }`}
                      >
                        등급형
                      </button>
                    </div>
                  )}
                </div>
                <div className="flex gap-2 items-center pl-2">
                  <Switch 
                    checked={questionData.required}
                    onCheckedChange={(checked: boolean) => updateQuestion?.(questionData.id, { required: checked })}
                    disabled={questionData.type === 'rating'}
                    className={questionData.type === 'rating' ? 'opacity-50' : ''}
                  />
                  <div className="flex gap-2 items-center">
                    <span className={`text-sm font-medium leading-5 ${
                      questionData.type === 'rating' 
                        ? 'text-[#1447e6] opacity-50' 
                        : questionData.required 
                          ? 'text-[#1447e6]' 
                          : 'text-slate-500'
                    }`}>
                      {questionData.required ? '필수' : '비필수'}
                    </span>
                    {questionData.type === 'rating' && (
                      <span className="text-xs font-medium text-slate-500 leading-4">(고정)</span>
                    )}
                  </div>
                </div>
              </div>

              {/* 문항 제목과 설명 */}
              <div className="space-y-2">
                <div className="flex flex-col gap-2">
                  <Input
                    value={questionData.title}
                    onChange={(e) => updateQuestion?.(questionData.id, { title: e.target.value })}
                    className="!text-[22px] !font-medium !leading-7 border-0 p-0 h-auto bg-transparent focus-visible:ring-0 placeholder:text-slate-400 hover:border-b hover:border-slate-300 focus:border-b focus:border-slate-500 transition-all"
                    placeholder="문항 제목을 입력해 주세요"
                    style={{ fontSize: '22px', fontWeight: '500', lineHeight: '28px' }}
                  />
                  <div className="h-0 w-full" />
                </div>
                <div className="flex flex-col gap-1 pt-1">
                  <Input
                    value={questionData.description}
                    onChange={(e) => updateQuestion?.(questionData.id, { description: e.target.value })}
                    className="!text-[16px] !font-normal !leading-5 border-0 p-0 h-auto bg-transparent focus-visible:ring-0 placeholder:text-slate-400 hover:border-b hover:border-slate-300 focus:border-b focus:border-slate-500 transition-all"
                    placeholder="문항 설명을 입력해 주세요"
                    style={{ fontSize: '16px', fontWeight: '400', lineHeight: '20px' }}
                  />
                  <div className="h-0 w-full" />
                </div>
              </div>
            </div>
            
            {/* 삭제 버튼과 드래그 아이콘 */}
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteQuestion?.(questionData.id);
                }}
                className="h-8 px-2.5 flex items-center justify-center rounded-[4px] hover:bg-red-50 transition-colors"
              >
                <Trash2 className="h-4 w-4 text-[#E7000B]" />
              </button>
              <div className="h-8 px-2.5 flex items-center justify-center rounded-[4px] cursor-grab opacity-0 group-hover:opacity-100 transition-opacity">
                <Grip className="h-4 w-4 text-slate-400" />
              </div>
            </div>
          </div>

          {/* 현재 적용된 등급/선택지 */}
          {questionData.type === 'rating' ? (
            <div className="bg-white border border-gray-200 rounded-[6px] w-full">
              <div className="p-6 space-y-4">
                <Collapsible open={isCurrentRatingOpen} onOpenChange={setIsCurrentRatingOpen}>
                  <CollapsibleTrigger asChild>
                    <div className="flex items-center justify-between w-full cursor-pointer">
                      <div className="flex flex-col gap-2">
                        <h4 className="text-sm font-medium text-slate-800 leading-[14px]">현재 적용된 등급</h4>
                      </div>
                      {isCurrentRatingOpen ? (
                        <ChevronUp className="h-6 w-6 text-[#18181B]" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-[#18181B]" />
                      )}
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="pt-4">
                      <div className="h-px w-full bg-[#E4E4E7] mb-4" />
                      <div className="space-y-2 px-1">
                        {ratingConfig?.options.map((option, optIndex) => (
                          <div key={optIndex} className="flex gap-2 items-center w-full">
                            <span className="text-sm font-normal text-slate-500 leading-5 w-[23.02px]">{optIndex + 1}.</span>
                            <div className="flex-1 bg-white h-9 rounded-[4px] border border-white">
                              <div className="flex h-9 items-center justify-between px-3 py-0">
                                <span className="text-sm font-medium text-zinc-500 leading-5">{option}</span>
                                <span className="text-sm font-medium text-zinc-500 leading-5">{ratingConfig?.scores[optIndex]}점</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          ) : questionData.type === 'multiple' ? (
            <div className="bg-white border border-gray-200 rounded-[6px] w-full">
              <div className="p-6 space-y-4">
                <div className="flex h-6 items-center justify-between w-full">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-medium text-slate-800 leading-[14px]">선택지</h4>
                  </div>
                </div>
                <div className="space-y-2 px-1">
                  {questionData.options?.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex gap-2 items-center w-full">
                      <span className="text-sm font-normal text-slate-500 leading-5 w-[23.02px]">{optionIndex + 1}.</span>
                      <div className="flex-1 bg-white h-9 rounded-[4px] border border-white">
                        <div className="h-full px-[12.667px] pt-[9.67px] pb-[9.66px]">
                          <Input
                            value={option}
                            onChange={(e) => {
                              const newOptions = [...(questionData.options || [])];
                              newOptions[optionIndex] = e.target.value;
                              updateQuestion?.(questionData.id, { options: newOptions });
                            }}
                            className="text-sm font-normal text-slate-800 leading-normal border-0 p-0 h-auto bg-transparent focus-visible:ring-0"
                          />
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (questionData.options && questionData.options.length > 2) {
                            const newOptions = questionData.options.filter((_, i) => i !== optionIndex);
                            updateQuestion?.(questionData.id, { options: newOptions });
                          }
                        }}
                        className="h-8 px-2.5 flex items-center justify-center rounded-[4px] hover:bg-red-50 transition-colors disabled:opacity-50"
                        disabled={!questionData.options || questionData.options.length <= 2}
                      >
                        <X className="h-4 w-4 text-[#E7000B]" />
                      </button>
                    </div>
                  ))}
                  <div className="flex gap-2 items-center pt-2 w-full">
                    <span className="text-sm font-normal text-slate-500 leading-5 w-[23.02px]">{(questionData.options?.length || 0) + 1}.</span>
                    <div className="flex-1 bg-white h-9 rounded-[4px] border border-white flex items-center px-3">
                      <span className="text-sm font-normal text-slate-500 leading-normal">새 선택지를 입력하세요</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const newOptions = [...(questionData.options || []), '새 선택지를 입력하세요'];
                        updateQuestion?.(questionData.id, { options: newOptions });
                      }}
                      className="bg-white border border-slate-200 h-8 px-[10.667px] py-[0.667px] rounded-[4px] hover:bg-gray-50 opacity-50 hover:opacity-100 transition-all flex items-center justify-center"
                    >
                      <Plus className="h-4 w-4 text-[#1E293B]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : questionData.type === 'text' ? (
            <div className="bg-white border border-gray-200 rounded-[6px] w-full">
              <div className="p-6 space-y-4">
                <div className="flex h-6 items-center justify-between w-full">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-medium text-slate-800 leading-[14px]">주관식 응답</h4>
                  </div>
                </div>
                <div className="px-1">
                  <div className="bg-gray-50 border border-gray-200 rounded-[4px] p-3">
                    <p className="text-sm text-gray-500">답변자가 텍스트로 자유롭게 응답할 수 있습니다.</p>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  // 사이드바에서 사용하는 경우 - 섹션
  if (item.type === 'section') {
    const sectionData = item.data as Section;
    return (
      <div
        ref={(node) => drag(drop(node))}
        className={`group bg-amber-50 border border-amber-200 rounded-md p-2 cursor-pointer hover:bg-amber-100 transition-colors ${
          isDragging ? 'opacity-50' : ''
        } ${isSelected ? 'ring-2 ring-amber-300' : ''}`}
        onClick={() => selectItem(item.id, 'section')}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <span className="text-xs font-medium text-amber-700 px-1.5 py-0.5 bg-amber-100 rounded">섹션</span>
            <span className="text-sm font-medium text-amber-800 truncate">
              {sectionData.title || `섹션 ${index + 1}`}
            </span>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
            <Grip className="h-4 w-4 text-amber-600" />
          </div>
        </div>
      </div>
    );
  }

  // 사이드바에서 사용하는 경우 - 문항 (기존 DraggableQuestionItem 방식)
  if (item.type === 'question') {
    const questionData = item.data as Question;
    const questionIndex = questions.findIndex(q => q.id === questionData.id);
    
    return (
      <div
        ref={(node) => drag(drop(node))}
        className={`group bg-white border border-gray-200 rounded-md p-2 cursor-pointer hover:bg-gray-50 transition-colors ${
          isDragging ? 'opacity-50' : ''
        } ${isSelected ? 'ring-2 ring-blue-300' : ''}`}
        onClick={() => selectItem(questionData.id, 'question')}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${
              questionData.type === 'rating' ? 'bg-purple-100 text-purple-700' :
              questionData.type === 'multiple' ? 'bg-blue-100 text-blue-700' :
              'bg-green-100 text-green-700'
            }`}>
              {questionData.type === 'rating' ? '등급형' : questionData.type === 'multiple' ? '객관식' : '주관식'}
            </span>
            <span className="text-sm font-medium text-gray-800 truncate">
              {questionData.title || `문항 ${questionIndex + 1}`}
            </span>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
            <Grip className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
    );
  }

  return null;
}