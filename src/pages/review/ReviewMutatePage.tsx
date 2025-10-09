import React, { useState, useRef } from 'react';
import { Button } from 'src/components/ui/button';
import { ArrowLeft, Eye, Plus, ChevronUp, ChevronDown } from 'lucide-react';
import RatingConfigComponent from 'src/components/RatingConfigComponent';
import DraggableReviewItem from 'src/components/DraggableReviewItem';
import svgPaths from 'src/imports/svg-srkdro9it3';
import type { EditMode } from '../../types';
import { useReview } from '../../hooks/useReview';

export default function ReviewMutatePage({
  editMode
}: {
  editMode: EditMode;
}) {
  const {
    questions,
    sections,
    selectedQuestionId,
    selectedSectionId,
    reviewTitle,
    reviewDescription,
    selectedEvaluators,
    selectedTargets,
    ratingConfig,
    startDate,
    endDate,
    getSortedItems,
    addQuestion,
    updateQuestion,
    deleteQuestion,
    addSection,
    updateSection,
    deleteSection,
    selectQuestion,
    selectSection,
    moveItem,
    updateRatingConfig,
    addRatingOption,
    setReviewTitle,
    setReviewDescription,
    setStartDate,
    setEndDate,
  } = useReview();

  const [isSaving, setIsSaving] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isEvaluatorModalOpen, setIsEvaluatorModalOpen] = useState(false);
  const [isTargetModalOpen, setIsTargetModalOpen] = useState(false);
  const [isRatingConfigOpen, setIsRatingConfigOpen] = useState(true);
  const [isCurrentRatingOpen, setIsCurrentRatingOpen] = useState(true);
  const [showQuestionTypeDropdown, setShowQuestionTypeDropdown] = useState<number | null>(null);

  const handleCancelEdit = () => {
    window.history.back();
  };

  const handlePreviewReview = () => {
    // 라우터 연동 시 미리보기로 이동하도록 확장 가능
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // 저장 API 연동 지점
    } finally {
      setIsSaving(false);
    }
  };

  const changeQuestionType = (questionId: number, newType: 'multiple' | 'text' | 'rating') => {
    // 타입 변경 시 등급형이면 필수 및 공통 옵션/점수 적용
    if (newType === 'rating') {
      updateQuestion(questionId, {
        type: 'rating',
        required: true,
        options: [...ratingConfig.options],
        optionScores: [...ratingConfig.scores]
      });
      return;
    }
    // 그 외 타입은 옵션 초기화
    updateQuestion(questionId, { type: newType, options: undefined, optionScores: undefined, required: false });
  };

  // 스크롤을 위한 ref 객체들
  const itemRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // 드롭다운 외부 클릭 감지
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showQuestionTypeDropdown !== null) {
        const target = event.target as Element;
        if (!target.closest('.question-type-dropdown')) {
          setShowQuestionTypeDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showQuestionTypeDropdown]);

  // 스크롤 함수
  const scrollToItem = (id: number, type: 'section' | 'question') => {
    const key = `${type}-${id}`;
    const element = itemRefs.current[key];
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      });
    }
  };

  // 사이드바에서 클릭 시 스크롤과 선택을 모두 처리
  const handleSidebarItemClick = (id: number, type: 'section' | 'question') => {
    if (type === 'section') {
      selectSection(id);
    } else {
      selectQuestion(id);
    }
    scrollToItem(id, type);
  };

  return (
    <div className="bg-[#F7FAFC] h-full overflow-auto">
      <div className="w-full max-w-[1280px] mx-auto px-16">
        {/* 헤더 섹션 - sticky로 고정 */}
        <div className="sticky top-0 z-10 bg-[#F7FAFC] flex items-center justify-between mb-8 pb-6 pt-6">
          <div className="flex flex-col gap-2">
            <button
              onClick={handleCancelEdit}
              className="flex items-center gap-2 h-8 px-0 py-2 text-[#6a7282] hover:text-[#101828] transition-colors rounded-[4px] self-start"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium leading-5">{editMode === 'edit' ? '수정 취소' : '목록으로'}</span>
            </button>
            <h1 className="text-2xl font-bold text-[#101828] leading-8">{editMode === 'create' ? '새 리뷰 생성' : '리뷰 수정'}</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="bg-white border-gray-200 text-[#4a5565] hover:bg-gray-50 h-9 px-4 py-2 gap-2 rounded-[4px]"
              onClick={handlePreviewReview}
            >
              <Eye className="h-4 w-4" />
              <span className="text-sm font-medium leading-5">미리보기</span>
            </Button>
            <Button
              className="bg-[#1447e6] hover:bg-[#1447e6]/90 text-white h-9 px-4 py-2 gap-2 rounded-[4px] disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleSave}
              disabled={isSaving}
            >
              {isSaving ? (
                <>
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                  <span className="text-sm font-medium leading-5">저장 중...</span>
                </>
              ) : (
                <span className="text-sm font-medium leading-5">저장하기</span>
              )}
            </Button>
          </div>
        </div>

        {/* 메인 컨텐츠 */}
        <div className="flex gap-6 items-start justify-start">
          {/* 중앙 메인 섹션 */}
          <main className="flex-1 min-w-0 pb-16">
            <div className="flex flex-col gap-8">
              {/* 기본 설정 영역 - Figma 디자인 적용 */}
              <RatingConfigComponent
                ratingConfig={ratingConfig}
                updateRatingConfig={updateRatingConfig}
                isRatingConfigOpen={isRatingConfigOpen}
                setIsRatingConfigOpen={setIsRatingConfigOpen}
                reviewTitle={reviewTitle}
                setReviewTitle={setReviewTitle}
                reviewDescription={reviewDescription}
                setReviewDescription={setReviewDescription}
                addRatingOption={addRatingOption}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                isDatePickerOpen={isDatePickerOpen}
                setIsDatePickerOpen={setIsDatePickerOpen}
                onSelectEvaluators={() => setIsEvaluatorModalOpen(true)}
                onSelectTargets={() => setIsTargetModalOpen(true)}
                selectedEvaluators={selectedEvaluators}
                selectedTargets={selectedTargets}
              />

              {/* 섹션들과 문항들 */}
              <div className="space-y-6">
                {/* 섹션들과 문항들을 순서대로 렌더링 */}
                {getSortedItems().map((item, index) => (
                  <div
                    key={`${item.type}-${item.id}`}
                    ref={(el) => {
                      itemRefs.current[`${item.type}-${item.id}`] = el;
                    }}
                  >
                    <DraggableReviewItem
                      item={item}
                      index={index}
                      moveItem={moveItem}
                      selectItem={(id, type) => {
                        if (type === 'section') {
                          selectSection(id);
                        } else {
                          selectQuestion(id);
                        }
                      }}
                      selectedSectionId={selectedSectionId}
                      selectedQuestionId={selectedQuestionId}
                      isMainContent={true}
                      updateSection={updateSection}
                      deleteSection={deleteSection}
                      updateQuestion={updateQuestion}
                      deleteQuestion={deleteQuestion}
                      changeQuestionType={changeQuestionType}
                      showQuestionTypeDropdown={showQuestionTypeDropdown}
                      setShowQuestionTypeDropdown={setShowQuestionTypeDropdown}
                      ratingConfig={ratingConfig}
                      questions={questions}
                      isCurrentRatingOpen={isCurrentRatingOpen}
                      setIsCurrentRatingOpen={setIsCurrentRatingOpen}
                    />
                  </div>
                ))}
              </div>

              {/* 추가 버튼들 */}
              <div className="flex items-start justify-center gap-[11.99px] pt-4 w-full">
                <Button
                  className="bg-zinc-100 border border-gray-200 text-zinc-900 hover:bg-zinc-200 px-6 py-3 gap-2 rounded-[4px]"
                  onClick={addSection}
                >
                  <Plus className="h-4 w-4 text-[#71717A]" />
                  <span className="text-sm font-medium leading-5">섹션 추가</span>
                </Button>
                <Button
                  className="bg-zinc-100 border border-gray-200 text-zinc-900 hover:bg-zinc-200 px-6 py-3 gap-2 rounded-[4px]"
                  onClick={() => addQuestion('multiple')}
                >
                  <Plus className="h-4 w-4 text-[#71717A]" />
                  <span className="text-sm font-medium leading-5">문항 추가</span>
                </Button>
              </div>
            </div>
          </main>

          {/* 우측 사이드바 영역 */}
          <aside className="sticky top-[120px] flex flex-col gap-4 w-80 flex-shrink-0 h-fit max-h-[calc(100vh-120px-24px)] overflow-hidden">
            {/* 설문 구조 사이드바 */}
            <div className="bg-[rgb(255,255,255)] border border-[#f1f1f1] rounded-[8px] p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-medium text-[#101828] leading-5">리뷰 구조</h3>
                <div className="bg-slate-50 px-2 py-1 rounded-[4px]">
                  <span className="text-xs font-medium text-slate-600 leading-4">{questions.length + sections.length}개 항목</span>
                </div>
              </div>

              {/* 문항 타입별 통계 */}
              <div className="space-y-1.5 mb-4">
                <div className="flex items-center justify-between pl-0 pr-2">
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p3dcf1000} stroke="#64748B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm text-slate-500 leading-5">객관식</span>
                  </div>
                  <span className="text-sm text-slate-500 leading-5">{questions.filter(q => q.type === 'multiple').length}개</span>
                </div>
                <div className="flex items-center justify-between pl-0 pr-2">
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p17f48400} stroke="#64748B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm text-slate-500 leading-5">등급형</span>
                  </div>
                  <span className="text-sm text-slate-500 leading-5">{questions.filter(q => q.type === 'rating').length}개</span>
                </div>
                <div className="flex items-center justify-between pl-0 pr-2">
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p19416e00} stroke="#64748B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p3e059a80} stroke="#64748B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.66667 6H5.33333" stroke="#64748B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.6667 8.66667H5.33333" stroke="#64748B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.6667 11.3333H5.33333" stroke="#64748B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm text-slate-500 leading-5">주관식</span>
                  </div>
                  <span className="text-sm text-slate-500 leading-5">{questions.filter(q => q.type === 'text').length}개</span>
                </div>
              </div>

              {/* 섹션 관리 */}
              <div className="space-y-2 mb-4">
                <p className="text-xs text-slate-500 leading-4 w-full">섹션 관리</p>
                <button
                  className="bg-white border border-dashed border-slate-200 h-8 rounded-[4px] w-full flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                  onClick={addSection}
                >
                  <Plus className="h-4 w-4 text-[#1E293B]" />
                  <span className="text-sm font-medium text-slate-800 leading-5">섹션 추가</span>
                </button>
              </div>

              {/* 문항 추가 */}
              <div className="space-y-2">
                <p className="text-xs text-slate-500 leading-4 w-full">문항 추가</p>
                <div className="flex gap-2 w-full">
                  <button
                    className="flex-1 bg-blue-50 rounded-[4px] py-2 px-2 flex flex-col items-center justify-center gap-1 hover:bg-blue-100 transition-colors min-w-0"
                    onClick={() => addQuestion('multiple')}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p3dcf1000} stroke="#1447E6" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-xs font-medium text-[#1447e6] leading-4 text-center whitespace-nowrap">객관식</span>
                  </button>
                  <button
                    className="flex-1 bg-green-50 rounded-[4px] py-2 px-2 flex flex-col items-center justify-center gap-1 hover:bg-green-100 transition-colors min-w-0"
                    onClick={() => addQuestion('text')}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p19416e00} stroke="#008236" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p3e059a80} stroke="#008236" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.66667 6H5.33333" stroke="#008236" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.6667 8.66667H5.33333" stroke="#008236" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.6667 11.3333H5.33333" stroke="#008236" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-xs font-medium text-[#008236] leading-4 text-center whitespace-nowrap">주관식</span>
                  </button>
                  <button
                    className="flex-1 bg-purple-50 rounded-[4px] py-2 px-2 flex flex-col items-center justify-center gap-1 hover:bg-purple-100 transition-colors min-w-0"
                    onClick={() => addQuestion('rating')}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p17f48400} stroke="#8200DB" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-xs font-medium text-[#8200db] leading-4 text-center whitespace-nowrap">등급형</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 전체 문항 사이드바 */}
            <div className="bg-[#fdfdfd] border border-[#f1f1f1] rounded-[8px] overflow-hidden flex flex-col flex-1">
              <div className="border-b border-[#f1f1f1] p-4 pb-3">
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-medium text-[#101828] leading-5">전체 문항</h3>
                  <p className="text-xs text-slate-500 leading-4">문항을 드래그하여 순서를 변경하세요</p>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 pt-4">
                <div className="space-y-1">
                  {/* 통합된 아이템들을 순서대로 표시 */}
                  {getSortedItems().map((item, index) => (
                    <DraggableReviewItem
                      key={`sidebar-${item.type}-${item.id}`}
                      item={item}
                      index={index}
                      moveItem={moveItem}
                      selectItem={handleSidebarItemClick}
                      selectedSectionId={selectedSectionId}
                      selectedQuestionId={selectedQuestionId}
                      isMainContent={false}
                      questions={questions}
                    />
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
