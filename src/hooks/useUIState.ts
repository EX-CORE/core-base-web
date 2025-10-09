import { useState } from 'react';

/**
 * UI 관련 상태를 관리하는 커스텀 훅
 */
export function useUIState() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isEvaluatorModalOpen, setIsEvaluatorModalOpen] = useState(false);
  const [isTargetModalOpen, setIsTargetModalOpen] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isRatingConfigOpen, setIsRatingConfigOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // 사이드바 토글
  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev);
  };

  // 평가자 선택 모달 열기/닫기
  const openEvaluatorModal = () => setIsEvaluatorModalOpen(true);
  const closeEvaluatorModal = () => setIsEvaluatorModalOpen(false);

  // 피평가자 선택 모달 열기/닫기
  const openTargetModal = () => setIsTargetModalOpen(true);
  const closeTargetModal = () => setIsTargetModalOpen(false);

  // 날짜 선택기 열기/닫기
  const openDatePicker = () => setIsDatePickerOpen(true);
  const closeDatePicker = () => setIsDatePickerOpen(false);

  // 등급형 설정 열기/닫기
  const openRatingConfig = () => setIsRatingConfigOpen(true);
  const closeRatingConfig = () => setIsRatingConfigOpen(false);

  return {
    // 상태
    isSidebarCollapsed,
    isEvaluatorModalOpen,
    isTargetModalOpen,
    isDatePickerOpen,
    isRatingConfigOpen,
    isSaving,
    
    // Setters
    setIsSidebarCollapsed,
    setIsEvaluatorModalOpen,
    setIsTargetModalOpen,
    setIsDatePickerOpen,
    setIsRatingConfigOpen,
    setIsSaving,
    
    // 메서드
    toggleSidebar,
    openEvaluatorModal,
    closeEvaluatorModal,
    openTargetModal,
    closeTargetModal,
    openDatePicker,
    closeDatePicker,
    openRatingConfig,
    closeRatingConfig,
  };
}
