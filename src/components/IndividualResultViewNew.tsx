import React from 'react';
import { Badge } from './ui/badge';
import { Check } from 'lucide-react';

interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
  email: string;
  finalGrade: string;
  evaluatedCount: number;
  totalEvaluators: number;
  responses: Array<{
    questionId: number;
    sectionId: number;
    evaluations: Array<{
      evaluatorId: number;
      score: number;
      option: string;
      text: string;
    }>;
  }>;
}

export function IndividualResultView({ review, employee }: { review: any, employee: Employee }) {
  // 평균 점수만 계산 (민감 정보인 평가 인원 등은 제외)
  const getAverageScore = (questionId: number) => {
    const response = employee.responses.find(r => r.questionId === questionId);
    if (!response || response.evaluations.length === 0) return null;

    const scores = response.evaluations.map((e: any) => e.score).filter(score => score !== undefined);
    if (scores.length === 0) return null;

    const sum = scores.reduce((acc: number, score: number) => acc + score, 0);
    return (sum / scores.length).toFixed(1);
  };

  // 섹션별 평균 계산
  const getSectionAverage = (sectionId: number) => {
    const section = review.sections.find((s: any) => s.id === sectionId);
    if (!section) return null;

    const ratingQuestions = section.questions.filter((q: any) => q.type === 'rating');
    if (ratingQuestions.length === 0) return null;

    let totalScore = 0;
    let validQuestions = 0;

    ratingQuestions.forEach((question: any) => {
      const avgScore = getAverageScore(question.id);
      if (avgScore !== null) {
        totalScore += parseFloat(avgScore);
        validQuestions += 1;
      }
    });

    return validQuestions > 0 ? (totalScore / validQuestions).toFixed(1) : null;
  };

  // 전체 평균 점수 계산 (등급형 문항만)
  const calculateFinalScore = () => {
    if (!employee.responses || employee.responses.length === 0) return 0;

    let totalScore = 0;
    let totalQuestions = 0;

    employee.responses.forEach(response => {
      if (response.evaluations && response.evaluations.length > 0) {
        const scores = response.evaluations.map((e: any) => e.score).filter(score => score !== undefined);
        if (scores.length > 0) {
          const questionSum = scores.reduce((acc: number, score: number) => acc + score, 0);
          const questionAvg = questionSum / scores.length;
          totalScore += questionAvg;
          totalQuestions += 1;
        }
      }
    });

    return totalQuestions > 0 ? totalScore / totalQuestions : 0;
  };

  const finalScore = calculateFinalScore();

  // 등급형 문항 수 계산
  const ratingQuestionsCount = review.sections.reduce((acc: number, s: any) =>
    acc + s.questions.filter((q: any) => q.type === 'rating').length, 0
  );

  return (
    <div className="space-y-5">
      {/* 개인 정보 카드 */}
      <div className="bg-white border border-slate-200 rounded-lg p-6">
        <div className="mb-5">
          <h4 className="text-sm font-semibold text-slate-900">피평가자 정보</h4>
          <p className="text-xs text-slate-500 mt-0.5">{review.title}</p>
        </div>

        <div className="grid grid-cols-5 gap-6">
          <div>
            <p className="text-xs text-slate-500 mb-1">이름</p>
            <p className="text-sm font-medium text-slate-900">{employee.name}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-1">소속팀</p>
            <p className="text-sm font-medium text-slate-900">{employee.department}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-1">직위</p>
            <p className="text-sm font-medium text-slate-900">{employee.position}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-1">이메일</p>
            <p className="text-sm font-medium text-slate-900">{employee.email}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-1">총점수</p>
            <div className="flex items-baseline gap-0.5">
              <span className="text-base font-bold text-[#1e40af]">{finalScore.toFixed(1)}</span>
              <span className="text-xs text-slate-400">/ 5</span>
            </div>
          </div>
        </div>
      </div>

      {/* 섹션별 평가 결과 */}
      <div className="space-y-4">
        {review.sections.map((section: any, sectionIndex: number) => {
          const sectionAvg = getSectionAverage(section.id);

          return (
            <div key={section.id} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              {/* 섹션 헤더 */}
              <div className="bg-slate-50 px-5 py-3.5 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-slate-500">Section {sectionIndex + 1}</span>
                    <div className="h-3 w-px bg-slate-300"></div>
                    <h5 className="text-sm font-semibold text-slate-900">{section.title}</h5>
                    {section.description && (
                      <>
                        <div className="h-1 w-1 rounded-full bg-slate-300"></div>
                        <p className="text-xs text-slate-500">{section.description}</p>
                      </>
                    )}
                  </div>
                  {sectionAvg !== null && (
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-slate-500">평균</span>
                      <span className="text-lg font-bold text-[#1e40af]">{sectionAvg}</span>
                      <span className="text-xs text-slate-400">/ 5.0</span>
                    </div>
                  )}
                </div>
              </div>

              {/* 통합된 문항 리스트 - Figma 디자인 기반 */}
              <div className="divide-y divide-slate-100">
                {section.questions.map((question: any, qIndex: number) => {
                  const avgScore = question.type === 'rating' ? getAverageScore(question.id) : null;
                  const isRequired = question.required || question.type === 'rating';

                  return (
                    <div key={question.id} className="flex items-center hover:bg-slate-50/50 transition-colors">
                      {/* No와 유형 */}
                      <div className="w-[137px] px-4 py-5 flex items-center gap-3">
                        <div className="bg-slate-100 rounded-full size-6 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-medium text-[#45556c]">{qIndex + 1}</span>
                        </div>
                        <Badge
                          variant="secondary"
                          className={`text-xs h-[22px] ${
                            question.type === 'rating' 
                              ? 'bg-purple-50 text-purple-700 border-purple-200' 
                              : question.type === 'multiple'
                              ? 'bg-blue-50 text-[#1447e6] border-[#bedbff]' 
                              : 'bg-green-50 text-[#008236] border-[#b9f8cf]'
                          }`}
                        >
                          {question.type === 'rating' ? '등급형' : question.type === 'multiple' ? '객관식' : '주관식'}
                        </Badge>
                      </div>

                      {/* 문항 */}
                      <div className="flex-1 px-4 py-5">
                        <div className="flex flex-col gap-0.5">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium text-[#0f172b]">{question.title}</p>
                            {isRequired && (
                              <Badge variant="secondary" className="bg-red-50 text-red-600 border-red-200 text-[10px] h-4 px-1.5">
                                필수
                              </Badge>
                            )}
                          </div>
                          {question.description && (
                            <p className="text-xs text-[#62748e]">{question.description}</p>
                          )}
                        </div>
                      </div>

                      {/* 평균 점수 또는 완료 */}
                      <div className="w-28 px-4 py-5 flex items-center justify-center">
                        {question.type === 'rating' ? (
                          avgScore !== null ? (
                            <div className="flex items-baseline gap-0.5">
                              <span className="text-xl font-bold text-[#1e40af]">{avgScore}</span>
                              <span className="text-xs text-[#90a1b9]">/ 5</span>
                            </div>
                          ) : (
                            <span className="text-sm text-slate-300">-</span>
                          )
                        ) : (
                          <div className="inline-flex items-center gap-1.5 text-xs text-[#62748E]">
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 14 14">
                              <path d="M11.6666 3.5L5.25 9.91664L2.33334 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="font-medium">완료</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
