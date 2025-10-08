import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from './ui/alert-dialog';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { BarChart3, Users, Calendar, ArrowLeft, ChevronRight, PieChart, TrendingUp, Search, Filter, ChevronDown, Eye, FileText, Settings, Plus, X, UserCheck } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Cell, Pie } from 'recharts';
import { IndividualResultView } from './IndividualResultViewNew';

// Mock 데이터 - 실제로는 API에서 가져올 데이터
const mockCompletedSurveys = [
  {
    id: 1,
    title: '2024년 4분기 성과 평가',
    description: '팀원들의 4분기 성과를 종합적으로 평가',
    period: '2024.12.01 ~ 2024.12.15',
    duration: '15일간',
    status: '종료됨',
    participants: 15,
    responses: 15,
    avgScore: 4.2,
    completedDate: '2024-12-15',
    sections: [
      {
        id: 1,
        title: '핵심 역량 평가',
        description: '업무 수행과 관련된 핵심 역량을 평가합니다',
        questions: [
          {
            id: 1,
            type: 'rating' as const,
            title: '업무 수행 능력',
            description: '담당 업무를 정확하고 효율적으로 수행하는 정도',
            avgScore: 4.3,
            options: ['매우 부족', '부족', '보통', '우수', '매우 우수']
          },
          {
            id: 2,
            type: 'multiple' as const,
            title: '의사소통 스타일',
            description: '업무 상황에서 선호하는 의사소통 방식',
            avgScore: null,
            options: ['직접적이고 명확한 소통', '협력적이고 포용적인 소통', '분석적이고 논리적인 소통', '창의적이고 유연한 소통']
          }
        ]
      },
      {
        id: 2,
        title: '성장 및 개발 영역',
        description: '개인의 성장과 발전 가능성을 평가합니다',
        questions: [
          {
            id: 3,
            type: 'text' as const,
            title: '개선이 필요한 영역',
            description: '향후 개선하거나 발전시켰으면 하는 영역에 대해 구체적으로 작성해 주세요',
            avgScore: null,
            options: null
          },
          {
            id: 4,
            type: 'rating' as const,
            title: '협업 능력',
            description: '팀원들과의 협업 및 업무 조율 능력',
            avgScore: 4.4,
            options: ['매우 부족', '부족', '보통', '우수', '매우 우수']
          }
        ]
      }
    ],
    participants_data: [
      {
        id: 1,
        name: '김철수',
        department: '개발팀',
        position: '시니어 개발자',
        email: 'kim.chulsoo@company.com',
        finalGrade: '',
        evaluatedCount: 3,
        totalEvaluators: 3,
        responses: [
          { 
            questionId: 1, 
            sectionId: 1,
            evaluations: [
              { evaluatorId: 1, score: 5, option: '매우 우수' },
              { evaluatorId: 2, score: 4, option: '우수' },
              { evaluatorId: 3, score: 5, option: '매우 우수' }
            ]
          },
          { 
            questionId: 2, 
            sectionId: 1,
            evaluations: [
              { evaluatorId: 1, option: '직접적이고 명확한 소통' },
              { evaluatorId: 2, option: '분석적이고 논리적인 소통' },
              { evaluatorId: 3, option: '직접적이고 명확한 소통' }
            ]
          },
          { 
            questionId: 3, 
            sectionId: 2,
            evaluations: [
              { 
                evaluatorId: 1, 
                text: '새로운 기술 스택에 대한 학습 속도를 높이고, 주니어 개발자들에게 더 체계적인 멘토링을 제공했으면 좋겠습니다.'
              },
              { 
                evaluatorId: 2, 
                text: '프로젝트 일정 관리와 우선순위 설정 능력을 개선하여 더 효율적인 업무 진행이 가능할 것 같습니다.'
              },
              { 
                evaluatorId: 3, 
                text: '타 부서와의 커뮤니케이션에서 좀 더 적극적인 자세를 보여주시면 좋을 것 같습니다.'
              }
            ]
          },
          { 
            questionId: 4, 
            sectionId: 2,
            evaluations: [
              { evaluatorId: 1, score: 4, option: '우수' },
              { evaluatorId: 2, score: 5, option: '매우 우수' },
              { evaluatorId: 3, score: 4, option: '우수' }
            ]
          }
        ]
      },
      {
        id: 2,
        name: '이영희',
        department: '디자인팀',
        position: 'UI/UX 디자이너',
        email: 'lee.younghee@company.com',
        finalGrade: '',
        evaluatedCount: 3,
        totalEvaluators: 3,
        responses: [
          { 
            questionId: 1, 
            sectionId: 1,
            evaluations: [
              { evaluatorId: 1, score: 4, option: '우수' },
              { evaluatorId: 2, score: 4, option: '우수' },
              { evaluatorId: 3, score: 4, option: '우수' }
            ]
          },
          { 
            questionId: 2, 
            sectionId: 1,
            evaluations: [
              { evaluatorId: 1, option: '창의적이고 유연한 소통' },
              { evaluatorId: 2, option: '협력적이고 포용적인 소통' },
              { evaluatorId: 3, option: '창의적이고 유연한 소통' }
            ]
          },
          { 
            questionId: 3, 
            sectionId: 2,
            evaluations: [
              { 
                evaluatorId: 1, 
                text: '사용자 리서치 역량을 강화하여 더 데이터 기반의 디자인 결정을 내릴 수 있도록 발전했으면 좋겠습니다.'
              },
              { 
                evaluatorId: 2, 
                text: '개발팀과의 협업에서 기술적 제약사항을 더 잘 이해하고 현실적인 디자인 제안을 했으면 합니다.'
              },
              { 
                evaluatorId: 3, 
                text: '프로젝트 전체 일정을 고려한 디자인 우선순위 설정 능력을 기를 필요가 있습니다.'
              }
            ]
          },
          { 
            questionId: 4, 
            sectionId: 2,
            evaluations: [
              { evaluatorId: 1, score: 4, option: '우수' },
              { evaluatorId: 2, score: 4, option: '우수' },
              { evaluatorId: 3, score: 3, option: '보통' }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '박민수',
        department: '기획팀',
        position: '프로덕트 매니저',
        email: 'park.minsu@company.com',
        finalGrade: '',
        evaluatedCount: 2,
        totalEvaluators: 3,
        responses: [
          { 
            questionId: 1, 
            sectionId: 1,
            evaluations: [
              { evaluatorId: 1, score: 4, option: '우수' },
              { evaluatorId: 2, score: 4, option: '우수' },
              { evaluatorId: 3, score: 3, option: '보통' }
            ]
          },
          { 
            questionId: 2, 
            sectionId: 1,
            evaluations: [
              { evaluatorId: 1, option: '분석적이고 논리적인 소통' },
              { evaluatorId: 2, option: '협력적이고 포용적인 소통' },
              { evaluatorId: 3, option: '��석적이고 논리적인 소통' }
            ]
          },
          { 
            questionId: 3, 
            sectionId: 2,
            evaluations: [
              { 
                evaluatorId: 1, 
                text: '시장 분석과 경쟁사 분석 능력을 더 체계적으로 발전시켜 전략적 의사결정에 활용했으면 좋겠습니다.'
              },
              { 
                evaluatorId: 2, 
                text: '팀 내 커뮤니케이션에서 더 명확하고 구체적인 지시사항 전달이 필요합니다.'
              }
            ]
          },
          { 
            questionId: 4, 
            sectionId: 2,
            evaluations: [
              { evaluatorId: 1, score: 4, option: '우수' },
              { evaluatorId: 2, score: 4, option: '우수' },
              { evaluatorId: 3, score: 4, option: '우수' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: '2024년 3분기 역량 평가',
    description: '직무별 핵심 역량 평가',
    period: '2024.09.01 ~ 2024.09.15',
    duration: '15일간',
    status: '종료됨',
    participants: 12,
    responses: 12,
    avgScore: 3.9,
    completedDate: '2024-09-15',
    sections: [
      {
        id: 1,
        title: '전문성 평가',
        description: '직무 관련 전문성과 기술 역량을 평가합니다',
        questions: [
          {
            id: 4,
            type: 'rating' as const,
            title: '전문성',
            description: '담당 분야의 전문 지식과 기술',
            avgScore: 4.0,
            options: ['매우 부족', '부족', '보통', '우수', '매우 우수']
          }
        ]
      },
      {
        id: 2,
        title: '창의성 및 혁신',
        description: '새로운 아이디어 제시와 문제 해결 능력을 평가합니다',
        questions: [
          {
            id: 5,
            type: 'rating' as const,
            title: '창의성',
            description: '새로운 아이디어 제시 및 문제 해결',
            avgScore: 3.8,
            options: ['매우 부족', '부족', '보통', '우수', '매우 우수']
          }
        ]
      }
    ],
    participants_data: []
  }
];

const ratingDistributionData = [
  { name: '매우 우수', value: 30, color: '#10B981' },
  { name: '우수', value: 45, color: '#3B82F6' },
  { name: '보통', value: 20, color: '#F59E0B' },
  { name: '부족', value: 4, color: '#EF4444' },
  { name: '매우 부족', value: 1, color: '#7C2D12' }
];

const questionResponseData = [
  { question: '업무 수행 능력', score: 4.3 },
  { question: '의사소통 능력', score: 4.1 },
  { question: '협업 능력', score: 4.4 },
  { question: '리더십', score: 3.9 },
  { question: '창의성', score: 3.8 }
];

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

// 등급 설정 타입
interface GradeRange {
  grade: string;
  minScore?: number;
  maxScore?: number;
  percentage?: number;
}

interface GradeSettings {
  type: 'absolute' | 'relative';
  ranges: GradeRange[];
}

// 등급 설정 모달 컴포넌트
function GradeSettingsModal({ 
  isOpen, 
  onClose, 
  gradeSettings,
  onSave 
}: { 
  isOpen: boolean;
  onClose: () => void;
  gradeSettings: GradeSettings;
  onSave: (settings: GradeSettings) => void;
}) {
  const [tempSettings, setTempSettings] = useState<GradeSettings>(gradeSettings);

  const addGradeRange = () => {
    const newRange: GradeRange = {
      grade: '',
      ...(tempSettings.type === 'absolute' 
        ? { minScore: 0, maxScore: 100 }
        : { percentage: 0 }
      )
    };
    setTempSettings({
      ...tempSettings,
      ranges: [...tempSettings.ranges, newRange]
    });
  };

  const removeGradeRange = (index: number) => {
    setTempSettings({
      ...tempSettings,
      ranges: tempSettings.ranges.filter((_, i) => i !== index)
    });
  };

  const updateGradeRange = (index: number, updates: Partial<GradeRange>) => {
    const newRanges = [...tempSettings.ranges];
    newRanges[index] = { ...newRanges[index], ...updates };
    setTempSettings({
      ...tempSettings,
      ranges: newRanges
    });
  };

  const handleTypeChange = (type: 'absolute' | 'relative') => {
    setTempSettings({
      type,
      ranges: type === 'absolute' 
        ? [
            { grade: 'S', minScore: 90, maxScore: 100 },
            { grade: 'A', minScore: 80, maxScore: 89 },
            { grade: 'B', minScore: 70, maxScore: 79 },
            { grade: 'C', minScore: 0, maxScore: 69 }
          ]
        : [
            { grade: 'S', percentage: 10 },
            { grade: 'A', percentage: 30 },
            { grade: 'B', percentage: 40 },
            { grade: 'C', percentage: 20 }
          ]
    });
  };

  const handleSave = () => {
    onSave(tempSettings);
    onClose();
  };

  const totalPercentage = tempSettings.type === 'relative'
    ? tempSettings.ranges.reduce((sum, range) => sum + (range.percentage || 0), 0)
    : 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-slate-200">
          <DialogTitle className="text-lg font-semibold text-slate-900">최종 등급 설정</DialogTitle>
          <DialogDescription className="text-sm text-slate-500 mt-1">
            피평가자의 최종 등급을 계산하는 방식을 설정합니다.
          </DialogDescription>
        </DialogHeader>

        <div className="px-6 py-5 space-y-6">
          {/* 평가 방식 선택 */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold text-slate-900">평가 방식</Label>
            <RadioGroup 
              value={tempSettings.type} 
              onValueChange={(value: string) => handleTypeChange(value as 'absolute' | 'relative')}
              className="grid grid-cols-2 gap-3"
            >
              <div className="relative">
                <RadioGroupItem 
                  value="absolute" 
                  id="absolute" 
                  className="peer sr-only" 
                />
                <Label 
                  htmlFor="absolute" 
                  className="flex flex-col p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-[#1e40af]/50 hover:bg-slate-50 transition-all peer-data-[state=checked]:border-[#1e40af] peer-data-[state=checked]:bg-blue-50/50"
                >
                  <span className="font-semibold text-slate-900 mb-1">절대평가</span>
                  <span className="text-xs text-slate-500 leading-relaxed">
                    점수 범위로 등급 부여<br />(예: 90-100점 → S등급)
                  </span>
                </Label>
              </div>
              <div className="relative">
                <RadioGroupItem 
                  value="relative" 
                  id="relative" 
                  className="peer sr-only" 
                />
                <Label 
                  htmlFor="relative" 
                  className="flex flex-col p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-[#1e40af]/50 hover:bg-slate-50 transition-all peer-data-[state=checked]:border-[#1e40af] peer-data-[state=checked]:bg-blue-50/50"
                >
                  <span className="font-semibold text-slate-900 mb-1">상대평가</span>
                  <span className="text-xs text-slate-500 leading-relaxed">
                    상위 비율로 등급 부여<br />(예: 상위 10% → S등급)
                  </span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* 구분선 */}
          <div className="border-t border-slate-200"></div>

          {/* 등급 설정 */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-semibold text-slate-900">
                {tempSettings.type === 'absolute' ? '등급별 점수 범위' : '등급별 분포 비율'}
              </Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addGradeRange}
                className="h-8 gap-1.5 text-xs"
              >
                <Plus className="h-3.5 w-3.5" />
                등급 추가
              </Button>
            </div>

            {tempSettings.type === 'relative' && totalPercentage !== 100 && (
              <div className="bg-amber-50 border border-amber-200 rounded-md p-3">
                <p className="text-xs text-amber-800 font-medium">
                  ⚠️ 전체 비율의 합이 100%가 되어야 합니다. (현재: {totalPercentage}%)
                </p>
              </div>
            )}

            <div className="max-h-80 overflow-y-auto pr-1 space-y-2">
              {tempSettings.ranges.map((range, index) => (
                <div key={index} className="flex items-center gap-2.5 p-3 border border-slate-200 rounded-md bg-white hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-2 flex-1">
                    <div className="w-16">
                      <Input
                        placeholder="등급"
                        value={range.grade}
                        onChange={(e) => updateGradeRange(index, { grade: e.target.value })}
                        className="h-8 text-center font-semibold text-sm"
                      />
                    </div>

                    {tempSettings.type === 'absolute' ? (
                      <div className="flex items-center gap-2 flex-1">
                        <Input
                          type="number"
                          placeholder="최소"
                          value={range.minScore ?? ''}
                          onChange={(e) => updateGradeRange(index, { minScore: parseFloat(e.target.value) || 0 })}
                          className="h-8 text-sm"
                        />
                        <span className="text-xs text-slate-400 px-0.5">~</span>
                        <Input
                          type="number"
                          placeholder="최대"
                          value={range.maxScore ?? ''}
                          onChange={(e) => updateGradeRange(index, { maxScore: parseFloat(e.target.value) || 0 })}
                          className="h-8 text-sm"
                        />
                        <span className="text-xs text-slate-500 font-medium whitespace-nowrap">점</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 flex-1">
                        <Input
                          type="number"
                          placeholder="비율"
                          value={range.percentage ?? ''}
                          onChange={(e) => updateGradeRange(index, { percentage: parseFloat(e.target.value) || 0 })}
                          className="h-8 text-sm"
                        />
                        <span className="text-xs text-slate-500 font-medium whitespace-nowrap">%</span>
                      </div>
                    )}
                  </div>

                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeGradeRange(index)}
                    disabled={tempSettings.ranges.length <= 1}
                    className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600 disabled:opacity-30"
                  >
                    <X className="h-3.5 w-3.5" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="px-6 py-4 border-t border-slate-200 bg-slate-50">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="border-slate-300 text-slate-700 hover:bg-white"
          >
            취소
          </Button>
          <Button 
            onClick={handleSave}
            disabled={tempSettings.type === 'relative' && totalPercentage !== 100}
            className="bg-[#1e40af] hover:bg-[#1e40af]/90"
          >
            저장
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// 개인별 결과 상세 페이지 - 실제 인사평가 시스템 스타일 (사용되지 않음 - 새 컴포넌트로 대체)
function IndividualResultViewOld({ survey, employee }: { survey: any, employee: Employee }) {
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
    const section = survey.sections.find((s: any) => s.id === sectionId);
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
  const ratingQuestionsCount = survey.sections.reduce((acc: number, s: any) => 
    acc + s.questions.filter((q: any) => q.type === 'rating').length, 0
  );

  return (
    <div className="space-y-5">
      {/* 개인 정보 카드 */}
      <div className="bg-white border border-slate-200 rounded-lg p-6">
        <div className="mb-5">
          <h4 className="text-sm font-semibold text-slate-900">피평가자 정보</h4>
          <p className="text-xs text-slate-500 mt-0.5">{survey.title}</p>
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

      {/* 섹션별 평가 결과 - 테이블 레이아웃 */}
      <div className="space-y-4">
        {survey.sections.map((section: any, sectionIndex: number) => {
          const sectionAvg = getSectionAverage(section.id);
          const ratingQuestions = section.questions.filter((q: any) => q.type === 'rating');
          const otherQuestions = section.questions.filter((q: any) => q.type !== 'rating');
          
          return (
            <div key={section.id} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              {/* 섹션 헤더 - 더 심플하게 */}
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

              {/* 등��형 문항 테이블 */}
              {ratingQuestions.length > 0 && (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50">
                        <th className="px-4 py-2.5 text-left text-xs font-medium text-slate-500 w-12">No</th>
                        <th className="px-4 py-2.5 text-left text-xs font-medium text-slate-500">문항</th>
                        <th className="px-4 py-2.5 text-center text-xs font-medium text-slate-500 w-28">평균 점수</th>
                        <th className="px-4 py-2.5 text-left text-xs font-medium text-slate-500 w-48">달성도</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {ratingQuestions.map((question: any, qIndex: number) => {
                        const avgScore = getAverageScore(question.id);
                        const scorePercentage = avgScore ? (parseFloat(avgScore) / 5) * 100 : 0;
                        
                        return (
                          <tr key={question.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-4 py-3 text-center">
                              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-xs font-medium text-slate-600">
                                {qIndex + 1}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex flex-col gap-0.5">
                                <p className="text-sm font-medium text-slate-900">{question.title}</p>
                                {question.description && (
                                  <p className="text-xs text-slate-500">{question.description}</p>
                                )}
                              </div>
                            </td>
                            <td className="px-4 py-3 text-center">
                              {avgScore !== null ? (
                                <div className="flex items-baseline justify-center gap-0.5">
                                  <span className="text-xl font-bold text-[#1e40af]">{avgScore}</span>
                                  <span className="text-xs text-slate-400">/ 5</span>
                                </div>
                              ) : (
                                <span className="text-sm text-slate-300">-</span>
                              )}
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-2.5">
                                <div className="flex-1 bg-slate-200 rounded-full h-1.5 overflow-hidden">
                                  <div 
                                    className={`h-1.5 rounded-full transition-all duration-500 ${
                                      scorePercentage >= 80 ? 'bg-emerald-500' :
                                      scorePercentage >= 60 ? 'bg-blue-500' :
                                      scorePercentage >= 40 ? 'bg-yellow-500' :
                                      'bg-orange-500'
                                    }`}
                                    style={{ width: `${scorePercentage}%` }}
                                  />
                                </div>
                                <span className="text-xs font-medium text-slate-500 min-w-[36px] text-right">
                                  {Math.round(scorePercentage)}%
                                </span>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}

              {/* 기타 문항 (객관식/주관식) - 테이블 형태로 */}
              {otherQuestions.length > 0 && (
                <div className="border-t border-slate-200">
                  <table className="w-full">
                    <tbody className="divide-y divide-slate-100">
                      {otherQuestions.map((question: any) => (
                        <tr key={question.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-4 py-3 w-24">
                            <Badge 
                              variant="secondary" 
                              className={`text-xs ${
                                question.type === 'multiple' 
                                  ? 'bg-blue-50 text-blue-700 border-blue-200' 
                                  : 'bg-green-50 text-green-700 border-green-200'
                              }`}
                            >
                              {question.type === 'multiple' ? '객관식' : '주관식'}
                            </Badge>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex flex-col gap-0.5">
                              <p className="text-sm font-medium text-slate-900">{question.title}</p>
                              {question.description && (
                                <p className="text-xs text-slate-500">{question.description}</p>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-right w-20">
                            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-600">
                              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 16 16">
                                <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              <span className="font-medium">완료</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function QuestionAnalysisView({ survey }: { survey: any }) {
  // 최종 등급 분포 계산 (mock 데이터)
  const gradeDistribution = [
    { name: 'S', value: 2, color: '#8B5CF6', label: 'S등급' },
    { name: 'A', value: 5, color: '#3B82F6', label: 'A등급' },
    { name: 'B', value: 6, color: '#10B981', label: 'B등급' },
    { name: 'C', value: 2, color: '#F59E0B', label: 'C등급' },
  ];

  // 전체 문항 수 계산
  const totalQuestions = survey.sections.reduce((acc: number, s: any) => acc + s.questions.length, 0);
  const ratingQuestionsCount = survey.sections.reduce((acc: number, s: any) => 
    acc + s.questions.filter((q: any) => q.type === 'rating').length, 0
  );

  // 문항별 응답 분포 계산 함수
  const getQuestionDistribution = (question: any) => {
    if (question.type === 'rating') {
      // 등급형 문항 - Mock 데이터
      return question.options.map((option: string, index: number) => ({
        name: option,
        value: Math.floor(Math.random() * 5) + 1,
        percentage: Math.floor(Math.random() * 30) + 10
      }));
    } else if (question.type === 'multiple') {
      // 객관식 문항 - Mock 데이터
      return question.options.map((option: string, index: number) => ({
        name: option,
        value: Math.floor(Math.random() * 5) + 1,
        percentage: Math.floor(Math.random() * 30) + 10
      }));
    }
    return [];
  };

  // 도넛 차트 색상 (5점 척도)
  const RATING_COLORS = ['#EF4444', '#F59E0B', '#EAB308', '#10B981', '#059669'];
  // 객관식 차트 색상
  const MULTIPLE_COLORS = ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B'];

  return (
    <div className="space-y-5">
      {/* 상단 요약 KPI */}
      <div className="grid grid-cols-5 gap-4">
        <div className="bg-white border border-slate-200 rounded-lg p-5 col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500 mb-1">전체 평균 점수</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-[#1e40af]">{survey.avgScore}</span>
                <span className="text-sm text-slate-400">/ 5.0</span>
              </div>
            </div>
            <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-[#1e40af]" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-5">
          <p className="text-xs text-slate-500 mb-1">전체 문항</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-slate-900">{totalQuestions}</span>
            <span className="text-xs text-slate-400">개</span>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-5">
          <p className="text-xs text-slate-500 mb-1">참여 인원</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-slate-900">{survey.participants}</span>
            <span className="text-xs text-slate-400">명</span>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-5">
          <p className="text-xs text-slate-500 mb-1">응답률</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-emerald-600">{Math.round((survey.responses / survey.participants) * 100)}</span>
            <span className="text-xs text-slate-400">%</span>
          </div>
        </div>
      </div>

      {/* 최종 등급 분포 현황 */}
      <div className="bg-white border border-slate-200 rounded-lg p-6">
        <div className="mb-5">
          <h4 className="text-sm font-semibold text-slate-900">최종 등급 분포 현황</h4>
          <p className="text-xs text-slate-500 mt-0.5">전체 {survey.participants}명의 등급 분포</p>
        </div>
        
        <div className="flex items-center gap-10">
          {/* 도넛 차트 */}
          <div className="w-52 h-52 relative flex-shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={gradeDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={90}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {gradeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </RechartsPieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <p className="text-xs text-slate-500 mb-0.5">총 인원</p>
              <p className="text-3xl font-bold text-slate-900">{survey.participants}</p>
              <p className="text-xs text-slate-500 mt-0.5">명</p>
            </div>
          </div>

          {/* 등급별 통계 그리드 */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {gradeDistribution.map((grade, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: grade.color }}></div>
                    <span className="text-sm font-semibold text-slate-900">{grade.label}</span>
                  </div>
                  <span className="text-xs font-medium text-slate-500">{Math.round((grade.value / survey.participants) * 100)}%</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-slate-900">{grade.value}</span>
                  <span className="text-sm text-slate-500">명</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 섹션별 상세 - 문항별 응답 현황 */}
      <div className="space-y-6">
        {survey.sections.map((section: any, sectionIndex: number) => {
          const allQuestions = section.questions;
          
          return (
            <div key={section.id} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              {/* 섹션 헤더 */}
              <div className="bg-slate-50 px-5 py-3.5 border-b border-slate-200">
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
              </div>

              {/* 문항별 응답 현황 */}
              <div className="p-6 space-y-8">
                {allQuestions.map((question: any, qIndex: number) => {
                  // 주관식 문항은 건너뛰기
                  if (question.type === 'text') {
                    return (
                      <div key={question.id} className="border border-slate-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 text-xs">
                            주관식
                          </Badge>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-900">{question.title}</p>
                            {question.description && (
                              <p className="text-xs text-slate-500 mt-1">{question.description}</p>
                            )}
                            <p className="text-xs text-slate-500 mt-2">응답 수: {survey.participants}개</p>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  const distribution = getQuestionDistribution(question);
                  const colors = question.type === 'rating' ? RATING_COLORS : MULTIPLE_COLORS;
                  const totalResponses = distribution.reduce((sum: number, item: any) => sum + item.value, 0);

                  return (
                    <div key={question.id} className="space-y-4">
                      {/* 문항 정보 */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-medium text-slate-500">Q{qIndex + 1}</span>
                            <Badge 
                              variant="secondary" 
                              className={`text-xs ${
                                question.type === 'rating'
                                  ? 'bg-purple-50 text-purple-700 border-purple-200'
                                  : 'bg-blue-50 text-blue-700 border-blue-200'
                              }`}
                            >
                              {question.type === 'rating' ? '등급형' : '객관식'}
                            </Badge>
                          </div>
                          <p className="text-sm font-medium text-slate-900">{question.title}</p>
                          {question.description && (
                            <p className="text-xs text-slate-500 mt-1">{question.description}</p>
                          )}
                        </div>
                        {question.type === 'rating' && (
                          <div className="text-right">
                            <p className="text-xs text-slate-500 mb-0.5">평균 점수</p>
                            <div className="flex items-baseline gap-0.5">
                              <span className="text-xl font-bold text-[#1e40af]">{question.avgScore}</span>
                              <span className="text-xs text-slate-400">/ 5</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* 도넛 차트 + 응답 분포 */}
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                        <div className="flex items-center gap-8">
                          {/* 도넛 차트 */}
                          <div className="w-44 h-44 relative flex-shrink-0">
                            <ResponsiveContainer width="100%" height="100%">
                              <RechartsPieChart>
                                <Pie
                                  data={distribution}
                                  cx="50%"
                                  cy="50%"
                                  innerRadius={55}
                                  outerRadius={75}
                                  paddingAngle={2}
                                  dataKey="value"
                                >
                                  {distribution.map((entry: any, index: number) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                  ))}
                                </Pie>
                              </RechartsPieChart>
                            </ResponsiveContainer>
                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                              <p className="text-xs text-slate-500 mb-0.5">총 응답</p>
                              <p className="text-2xl font-bold text-slate-900">{totalResponses}</p>
                              <p className="text-xs text-slate-500 mt-0.5">명</p>
                            </div>
                          </div>

                          {/* 응답 분포 바 차트 스타일 */}
                          <div className="flex-1 space-y-3">
                            {distribution.map((item: any, index: number) => {
                              const percentage = Math.round((item.value / totalResponses) * 100);
                              return (
                                <div key={index} className="space-y-1.5">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                      <div 
                                        className="w-3 h-3 rounded-sm flex-shrink-0" 
                                        style={{ backgroundColor: colors[index % colors.length] }}
                                      ></div>
                                      <span className="text-sm font-medium text-slate-900">{item.name}</span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                      <span className="text-sm font-bold text-slate-900">{item.value}명</span>
                                      <span className="text-xs text-slate-500">({percentage}%)</span>
                                    </div>
                                  </div>
                                  <div className="w-full bg-white rounded-full h-2 overflow-hidden">
                                    <div 
                                      className="h-2 rounded-full transition-all duration-500"
                                      style={{ 
                                        width: `${percentage}%`,
                                        backgroundColor: colors[index % colors.length]
                                      }}
                                    />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
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

export default function SurveyResultsPage() {
  const [selectedSurvey, setSelectedSurvey] = useState<any>(null);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [activeTab, setActiveTab] = useState<'individual' | 'question'>('individual');
  const [searchTerm, setSearchTerm] = useState('');
  const [isGradeSettingsOpen, setIsGradeSettingsOpen] = useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [isFinalizeDialogOpen, setIsFinalizeDialogOpen] = useState(false);
  const [isResultFinalized, setIsResultFinalized] = useState(false);
  const [selectedEmployeeIds, setSelectedEmployeeIds] = useState<number[]>([]);
  const [gradeSettings, setGradeSettings] = useState<GradeSettings>({
    type: 'absolute',
    ranges: [
      { grade: 'S', minScore: 90, maxScore: 100 },
      { grade: 'A', minScore: 80, maxScore: 89 },
      { grade: 'B', minScore: 70, maxScore: 79 },
      { grade: 'C', minScore: 0, maxScore: 69 }
    ]
  });

  const handleSurveySelect = (survey: any) => {
    setSelectedSurvey(survey);
    setSelectedEmployee(null);
  };

  const handleEmployeeSelect = (employee: Employee) => {
    setSelectedEmployee(employee);
    setActiveTab('individual');
  };

  const handleBackToList = () => {
    setSelectedSurvey(null);
    setSelectedEmployee(null);
  };

  // 체크박스 전체 선택/해제
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allIds = selectedSurvey.participants_data.map((emp: Employee) => emp.id);
      setSelectedEmployeeIds(allIds);
    } else {
      setSelectedEmployeeIds([]);
    }
  };

  // 개별 체크박스 선택/해제
  const handleSelectEmployee = (employeeId: number, checked: boolean) => {
    if (checked) {
      setSelectedEmployeeIds(prev => [...prev, employeeId]);
    } else {
      setSelectedEmployeeIds(prev => prev.filter(id => id !== employeeId));
    }
  };

  // 개인별 총점수 계산 함수
  const calculateEmployeeScore = (employee: Employee) => {
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

  // 등급 미리보기 계산 함수
  const calculateGradePreview = () => {
    if (!selectedSurvey || selectedEmployeeIds.length === 0) return [];

    const selectedEmployees = selectedSurvey.participants_data.filter((emp: Employee) => 
      selectedEmployeeIds.includes(emp.id)
    );

    const employeesWithScores = selectedEmployees.map((employee: Employee) => {
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

      const avgScore = totalQuestions > 0 ? totalScore / totalQuestions : 0;
      const normalizedScore = (avgScore / 5) * 100;

      return {
        ...employee,
        avgScore,
        normalizedScore
      };
    });

    if (gradeSettings.type === 'absolute') {
      employeesWithScores.forEach((employee: any) => {
        let assignedGrade = gradeSettings.ranges[gradeSettings.ranges.length - 1].grade;

        for (const range of gradeSettings.ranges) {
          if (employee.normalizedScore >= (range.minScore || 0) && employee.normalizedScore <= (range.maxScore || 100)) {
            assignedGrade = range.grade;
            break;
          }
        }

        employee.newGrade = assignedGrade;
      });
    } else {
      const sortedEmployees = [...employeesWithScores].sort((a, b) => b.normalizedScore - a.normalizedScore);
      const totalCount = sortedEmployees.length;
      const sortedRanges = [...gradeSettings.ranges].sort((a, b) => (b.percentage || 0) - (a.percentage || 0));

      let currentIndex = 0;
      sortedRanges.forEach(range => {
        const count = Math.round((totalCount * (range.percentage || 0)) / 100);
        for (let i = 0; i < count && currentIndex < totalCount; i++) {
          sortedEmployees[currentIndex].newGrade = range.grade;
          currentIndex++;
        }
      });

      while (currentIndex < totalCount) {
        sortedEmployees[currentIndex].newGrade = sortedRanges[sortedRanges.length - 1].grade;
        currentIndex++;
      }
    }

    return employeesWithScores;
  };

  // 등급 적용 함수 - 선택된 직원들에게만 적용
  const applyGrades = () => {
    if (!selectedSurvey || selectedEmployeeIds.length === 0) return;

    // 선택된 피평가자들만 필터링
    const selectedEmployees = selectedSurvey.participants_data.filter((emp: Employee) => 
      selectedEmployeeIds.includes(emp.id)
    );

    // 각 피평가자의 평균 점수 계산
    const employeesWithScores = selectedEmployees.map((employee: Employee) => {
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

      const avgScore = totalQuestions > 0 ? totalScore / totalQuestions : 0;
      // 100점 만점으로 환산 (5점 만점 기준)
      const normalizedScore = (avgScore / 5) * 100;

      return {
        ...employee,
        avgScore,
        normalizedScore
      };
    });

    if (gradeSettings.type === 'absolute') {
      // 절대평가: 점수 범위에 따라 등급 부여
      employeesWithScores.forEach((employee: any) => {
        let assignedGrade = gradeSettings.ranges[gradeSettings.ranges.length - 1].grade; // 기본값: 가장 낮은 등급

        for (const range of gradeSettings.ranges) {
          if (employee.normalizedScore >= (range.minScore || 0) && employee.normalizedScore <= (range.maxScore || 100)) {
            assignedGrade = range.grade;
            break;
          }
        }

        employee.finalGrade = assignedGrade;
      });
    } else {
      // 상대평가: 선택된 직원들 중에서 상위 비율에 따라 등급 부여
      // 점수 기준 내림차순 정렬
      const sortedEmployees = [...employeesWithScores].sort((a, b) => b.normalizedScore - a.normalizedScore);
      const totalCount = sortedEmployees.length;

      // 등급 범위를 점수 기준으로 정렬
      const sortedRanges = [...gradeSettings.ranges].sort((a, b) => (b.percentage || 0) - (a.percentage || 0));

      let currentIndex = 0;
      sortedRanges.forEach(range => {
        const count = Math.round((totalCount * (range.percentage || 0)) / 100);
        for (let i = 0; i < count && currentIndex < totalCount; i++) {
          sortedEmployees[currentIndex].finalGrade = range.grade;
          currentIndex++;
        }
      });

      // 남은 인원이 있으면 마지막 등급 부여
      while (currentIndex < totalCount) {
        sortedEmployees[currentIndex].finalGrade = sortedRanges[sortedRanges.length - 1].grade;
        currentIndex++;
      }
    }

    // selectedSurvey 업데이트 - 선택된 직원들만 업데이트
    const updatedParticipants = selectedSurvey.participants_data.map((emp: Employee) => {
      const updatedEmp = employeesWithScores.find((e: any) => e.id === emp.id);
      return updatedEmp || emp;
    });

    setSelectedSurvey({
      ...selectedSurvey,
      participants_data: updatedParticipants
    });
  };

  const handleBackToSurvey = () => {
    setSelectedEmployee(null);
  };

  const filteredSurveys = mockCompletedSurveys.filter(survey =>
    survey.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 리뷰 목록 화면 (테이블 구조)
  if (!selectedSurvey) {
    return (
      <div className="bg-white h-full overflow-auto">
        <div className="w-full max-w-[1280px] mx-auto px-16 py-16">
          {/* 헤더 */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1">
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold text-[#101828] leading-8">리뷰 결과</h1>
                <p className="text-sm text-[#6a7282] leading-5">완료된 리뷰의 결과를 확인하고 분석하세요</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              종료된 리뷰만 표시
            </Badge>
          </div>

          {/* 검색 */}
          <div className="flex items-center gap-2 pb-4 border-b border-gray-200 mb-8">
            <div className="relative max-w-[448px] w-[260px]">
              <Input
                placeholder="리뷰명으로 검색"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-50 border-gray-200 h-9 rounded-[4px] pl-[41px] text-sm placeholder:text-slate-500"
              />
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#99A1AF]" />
            </div>
          </div>

          {/* 리뷰 목록 테이블 */}
          {filteredSurveys.length === 0 ? (
            <div className="text-center py-24">
              <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg text-gray-900 mb-2">완료된 리뷰가 없습니다</h3>
              <p className="text-gray-500 mb-6">
                {searchTerm 
                  ? '검색 조건에 맞는 리뷰를 찾을 수 없습니다.' 
                  : '아직 완료된 리뷰가 없습니다.'}
              </p>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-[6px] overflow-auto">
              {/* 테이블 헤더 */}
              <div className="bg-gray-50 border-b border-gray-200">
                <div className="flex">
                  <div className="w-[300px] px-2 py-[10.25px]">
                    <span className="text-sm font-medium text-[#101828] leading-5">리뷰명</span>
                  </div>
                  <div className="w-[101.59px] px-2 py-[10.25px]">
                    <span className="text-sm font-medium text-[#101828] leading-5">상태</span>
                  </div>
                  <div className="w-[200px] px-2 py-[10.25px]">
                    <span className="text-sm font-medium text-[#101828] leading-5">리뷰 기간</span>
                  </div>
                  <div className="w-[100px] px-2 py-[10.25px]">
                    <span className="text-sm font-medium text-[#101828] leading-5">참여자</span>
                  </div>
                  <div className="w-[100px] px-2 py-[10.25px]">
                    <span className="text-sm font-medium text-[#101828] leading-5">평균점수</span>
                  </div>
                  <div className="w-[120px] px-2 py-[10.25px]">
                    <span className="text-sm font-medium text-[#101828] leading-5">완료일</span>
                  </div>
                  <div className="w-20 px-2 py-[10.25px]"></div>
                </div>
              </div>
              
              {/* 테이블 바디 */}
              <div className="divide-y divide-gray-200">
                {filteredSurveys.map((survey) => (
                  <div key={survey.id} className="flex items-center hover:bg-gray-50 border-b border-gray-200">
                    {/* 리뷰명 */}
                    <div className="w-[300px] px-2 py-[20.5px]">
                      <button
                        onClick={() => handleSurveySelect(survey)}
                        className="text-left hover:text-blue-700 transition-colors text-[#101828] text-sm leading-5 truncate max-w-[280px] block"
                      >
                        {survey.title}
                      </button>
                    </div>
                    
                    {/* 상태 */}
                    <div className="w-[101.59px] px-2 py-[17.5px]">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border bg-green-50 text-green-600 border-green-500">
                        {survey.status}
                      </span>
                    </div>
                    
                    {/* 리뷰 기간 */}
                    <div className="w-[200px] px-2 py-0">
                      <div className="flex flex-col gap-1">
                        <div className="text-sm text-[#101828] leading-5">{survey.period}</div>
                        <div className="text-sm text-[#6a7282] leading-5">{survey.duration}</div>
                      </div>
                    </div>
                    
                    {/* 참여자 */}
                    <div className="w-[100px] px-2 py-[20.5px]">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-[#4A5565]" />
                        <span className="text-sm font-medium text-[#4a5565] leading-5">{survey.participants}명</span>
                      </div>
                    </div>
                    
                    {/* 평균점수 */}
                    <div className="w-[100px] px-2 py-[20.5px]">
                      <span className="text-sm font-medium text-[#1e40af] leading-5">{survey.avgScore}</span>
                    </div>
                    
                    {/* 완료일 */}
                    <div className="w-[120px] px-2 py-[20.5px]">
                      <span className="text-sm text-[#6a7282] leading-5">{survey.completedDate}</span>
                    </div>
                    
                    {/* 액션 */}
                    <div className="w-20 px-2 py-[14.5px]">
                      <button 
                        onClick={() => handleSurveySelect(survey)}
                        className="flex items-center justify-center w-8 h-8 rounded-[4px] hover:bg-gray-100 transition-colors"
                      >
                        <ChevronRight className="h-4 w-4 text-[#99A1AF]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 개인별 결과 상세 화면
  if (selectedEmployee) {
    return (
      <div className="bg-white h-full overflow-auto">
        <div className="w-full max-w-[1280px] mx-auto px-16 py-16">
          {/* 헤더 */}
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-200">
            <Button
              variant="ghost"
              onClick={handleBackToSurvey}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900"
            >
              <ArrowLeft className="h-4 w-4" />
              결과 분석으로 돌아가기
            </Button>
            <div className="h-6 border-l border-slate-300" />
            <div>
              <h1 className="text-xl font-bold text-slate-900">{selectedEmployee.name} 평가 결과</h1>
              <p className="text-sm text-slate-500">{selectedSurvey.title}</p>
            </div>
          </div>

          {/* 개인 결과 내용 */}
          <IndividualResultView survey={selectedSurvey} employee={selectedEmployee} />
        </div>
      </div>
    );
  }

  // 리뷰 결과 분석 화면 (개인별/문항별 탭)
  return (
    <div className="bg-white h-full overflow-auto">
      <div className="w-full max-w-[1280px] mx-auto px-16 py-16">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={handleBackToList}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900"
            >
              <ArrowLeft className="h-4 w-4" />
              리뷰 목록으로
            </Button>
            <div className="h-6 border-l border-slate-300" />
            <div>
              <h1 className="text-xl font-bold text-slate-900">{selectedSurvey.title}</h1>
              <p className="text-sm text-slate-500">{selectedSurvey.description}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              {selectedSurvey.status}
            </Badge>
            <span className="text-sm text-slate-500">{selectedSurvey.period}</span>
          </div>
        </div>

        {/* 탭 네비게이션 */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Tabs value={activeTab} onValueChange={(value: string) => setActiveTab(value as 'individual' | 'question')} className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="individual" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  개인별 결과
                </TabsTrigger>
                <TabsTrigger value="question" className="flex items-center gap-2">
                  <PieChart className="h-4 w-4" />
                  문항별 분석
                </TabsTrigger>
              </TabsList>
            </Tabs>
            
            {/* 마감 상태 표시 - 개인별 결과 탭에서만 */}
            {activeTab === 'individual' && isResultFinalized && (
              <Badge className="bg-slate-100 text-slate-700 border-slate-300">
                <svg className="h-3.5 w-3.5 mr-1.5" fill="none" viewBox="0 0 14 14">
                  <path d="M11.6666 3.5L5.25 9.91664L2.33334 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                결과 마감됨
              </Badge>
            )}
          </div>

          {/* 등급 설정 및 마감 버튼 - 개인별 결과 탭에서만 표시 */}
          {activeTab === 'individual' && (
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => setIsGradeSettingsOpen(true)}
                disabled={isResultFinalized}
                className="flex items-center gap-2 border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Settings className="h-4 w-4" />
                <span className="text-sm font-medium">등급 설정</span>
              </Button>
              <Button
                onClick={() => setIsConfirmDialogOpen(true)}
                disabled={selectedEmployeeIds.length === 0 || isResultFinalized}
                className="flex items-center gap-2 bg-[#1e40af] hover:bg-[#1e40af]/90 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <UserCheck className="h-4 w-4" />
                <span className="text-sm font-medium">
                  등급 적용{selectedEmployeeIds.length > 0 && ` (${selectedEmployeeIds.length}명)`}
                </span>
              </Button>
              {!isResultFinalized && (
                <Button
                  variant="outline"
                  onClick={() => setIsFinalizeDialogOpen(true)}
                  className="flex items-center gap-2 border-red-200 text-red-600 hover:bg-red-50"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 16 16">
                    <path d="M8 1.33334V14.6667M8 14.6667L14 8.66668M8 14.6667L2 8.66668" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm font-medium">리뷰 마감</span>
                </Button>
              )}
            </div>
          )}
        </div>

        {/* 탭 콘텐츠 */}
        {activeTab === 'individual' && (
          <div className="space-y-6">
            {/* 개인별 결과 테이블 */}
            <div className="bg-white border border-gray-200 rounded-[6px] overflow-auto">
              {/* 테이블 헤더 */}
              <div className="bg-gray-50 border-b border-gray-200">
                <div className="flex">
                  <div className="w-[48px] px-2 py-[10.25px] flex items-center justify-center">
                    <Checkbox
                      checked={selectedEmployeeIds.length === selectedSurvey.participants_data.length && selectedSurvey.participants_data.length > 0}
                      onCheckedChange={handleSelectAll}
                    />
                  </div>
                  <div className="w-[160px] px-2 py-[10.25px]">
                    <span className="text-sm font-medium text-[#101828] leading-5">이름</span>
                  </div>
                  <div className="w-[120px] px-2 py-[10.25px]">
                    <span className="text-sm font-medium text-[#101828] leading-5">소속팀</span>
                  </div>
                  <div className="w-[100px] px-2 py-[10.25px]">
                    <span className="text-sm font-medium text-[#101828] leading-5">직위</span>
                  </div>
                  <div className="w-[220px] px-2 py-[10.25px]">
                    <span className="text-sm font-medium text-[#101828] leading-5">이메일</span>
                  </div>
                  <div className="w-[100px] px-2 py-[10.25px] text-center">
                    <span className="text-sm font-medium text-[#101828] leading-5">총점수</span>
                  </div>
                  <div className="w-[100px] px-2 py-[10.25px]">
                    <span className="text-sm font-medium text-[#101828] leading-5">최종 등급</span>
                  </div>
                  <div className="w-[100px] px-2 py-[10.25px]">
                    <span className="text-sm font-medium text-[#101828] leading-5">진행률</span>
                  </div>
                </div>
              </div>
              
              {/* 테이블 바디 */}
              <div className="divide-y divide-gray-200">
                {selectedSurvey.participants_data.map((employee: Employee) => (
                  <div key={employee.id} className="flex items-center border-b border-gray-200 group hover:bg-gray-50 transition-colors">
                    {/* 체크박스 */}
                    <div className="w-[48px] px-2 py-[20.5px] flex items-center justify-center">
                      <Checkbox
                        checked={selectedEmployeeIds.includes(employee.id)}
                        onCheckedChange={(checked: boolean) => handleSelectEmployee(employee.id, checked)}
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                      />
                    </div>
                    
                    {/* 이름 */}
                    <div className="w-[160px] px-2 py-[20.5px] cursor-pointer" onClick={() => handleEmployeeSelect(employee)}>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#1e40af] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                          {employee.name.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-slate-900 group-hover:text-[#1e40af] transition-colors truncate">{employee.name}</span>
                      </div>
                    </div>
                    
                    {/* 소속팀 */}
                    <div className="w-[120px] px-2 py-[20.5px] cursor-pointer" onClick={() => handleEmployeeSelect(employee)}>
                      <span className="text-sm text-slate-600 truncate block">{employee.department}</span>
                    </div>
                    
                    {/* 직위 */}
                    <div className="w-[100px] px-2 py-[20.5px] cursor-pointer" onClick={() => handleEmployeeSelect(employee)}>
                      <span className="text-sm text-slate-600 truncate block">{employee.position}</span>
                    </div>
                    
                    {/* 이메일 */}
                    <div className="w-[220px] px-2 py-[20.5px] cursor-pointer" onClick={() => handleEmployeeSelect(employee)}>
                      <span className="text-sm text-slate-600 truncate block">{employee.email}</span>
                    </div>
                    
                    {/* 총점수 */}
                    <div className="w-[100px] px-2 py-[20.5px] cursor-pointer" onClick={() => handleEmployeeSelect(employee)}>
                      <div className="flex items-baseline justify-center gap-0.5">
                        <span className="text-base font-bold text-slate-900">{calculateEmployeeScore(employee).toFixed(1)}</span>
                        <span className="text-xs text-slate-400">/ 5</span>
                      </div>
                    </div>
                    
                    {/* 최종 등급 */}
                    <div className="w-[100px] px-2 py-[20.5px] cursor-pointer" onClick={() => handleEmployeeSelect(employee)}>
                      {employee.finalGrade ? (
                        <span className="text-sm font-semibold text-[#1e40af]">{employee.finalGrade}</span>
                      ) : (
                        <span className="text-sm text-slate-400">미적용</span>
                      )}
                    </div>
                    
                    {/* 평가 진행률 */}
                    <div className="w-[100px] px-2 py-[20.5px] cursor-pointer" onClick={() => handleEmployeeSelect(employee)}>
                      <span className="text-sm text-slate-600">{employee.evaluatedCount}/{employee.totalEvaluators}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'question' && (
          <div>
            <QuestionAnalysisView survey={selectedSurvey} />
          </div>
        )}
      </div>

      {/* 등급 설정 모달 */}
      <GradeSettingsModal
        isOpen={isGradeSettingsOpen}
        onClose={() => setIsGradeSettingsOpen(false)}
        gradeSettings={gradeSettings}
        onSave={(settings) => {
          setGradeSettings(settings);
          console.log('등급 설정 저장:', settings);
          // 실제 구현에서는 여기서 API 호출하여 서버에 저장
        }}
      />

      {/* 등급 적용 확인 다이얼로그 */}
      <Dialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden p-0">
          <DialogHeader className="px-6 pt-6 pb-4 border-b border-slate-200">
            <DialogTitle className="text-lg font-semibold text-slate-900">등급 적용 확인</DialogTitle>
            <DialogDescription className="text-sm text-slate-600 mt-2">
              선택한 <span className="font-semibold text-slate-900">{selectedEmployeeIds.length}명</span>에게 
              <span className="font-semibold text-slate-900"> {gradeSettings.type === 'absolute' ? '절대평가' : '상대평가'}</span> 방식으로 등급을 적용합니다.
            </DialogDescription>
          </DialogHeader>

          <div className="px-6 py-4 overflow-y-auto max-h-[60vh]">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-medium text-slate-500 px-3 py-2 bg-slate-50 rounded-md">
                <span className="w-[200px]">이름</span>
                <span className="w-[100px] text-center">총점수</span>
                <span className="w-[110px] text-center">기존 등급</span>
                <span className="w-[110px] text-center">변경 등급</span>
              </div>
              
              {calculateGradePreview().map((employee: any) => (
                <div key={employee.id} className="flex items-center justify-between px-3 py-3 border border-slate-200 rounded-md hover:bg-slate-50 transition-colors">
                  <div className="w-[200px] flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#1e40af] text-white rounded-full flex items-center justify-center text-xs font-semibold">
                      {employee.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-900">{employee.name}</span>
                      <span className="text-xs text-slate-500">{employee.department}</span>
                    </div>
                  </div>
                  
                  <div className="w-[100px] text-center">
                    <div className="flex items-baseline justify-center gap-0.5">
                      <span className="text-lg font-bold text-slate-900">{employee.avgScore.toFixed(1)}</span>
                      <span className="text-xs text-slate-400">/ 5</span>
                    </div>
                  </div>
                  
                  <div className="w-[110px] text-center">
                    {employee.finalGrade ? (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-sm font-medium text-slate-700">
                        {employee.finalGrade}
                      </span>
                    ) : (
                      <span className="text-sm text-slate-400">미적용</span>
                    )}
                  </div>
                  
                  <div className="w-[110px] text-center">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-50 text-sm font-semibold text-[#1e40af]">
                      {employee.newGrade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <DialogFooter className="px-6 py-4 border-t border-slate-200 bg-slate-50">
            <Button 
              variant="outline" 
              onClick={() => setIsConfirmDialogOpen(false)}
              className="border-slate-300 text-slate-700 hover:bg-white"
            >
              취소
            </Button>
            <Button
              onClick={() => {
                applyGrades();
                setIsConfirmDialogOpen(false);
                setSelectedEmployeeIds([]);
              }}
              className="bg-[#1e40af] hover:bg-[#1e40af]/90 text-white"
            >
              등급 적용
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 리뷰 마감 확인 다이얼로그 */}
      <AlertDialog open={isFinalizeDialogOpen} onOpenChange={setIsFinalizeDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-lg font-semibold text-slate-900">리뷰 결과 마감</AlertDialogTitle>
            <AlertDialogDescription className="text-sm text-slate-600 mt-2">
              리뷰 결과를 마감하시겠습니까?
            </AlertDialogDescription>
            <div className="space-y-3 mt-3">
              <div className="bg-amber-50 border border-amber-200 rounded-md p-3">
                <p className="text-xs text-amber-800 font-medium">
                  ⚠️ 마감 후에는 등급을 수정할 수 없습니다.
                </p>
              </div>
              <div className="text-xs text-slate-500 space-y-1">
                <p>• 현재 적용된 등급이 최종 확정됩니다</p>
                <p>• 마감 후에는 등급 설정 및 적용이 불가능합니다</p>
                <p>• 피평가자에게 최종 결과가 공개됩니다</p>
              </div>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-slate-300 text-slate-700 hover:bg-slate-50">
              취소
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                setIsResultFinalized(true);
                setIsFinalizeDialogOpen(false);
                setSelectedEmployeeIds([]);
              }}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              마감하기
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}