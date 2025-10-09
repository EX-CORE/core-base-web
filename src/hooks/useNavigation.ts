import { useState } from 'react';
import type { PageType, EditMode } from '../types';

/**
 * 페이지 네비게이션 관련 상태 및 로직을 관리하는 커스텀 훅
 */
export function useNavigation() {
  const [currentPage, setCurrentPage] = useState<PageType>('survey-list');
  const [editMode, setEditMode] = useState<EditMode>('create');

  // 리뷰 목록 페이지로 이동
  const goToSurveyList = () => {
    setCurrentPage('survey-list');
  };

  // 리뷰 생성 페이지로 이동
  const goToSurveyCreate = () => {
    setCurrentPage('survey-create');
    setEditMode('create');
  };

  // 리뷰 상세 페이지로 이동
  const goToSurveyDetail = (surveyId: number) => {
    setCurrentPage('survey-detail');
  };

  // 리뷰 편집 페이지로 이동
  const goToSurveyEdit = (surveyId: number) => {
    setCurrentPage('survey-create');
    setEditMode('edit');
  };

  // 리뷰 미리보기 페이지로 이동
  const goToSurveyPreview = () => {
    setCurrentPage('survey-preview');
  };

  // 리뷰 결과 페이지로 이동
  const goToSurveyResults = () => {
    setCurrentPage('survey-results');
  };

  // 대시보드 페이지로 이동
  const goToDashboard = () => {
    setCurrentPage('dashboard');
  };

  // 리뷰 페이지로 이동
  const goToReview = () => {
    setCurrentPage('review');
  };

  // 조직 관리 페이지로 이동
  const goToOrganizationManagement = () => {
    setCurrentPage('organization-management');
  };

  // 설정 페이지로 이동
  const goToSettings = () => {
    setCurrentPage('settings');
  };

  // 메뉴 라벨로 페이지 이동
  const navigateByMenuLabel = (label: string, handleBackToSurveyList: () => void) => {
    switch (label) {
      case '대시보드':
        goToDashboard();
        break;
      case '리뷰':
        goToReview();
        break;
      case '리뷰 관리':
        if (currentPage !== 'survey-list') {
          handleBackToSurveyList();
        }
        break;
      case '리뷰 결과':
        goToSurveyResults();
        break;
      case '조직 관리':
        goToOrganizationManagement();
        break;
      case '설정':
        goToSettings();
        break;
    }
  };

  return {
    // 상태
    currentPage,
    editMode,
    
    // Setters
    setCurrentPage,
    setEditMode,
    
    // 메서드
    goToSurveyList,
    goToSurveyCreate,
    goToSurveyDetail,
    goToSurveyEdit,
    goToSurveyPreview,
    goToSurveyResults,
    goToDashboard,
    goToReview,
    goToOrganizationManagement,
    goToSettings,
    navigateByMenuLabel,
  };
}
