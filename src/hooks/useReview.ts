import { useState } from 'react';
import type { Question, Section, ReviewItem, Employee, RatingConfig } from '../types';

/**
 * 설문(리뷰) 관련 상태 및 로직을 관리하는 커스텀 훅
 */
export function useReview() {
  // 문항 상태
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedQuestionId, setSelectedQuestionId] = useState<number | undefined>();
  const [nextId, setNextId] = useState(1);

  // 섹션 상태
  const [sections, setSections] = useState<Section[]>([]);
  const [selectedSectionId, setSelectedSectionId] = useState<number | undefined>();
  const [nextSectionId, setNextSectionId] = useState(1);

  // 순서 관리
  const [nextOrder, setNextOrder] = useState(1);

  // 리뷰 기본 정보
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewDescription, setReviewDescription] = useState('');
  const [currentReviewId, setCurrentReviewId] = useState<number | null>(null);

  // 평가자/피평가자
  const [selectedEvaluators, setSelectedEvaluators] = useState<Employee[]>([]);
  const [selectedTargets, setSelectedTargets] = useState<Employee[]>([]);

  // 공통 등급형 설정
  const [ratingConfig, setRatingConfig] = useState<RatingConfig>({
    options: ['매우 부족', '부족', '보통', '우수', '매우 우수'],
    scores: [1, 2, 3, 4, 5]
  });

  // 진행 기간
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  // 통합된 아이템 목록 생성
  const getSortedItems = (): ReviewItem[] => {
    const sectionItems: ReviewItem[] = sections.map(section => ({
      id: section.id,
      type: 'section' as const,
      data: section,
      order: section.order
    }));

    const questionItems: ReviewItem[] = questions.map(question => ({
      id: question.id,
      type: 'question' as const,
      data: question,
      order: question.order
    }));

    return [...sectionItems, ...questionItems].sort((a, b) => a.order - b.order);
  };

  // 문항 추가
  const addQuestion = (type: 'multiple' | 'text' | 'rating' = 'multiple', sectionId?: number) => {
    let defaultOptions: string[] | undefined;
    let defaultScores: number[] | undefined;
    let isRequired = false;

    if (type === 'multiple') {
      defaultOptions = ['옵션 1', '옵션 2'];
    } else if (type === 'rating') {
      defaultOptions = [...ratingConfig.options];
      defaultScores = [...ratingConfig.scores];
      isRequired = true;
    }

    const newQuestion: Question = {
      id: nextId,
      type,
      title: '',
      description: '',
      options: defaultOptions,
      optionScores: defaultScores,
      required: isRequired,
      sectionId: sectionId || selectedSectionId,
      order: nextOrder
    };

    setQuestions(prev => [...prev, newQuestion]);
    setSelectedQuestionId(nextId);
    setNextId(prev => prev + 1);
    setNextOrder(prev => prev + 1);
  };

  // 문항 수정
  const updateQuestion = (id: number, updates: Partial<Question>) => {
    setQuestions(prev =>
      prev.map(q => {
        if (q.id === id) {
          const updatedQuestion = { ...q, ...updates };
          // 등급형 문항은 항상 필수로 유지
          if (updatedQuestion.type === 'rating') {
            updatedQuestion.required = true;
          }
          return updatedQuestion;
        }
        return q;
      })
    );
  };

  // 문항 삭제
  const deleteQuestion = (id: number) => {
    setQuestions(prev => prev.filter(q => q.id !== id));
    if (selectedQuestionId === id) {
      setSelectedQuestionId(undefined);
    }
  };

  // 문항 선택
  const selectQuestion = (id: number) => {
    setSelectedQuestionId(id);
    setSelectedSectionId(undefined);
  };

  // 섹션 추가
  const addSection = () => {
    console.log("selectedSectionId:" + selectedSectionId);
    console.log("nextSectionId:" + nextSectionId);
    const newSection: Section = {
      id: nextSectionId,
      title: '',
      description: '',
      order: nextOrder
    };
    setSections(prev => [...prev, newSection]);
    setSelectedSectionId(nextSectionId);
    setSelectedQuestionId(undefined);
    setNextSectionId(prev => prev + 1);
    setNextOrder(prev => prev + 1);
  };

  // 섹션 수정
  const updateSection = (id: number, updates: Partial<Section>) => {
    setSections(prev =>
      prev.map(s => (s.id === id ? { ...s, ...updates } : s))
    );
  };

  // 섹션 삭제
  const deleteSection = (id: number) => {
    setSections(prev => prev.filter(s => s.id !== id));
    // 해당 섹션의 문항들도 삭제
    setQuestions(prev => prev.filter(q => q.sectionId !== id));
    if (selectedSectionId === id) {
      setSelectedSectionId(undefined);
    }
  };

  // 섹션 선택
  const selectSection = (id: number) => {
    setSelectedSectionId(id);
    setSelectedQuestionId(undefined);
  };

  // 아이템 순서 변경
  const moveItem = (dragIndex: number, hoverIndex: number) => {
    const items = getSortedItems();
    const dragItem = items[dragIndex];
    const newItems = [...items];
    newItems.splice(dragIndex, 1);
    newItems.splice(hoverIndex, 0, dragItem);

    // 순서 업데이트
    newItems.forEach((item, index) => {
      if (item.type === 'section') {
        updateSection(item.id, { order: index });
      } else {
        updateQuestion(item.id, { order: index });
      }
    });
  };

  // 등급형 설정 업데이트
  const updateRatingConfig = (config: RatingConfig) => {
    setRatingConfig(config);
    // 기존 등급형 문항들도 업데이트
    setQuestions(prev =>
      prev.map(q => {
        if (q.type === 'rating') {
          return {
            ...q,
            options: [...config.options],
            optionScores: [...config.scores]
          };
        }
        return q;
      })
    );
  };

  // 등급형 옵션 추가
  const addRatingOption = () => {
    const newOptions = [...ratingConfig.options, `옵션 ${ratingConfig.options.length + 1}`];
    const newScores = [...ratingConfig.scores, ratingConfig.scores.length + 1];
    updateRatingConfig({ options: newOptions, scores: newScores });
  };

  // 리셋
  const resetReview = () => {
    setQuestions([]);
    setSections([]);
    setSelectedQuestionId(undefined);
    setSelectedSectionId(undefined);
    setReviewTitle('');
    setReviewDescription('');
    setSelectedEvaluators([]);
    setSelectedTargets([]);
    setStartDate('');
    setEndDate('');
    setCurrentReviewId(null);
  };

  return {
    // 상태
    questions,
    sections,
    selectedQuestionId,
    selectedSectionId,
    nextId,
    nextOrder,
    reviewTitle,
    reviewDescription,
    currentReviewId,
    selectedEvaluators,
    selectedTargets,
    ratingConfig,
    startDate,
    endDate,

    // Setters
    setQuestions,
    setSections,
    setSelectedQuestionId,
    setSelectedSectionId,
    setNextId,
    setNextOrder,
    setReviewTitle,
    setReviewDescription,
    setCurrentReviewId,
    setSelectedEvaluators,
    setSelectedTargets,
    setRatingConfig,
    setStartDate,
    setEndDate,

    // 메서드
    getSortedItems,
    addQuestion,
    updateQuestion,
    deleteQuestion,
    selectQuestion,
    addSection,
    updateSection,
    deleteSection,
    selectSection,
    moveItem,
    updateRatingConfig,
    addRatingOption,
    resetReview,
  };
}
