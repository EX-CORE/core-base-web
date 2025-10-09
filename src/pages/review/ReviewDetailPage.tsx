import React, {useState} from 'react';
import {Button} from '../../components/ui/button';
import {Label} from '../../components/ui/label';
import {Switch} from '../../components/ui/switch';
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from '../../components/ui/collapsible';
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from '../../components/ui/dialog';
import {Progress} from '../../components/ui/progress';
import EvaluatorMappingModal from '../../components/EvaluatorMappingModal';
import {ArrowLeft, BarChart3, Calendar, ChevronDown, ChevronUp, Edit3, Eye, Play, UserCheck, Users} from 'lucide-react';
import {useNavigate, useParams} from "react-router-dom";
import {mockReviewDetails} from "./mockData";
import {ReviewState} from "../../types";

interface ReviewDetailPageProps {
  onPreview?: () => void;
}

export default function ReviewDetailPage({onPreview }: ReviewDetailPageProps) {
  const navigate = useNavigate();
  const { reviewId } = useParams<{ reviewId?: string }>();
  const [ratingConfigExpanded, setRatingConfigExpanded] = useState(true);
  const [questionRatingExpanded, setQuestionRatingExpanded] = useState(true);
  const [statisticsExpanded, setStatisticsExpanded] = useState(true);
  const [isEvaluatorModalOpen, setIsEvaluatorModalOpen] = useState(false);
  const [isTargetModalOpen, setIsTargetModalOpen] = useState(false);
  const [isParticipationModalOpen, setIsParticipationModalOpen] = useState(false);
  const [isMappingModalOpen, setIsMappingModalOpen] = useState(false);
  const reviewData = mockReviewDetails[1]; // 읽기 전용으로 변경

  const onEditClicked = () => {
    navigate(`/management/review/${reviewId}/edit`);
  };

  const onBack = () => {
    navigate(`/management/review/list`);
  };

  // 문항으로 스크롤하는 함수
  const scrollToQuestion = (questionId: number) => {
    const element = document.getElementById(`question-${questionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePreview = () => {
    if (onPreview) {
      onPreview();
    } else {
      alert('미리보기 화면으로 이동합니다.');
    }
  };

  const handleStartReview = () => {
    setIsMappingModalOpen(true);
  };

  const handleMappingConfirm = (mappingConfig: any) => {
    console.log('매핑 설정 완료:', mappingConfig);
    alert('평가자 매핑이 완료되었습니다. 리뷰가 시작됩니다.');
    // 실제로는 API 호출하여 리뷰 시작 처리
  };

  const getStatusBadge = (state: string) => {
    switch (state) {
      case 'active':
        return (
          <span className="bg-green-50 text-green-700 px-2 py-1 rounded-[4px] text-xs font-medium">
            진행중
          </span>
        );
      case 'completed':
        return (
          <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-[4px] text-xs font-medium">
            완료
          </span>
        );
      case 'draft':
        return (
          <span className="bg-gray-50 text-gray-700 px-2 py-1 rounded-[4px] text-xs font-medium">
            임시저장
          </span>
        );
      default:
        return (
          <span className="bg-gray-50 text-gray-700 px-2 py-1 rounded-[4px] text-xs font-medium">
            {state}
          </span>
        );
    }
  };

  return (
    <div className="bg-white h-full overflow-auto">
      <div className="w-full max-w-[1280px] mx-auto px-16 py-16">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex flex-col gap-2">
            <button
              onClick={onBack}
              className="flex items-center gap-2 h-8 px-0 py-2 text-[#6a7282] hover:text-[#101828] transition-colors rounded-[4px] self-start"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium leading-5">목록으로</span>
            </button>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-[#101828] leading-8">리뷰 상세</h1>
              {getStatusBadge(reviewData.state)}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="bg-white border-gray-200 text-[#4a5565] hover:bg-gray-50 h-9 px-4 py-2 gap-2 rounded-[4px]"
              onClick={handlePreview}
            >
              <Eye className="h-4 w-4" />
              <span className="text-sm font-medium leading-5">미리보기</span>
            </Button>
            <Button
              variant="outline"
              className="bg-white border-gray-200 text-[#4a5565] hover:bg-gray-50 h-9 px-4 py-2 gap-2 rounded-[4px]"
              onClick={onEditClicked}
            >
              <Edit3 className="h-4 w-4" />
              <span className="text-sm font-medium leading-5">수정하기</span>
            </Button>
          </div>
        </div>

        <div className="flex gap-6 items-start justify-start">
          {/* 메인 컨텐츠 */}
          <main className="flex-1">
            <div className="flex flex-col gap-8">
              {/* 완료된 리뷰 통계 배너 */}
              {reviewData.state === ReviewState.DONE && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-[8px] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-[6px]">
                        <BarChart3 className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-sm font-semibold text-blue-900">리뷰 통계 분석이 준비되었습니다</h3>
                        <p className="text-xs text-blue-700">상세한 결과 분석과 인사이트를 확인하세요</p>
                      </div>
                    </div>
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white h-9 px-4 py-2 gap-2 rounded-[4px]"
                      onClick={() => alert('리뷰 통계 페이지로 이동합니다.')}
                    >
                      <BarChart3 className="h-4 w-4" />
                      <span className="text-sm font-medium leading-5">통계 보기</span>
                    </Button>
                  </div>
                </div>
              )}

              {/* 임시저장된 리뷰 시작하기 배너 */}
              {reviewData.state === ReviewState.READY && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-[8px] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-2 rounded-[6px]">
                        <Play className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-sm font-semibold text-green-900">리뷰를 시작할 준비가 완료되었습니다</h3>
                        <p className="text-xs text-green-700">평가자와 피평가자 매핑을 설정하여 리뷰를 시작하세요</p>
                      </div>
                    </div>
                    <Button
                      className="bg-green-600 hover:bg-green-700 text-white h-9 px-4 py-2 gap-2 rounded-[4px]"
                      onClick={handleStartReview}
                    >
                      <Play className="h-4 w-4" />
                      <span className="text-sm font-medium leading-5">리뷰 시작하기</span>
                    </Button>
                  </div>
                </div>
              )}

              {/* 기본 정보 */}
              <div className="bg-[#fdfdfd] border border-[#f1f1f1] rounded-[8px] p-6">
                <div className="flex flex-col gap-6">
                  {/* 리뷰 제목과 설명 */}
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[22px] font-medium text-[#101828] leading-7">
                      {reviewData.title}
                    </h2>
                    <p className="text-base text-[#101828] leading-5 pt-1">
                      {reviewData.description}
                    </p>
                  </div>

                  {/* 기본 정보 그리드 */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <Label className="text-sm font-medium text-[#6a7282] leading-5">진행 기간</Label>
                      <div className="bg-white border border-[#eaeaea] rounded-[4px] h-9 px-4 py-2 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-zinc-700 leading-[14px]">{reviewData.startDate}</span>
                          <span className="text-sm font-medium text-zinc-700 leading-[14px]">~</span>
                          <span className="text-sm font-medium text-zinc-700 leading-[14px]">{reviewData.endDate}</span>
                        </div>
                        <div className="h-[13.125px] w-3.5">
                          <Calendar className="h-4 w-4 text-black" />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label className="text-sm font-medium text-[#6a7282] leading-5">생성일</Label>
                      <div className="bg-white border border-[#eaeaea] rounded-[4px] h-9 px-4 py-2 flex items-center">
                        <span className="text-sm font-medium text-zinc-700 leading-[14px]">{reviewData.createdDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* 평가자/피평가자 정보 */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <Label className="text-sm font-medium text-[#6a7282] leading-5">평가자</Label>
                      <Button
                        variant="outline"
                        className="bg-white border border-[#eaeaea] text-zinc-700 hover:bg-gray-50 h-9 px-4 py-2 gap-2 rounded-[4px] justify-start"
                        onClick={() => setIsEvaluatorModalOpen(true)}
                      >
                        <Users className="h-4 w-4" />
                        <span className="text-sm font-medium leading-5">
                          {reviewData.participants.evaluators.length}명 선택됨
                        </span>
                      </Button>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label className="text-sm font-medium text-[#6a7282] leading-5">피평가자</Label>
                      <Button
                        variant="outline"
                        className="bg-white border border-[#eaeaea] text-zinc-700 hover:bg-gray-50 h-9 px-4 py-2 gap-2 rounded-[4px] justify-start"
                        onClick={() => setIsTargetModalOpen(true)}
                      >
                        <UserCheck className="h-4 w-4" />
                        <span className="text-sm font-medium leading-5">
                          {reviewData.participants.targets.length}명 선택됨
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 통계 정보 */}
              <Collapsible open={statisticsExpanded} onOpenChange={setStatisticsExpanded}>
                <div className="bg-[#fdfdfd] border border-[#f1f1f1] rounded-[8px] p-6">
                  <CollapsibleTrigger className="flex items-start justify-between w-full mb-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-sm font-medium text-slate-800 leading-[14px] text-left">리뷰 통계</h3>
                      <p className="text-sm font-medium text-[#6a7282] leading-5 text-left">현재 리뷰의 참여 현황과 결과를 확인할 수 있습니다.</p>
                    </div>
                    {statisticsExpanded ? (
                      <ChevronUp className="h-6 w-6 mt-1" />
                    ) : (
                      <ChevronDown className="h-6 w-6 mt-1" />
                    )}
                  </CollapsibleTrigger>

                  <div className="h-0 border-b border-[#E4E4E7] mb-4"></div>

                  <CollapsibleContent>
                    <div className="space-y-6">
                      {/* 참여율 바 그래프 */}
                      <div className="bg-blue-50 border border-blue-200 rounded-[6px] p-4">
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center justify-between">
                            <div className="flex flex-col gap-1">
                              <span className="text-sm font-medium text-blue-700">참여율</span>
                              <span className="text-2xl font-bold text-blue-800">{reviewData.statistics.responseRate}%</span>
                            </div>
                            <button
                              onClick={() => setIsParticipationModalOpen(true)}
                              className="text-xs text-blue-600 hover:text-blue-800 underline"
                            >
                              {reviewData.statistics.totalResponses}/{reviewData.statistics.totalTargets}명 참여
                            </button>
                          </div>
                          <div className="space-y-2">
                            <Progress value={reviewData.statistics.responseRate} className="h-3" />
                            <div className="flex justify-between text-xs text-blue-600">
                              <span>완료: {reviewData.participants.evaluators.filter(e => e.completed).length}명</span>
                              <span>미완료: {reviewData.participants.evaluators.filter(e => !e.completed).length}명</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>

              {/* 등급형 문항 설정 */}
              <Collapsible open={ratingConfigExpanded} onOpenChange={setRatingConfigExpanded}>
                <div className="bg-[#fdfdfd] border border-[#f1f1f1] rounded-[8px] p-6">
                  <CollapsibleTrigger className="flex items-start justify-between w-full mb-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-sm font-medium text-slate-800 leading-[14px] text-left">등급형 문항 설정</h3>
                      <p className="text-sm font-medium text-[#6a7282] leading-5 text-left">모든 등급형 문항에 적용된 기준입니다.</p>
                    </div>
                    {ratingConfigExpanded ? (
                      <ChevronUp className="h-6 w-6 mt-1" />
                    ) : (
                      <ChevronDown className="h-6 w-6 mt-1" />
                    )}
                  </CollapsibleTrigger>

                  <div className="h-0 border-b border-[#E4E4E7] mb-4"></div>

                  <CollapsibleContent>
                    <div className="flex flex-col gap-2">
                      {reviewData.ratingOptions.map((option, index) => (
                        <div key={index} className="flex items-center gap-4 pl-4">
                          <div className="flex-1 flex items-center gap-6">
                            <div className="flex-1 bg-white border border-[#eaeaea] rounded-[4px] px-[8.67px] py-[8.667px] min-h-9">
                              <span className="text-sm text-[#101828] leading-5">{option.label}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-[#101828] leading-5">점수 :</span>
                              <div className="bg-white border border-[#eaeaea] rounded-[4px] w-[55px] px-[8.67px] py-[8.667px]">
                                <span className="text-sm text-[#101828] leading-5 text-center block">{option.score}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>

              {/* 문항들 */}
              <div className="flex flex-col gap-6">
                {reviewData.questions.map((question, questionIndex) => (
                  <div id={`question-${question.id}`} key={question.id} className="bg-white border border-slate-200 rounded-[10px] p-6">
                    <div className="flex flex-col gap-9">
                      {/* 문항 헤더 */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1 flex flex-col gap-6">
                          <div className="flex items-center gap-3 w-full">
                            <span className="text-sm text-slate-500 leading-5">문항 {questionIndex + 1}.</span>
                            <div className={`px-3 py-2 rounded-[4px] border ${
                              question.type === 'rating' 
                                ? 'bg-purple-50 border-[#e9d4ff] text-[#8200db]' 
                                : question.type === 'multiple'
                                ? 'bg-blue-50 border-[#bfdbfe] text-[#1447e6]'
                                : 'bg-green-50 border-[#bbf7d0] text-[#008236]'
                            } h-9 flex items-center justify-center w-20`}>
                              <span className="text-sm text-nowrap">
                                {question.type === 'rating' ? '등급형' : question.type === 'multiple' ? '객관식' : '주관식'}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 pl-2">
                              <Switch
                                checked={question.required}
                                disabled={true}
                                className="opacity-50"
                              />
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-[#1447e6] opacity-50">
                                  {question.required ? '필수' : '선택'}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col gap-2">
                            <h3 className="text-[22px] font-semibold text-[#101828] leading-7 w-full">
                              {question.title}
                            </h3>
                            <p className="text-base font-normal text-[#101828] leading-5 pt-1">
                              {question.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 문항별 설정 */}
                      {question.type === 'rating' ? (
                        <Collapsible open={questionRatingExpanded} onOpenChange={setQuestionRatingExpanded}>
                          <div className="bg-white border border-gray-200 rounded-[6px] p-6">
                            <CollapsibleTrigger className="flex items-start justify-between w-full mb-4">
                              <div className="flex flex-col gap-2">
                                <h4 className="text-sm font-medium text-slate-800 leading-[14px] text-left">적용된 등급</h4>
                              </div>
                              {questionRatingExpanded ? (
                                <ChevronUp className="h-6 w-6 mt-1" />
                              ) : (
                                <ChevronDown className="h-6 w-6 mt-1" />
                              )}
                            </CollapsibleTrigger>

                            <div className="h-0 border-b border-[#E4E4E7] mb-4"></div>

                            <CollapsibleContent>
                              <div className="px-1 flex flex-col gap-2">
                                {question.ratingOptions?.map((option, index) => (
                                  <div key={index} className="flex items-center gap-2">
                                    <div className="flex-1 flex items-center gap-2">
                                      <div className="flex-1 bg-white border-white rounded-[4px] h-9 flex items-center justify-between px-3">
                                        <span className="text-sm font-medium text-zinc-700 leading-5">
                                          {option.label}
                                        </span>
                                        <span className="text-sm font-medium text-zinc-500 leading-5">
                                          {option.score}점
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </CollapsibleContent>
                          </div>
                        </Collapsible>
                      ) : question.type === 'multiple' ? (
                        <div className="bg-white border border-gray-200 rounded-[6px] p-6">
                          <div className="flex items-start justify-between h-6 mb-4">
                            <div className="flex flex-col gap-2">
                              <h4 className="text-sm font-medium text-slate-800 leading-[14px] text-left">선택지</h4>
                            </div>
                          </div>

                          <div className="px-1 flex flex-col gap-2">
                            {question.options?.map((option, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <div className="flex-1 flex items-center gap-2">
                                  <div className="flex-1 bg-white border-white rounded-[4px] h-9 px-3 flex items-center">
                                    <span className="text-sm text-slate-700">{option}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="bg-white border border-gray-200 rounded-[6px] p-6">
                          <div className="flex items-start justify-between h-6 mb-4">
                            <div className="flex flex-col gap-2">
                              <h4 className="text-sm font-medium text-slate-800 leading-[14px] text-left">주관식 응답</h4>
                            </div>
                          </div>

                          <div className="px-1">
                            <div className="bg-gray-50 border border-gray-200 rounded-[4px] p-3">
                              <p className="text-sm text-gray-500">답변자가 텍스트로 자유롭게 응답할 수 있습니다.</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>

          {/* 우측 사이드바 */}
          <aside className="flex flex-col gap-6 w-80 flex-shrink-0">
            {/* 리뷰 구조 */}
            <div className="bg-[#fdfdfd] border border-[#f1f1f1] rounded-[8px] p-6">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-medium text-[#101828] leading-5">리뷰 구조</h3>
                    <div className="bg-slate-50 px-[9px] py-[3px] rounded-[4px]">
                      <span className="text-xs font-medium text-slate-600 leading-4">{reviewData.questions.length}개 문항</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 16 16">
                          <path d="M14.6667 11.3333C14.6667 11.687 14.5262 12.0261 14.2761 12.2761C14.0261 12.5262 13.687 12.6667 13.3333 12.6667H4.552C4.19841 12.6667 3.85932 12.8073 3.60933 13.0573L2.14133 14.5253C2.07514 14.5915 1.9908 14.6366 1.89899 14.6548C1.80718 14.6731 1.71202 14.6637 1.62554 14.6279C1.53906 14.5921 1.46513 14.5314 1.41312 14.4536C1.36111 14.3758 1.33335 14.2843 1.33333 14.1907V3.33333C1.33333 2.97971 1.47381 2.64057 1.72386 2.39052C1.97391 2.14048 2.31304 2 2.66667 2H13.3333C13.687 2 14.0261 2.14048 14.2761 2.39052C14.5262 2.64057 14.6667 2.97971 14.6667 3.33333V11.3333Z" stroke="#64748B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-sm text-slate-500 leading-5">객관식</span>
                      </div>
                      <span className="text-sm text-slate-500 leading-5">{reviewData.questions.filter(q => q.type === 'multiple').length}개</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 16 16">
                          <path d="M7.68333 1.53C7.71255 1.47097 7.75768 1.42129 7.81363 1.38655C7.86959 1.35181 7.93414 1.3334 8 1.3334C8.06586 1.3334 8.13041 1.35181 8.18637 1.38655C8.24232 1.42129 8.28745 1.47097 8.31667 1.53L9.85667 4.64933C9.95812 4.85464 10.1079 5.03227 10.2931 5.16697C10.4783 5.30167 10.6934 5.38941 10.92 5.42267L14.364 5.92667C14.4293 5.93612 14.4906 5.96365 14.541 6.00613C14.5914 6.04862 14.629 6.10437 14.6493 6.16707C14.6697 6.22978 14.6722 6.29694 14.6564 6.36096C14.6406 6.42498 14.6072 6.4833 14.56 6.52933L12.0693 8.95467C11.9051 9.11473 11.7822 9.31232 11.7112 9.53042C11.6403 9.74852 11.6234 9.98059 11.662 10.2067L12.25 13.6333C12.2615 13.6986 12.2545 13.7657 12.2297 13.8271C12.2049 13.8885 12.1633 13.9417 12.1097 13.9807C12.0561 14.0196 11.9927 14.0427 11.9266 14.0473C11.8605 14.0519 11.7945 14.0378 11.736 14.0067L8.65733 12.388C8.45448 12.2815 8.22879 12.2258 7.99967 12.2258C7.77055 12.2258 7.54485 12.2815 7.342 12.388L4.264 14.0067C4.20555 14.0376 4.1396 14.0515 4.07363 14.0468C4.00767 14.0421 3.94435 14.019 3.89086 13.9801C3.83738 13.9412 3.79589 13.8881 3.7711 13.8268C3.74632 13.7655 3.73924 13.6985 3.75067 13.6333L4.338 10.2073C4.3768 9.98115 4.35999 9.74893 4.28903 9.5307C4.21806 9.31246 4.09507 9.11477 3.93067 8.95467L1.44 6.53C1.3924 6.48402 1.35866 6.4256 1.34264 6.36138C1.32662 6.29717 1.32896 6.22975 1.34939 6.16679C1.36981 6.10384 1.40751 6.04789 1.45818 6.00532C1.50886 5.96275 1.57047 5.93527 1.636 5.926L5.07933 5.42267C5.30617 5.38967 5.52159 5.30204 5.70706 5.16732C5.89252 5.03261 6.04247 4.85485 6.144 4.64933L7.68333 1.53Z" stroke="#64748B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-sm text-slate-500 leading-5">등급형</span>
                      </div>
                      <span className="text-sm text-slate-500 leading-5">{reviewData.questions.filter(q => q.type === 'rating').length}개</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 16 16">
                          <path d="M2 4.66667C2 4.31304 2.14048 3.97391 2.39052 3.72386C2.64057 3.47381 2.97971 3.33333 3.33333 3.33333H12.6667C13.0203 3.33333 13.3594 3.47381 13.6095 3.72386C13.8595 3.97391 14 4.31304 14 4.66667V11.3333C14 11.687 13.8595 12.0261 13.6095 12.2761C13.3594 12.5262 13.0203 12.6667 12.6667 12.6667H3.33333C2.97971 12.6667 2.64057 12.5262 2.39052 12.2761C2.14048 12.0261 2 11.687 2 11.3333V4.66667Z" stroke="#64748B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M2 4.66667L8 8.66667L14 4.66667" stroke="#64748B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M6.66667 6H5.33333" stroke="#64748B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10.6667 8.66667H5.33333" stroke="#64748B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10.6667 11.3333H5.33333" stroke="#64748B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-sm text-slate-500 leading-5">주관식</span>
                      </div>
                      <span className="text-sm text-slate-500 leading-5">{reviewData.questions.filter(q => q.type === 'text').length}개</span>
                    </div>
                  </div>
                </div>

                {/* 목차 */}
                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-medium text-[#101828] leading-5">목차</h4>
                  <div className="flex flex-col gap-1">
                    {reviewData.questions.map((question, index) => (
                      <button
                        key={question.id}
                        onClick={() => scrollToQuestion(question.id)}
                        className="flex items-center gap-2 p-2 rounded-[4px] text-left hover:bg-gray-50 hover:text-blue-600 transition-colors cursor-pointer group"
                      >
                        <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${
                          question.type === 'rating' 
                            ? 'bg-purple-100 text-purple-700 group-hover:bg-purple-200' 
                            : question.type === 'multiple'
                            ? 'bg-blue-100 text-blue-700 group-hover:bg-blue-200'
                            : 'bg-green-100 text-green-700 group-hover:bg-green-200'
                        }`}>
                          {question.type === 'rating' ? '등급형' : question.type === 'multiple' ? '객관식' : '주관식'}
                        </span>
                        <span className="text-sm text-slate-700 leading-5 flex-1 truncate group-hover:text-blue-600">
                          {question.title || `문항 ${index + 1}`}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* 평가자 목록 모달 */}
        <Dialog open={isEvaluatorModalOpen} onOpenChange={setIsEvaluatorModalOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>평가자 목록</DialogTitle>
              <DialogDescription>
                현재 리뷰에 참여하는 평가자 명단입니다.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              {reviewData.participants.evaluators.map((evaluator) => (
                <div key={evaluator.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex flex-col">
                    <span className="font-medium">{evaluator.name}</span>
                    <span className="text-sm text-gray-500">{evaluator.department} · {evaluator.position}</span>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                    evaluator.completed 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {evaluator.completed ? '완료' : '미완료'}
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        {/* 피평가자 목록 모달 */}
        <Dialog open={isTargetModalOpen} onOpenChange={setIsTargetModalOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>피평가자 목록</DialogTitle>
              <DialogDescription>
                현재 리뷰의 평가 대상자 명단입니다.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              {reviewData.participants.targets.map((target) => (
                <div key={target.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex flex-col">
                    <span className="font-medium">{target.name}</span>
                    <span className="text-sm text-gray-500">{target.department} · {target.position}</span>
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        {/* 참여 현황 모달 */}
        <Dialog open={isParticipationModalOpen} onOpenChange={setIsParticipationModalOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>참여 현황</DialogTitle>
              <DialogDescription>
                평가자별 참여 현황을 확인할 수 있습니다.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-700">
                    {reviewData.participants.evaluators.filter(e => e.completed).length}명
                  </div>
                  <div className="text-sm text-green-600">완료</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-700">
                    {reviewData.participants.evaluators.filter(e => !e.completed).length}명
                  </div>
                  <div className="text-sm text-gray-600">미완료</div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">평가자별 현황</h4>
                {reviewData.participants.evaluators.map((evaluator) => (
                  <div key={evaluator.id} className="flex items-center justify-between p-2 border rounded">
                    <span>{evaluator.name}</span>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${
                      evaluator.completed 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {evaluator.completed ? '완료' : '미완료'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* 매핑 설정 모달 */}
        <EvaluatorMappingModal
          isOpen={isMappingModalOpen}
          onClose={() => setIsMappingModalOpen(false)}
          onConfirm={handleMappingConfirm}
          evaluators={reviewData.participants.evaluators}
          targets={reviewData.participants.targets}
        />
      </div>
    </div>
  );
}
