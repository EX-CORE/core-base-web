import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Checkbox } from './ui/checkbox';
import { X, Search } from 'lucide-react';
import svgPaths from '../imports/svg-skuy1a01o5';

interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
  email: string;
}

interface EvaluatorMappingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (mappingConfig: MappingConfig) => void;
  evaluators: Employee[];
  targets: Employee[];
}

interface MappingConfig {
  mappingMethod: 'admin' | 'self';
  assignmentMethod: 'manual' | 'random';
  minEvaluators: number;
  maxEvaluators: number;
  manualAssignments?: { [targetId: number]: number[] };
}

export default function EvaluatorMappingModal({
  isOpen,
  onClose,
  onConfirm,
  evaluators,
  targets
}: EvaluatorMappingModalProps) {
  const [currentStep, setCurrentStep] = useState<'config' | 'manual-assignment'>('config');
  const [mappingMethod, setMappingMethod] = useState<'admin' | 'self'>('admin');
  const [assignmentMethod, setAssignmentMethod] = useState<'manual' | 'random'>('manual');
  const [minEvaluators, setMinEvaluators] = useState(1);
  const [maxEvaluators, setMaxEvaluators] = useState(3);
  const [assignments, setAssignments] = useState<{ [targetId: number]: number[] }>({});
  const [selectedTargetId, setSelectedTargetId] = useState<number | null>(null);
  const [targetSearchTerm, setTargetSearchTerm] = useState('');
  const [evaluatorSearchTerm, setEvaluatorSearchTerm] = useState('');

  const handleNext = () => {
    if (assignmentMethod === 'manual') {
      setCurrentStep('manual-assignment');
      const initialAssignments: { [targetId: number]: number[] } = {};
      targets.forEach(target => {
        initialAssignments[target.id] = [];
      });
      setAssignments(initialAssignments);
      if (targets.length > 0) {
        setSelectedTargetId(targets[0].id);
      }
    } else {
      handleConfirm();
    }
  };

  const handleConfirm = () => {
    const config: MappingConfig = {
      mappingMethod,
      assignmentMethod,
      minEvaluators,
      maxEvaluators,
      ...(assignmentMethod === 'manual' && { manualAssignments: assignments })
    };
    onConfirm(config);
    onClose();
  };

  const handleBack = () => {
    setCurrentStep('config');
    setSelectedTargetId(null);
  };

  const handleClose = () => {
    setCurrentStep('config');
    setAssignments({});
    setSelectedTargetId(null);
    onClose();
  };

  const handleMaxEvaluatorsChange = (value: number) => {
    const maxPossible = evaluators.length;
    const adjustedValue = Math.min(value, maxPossible);
    setMaxEvaluators(adjustedValue);
    
    if (minEvaluators > adjustedValue) {
      setMinEvaluators(adjustedValue);
    }
  };

  const handleMinEvaluatorsChange = (value: number) => {
    const adjustedValue = Math.max(1, Math.min(value, maxEvaluators));
    setMinEvaluators(adjustedValue);
  };

  const toggleEvaluatorForTarget = (targetId: number, evaluatorId: number) => {
    setAssignments(prev => {
      const currentAssignments = prev[targetId] || [];
      const isSelected = currentAssignments.includes(evaluatorId);
      
      if (isSelected) {
        return {
          ...prev,
          [targetId]: currentAssignments.filter(id => id !== evaluatorId)
        };
      } else {
        if (currentAssignments.length < maxEvaluators) {
          return {
            ...prev,
            [targetId]: [...currentAssignments, evaluatorId]
          };
        }
        return prev;
      }
    });
  };

  const getAssignmentValidation = () => {
    let validCount = 0;
    let invalidTargets: string[] = [];
    
    targets.forEach(target => {
      const assignedCount = assignments[target.id]?.length || 0;
      if (assignedCount >= minEvaluators && assignedCount <= maxEvaluators) {
        validCount++;
      } else {
        invalidTargets.push(target.name);
      }
    });
    
    return {
      isValid: validCount === targets.length,
      validCount,
      totalCount: targets.length,
      invalidTargets
    };
  };

  const validation = currentStep === 'manual-assignment' ? getAssignmentValidation() : null;

  // 설정 페이지
  if (currentStep === 'config') {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-[1200px] max-h-[90vh] p-0 gap-0 overflow-hidden">
          <DialogTitle className="sr-only">평가자 매핑 설정</DialogTitle>
          <DialogDescription className="sr-only">평가자와 피평가자 간의 매핑 방식을 설정하세요</DialogDescription>
          
          {/* 기존 config 화면 유지 */}
          <div className="flex flex-col h-full">
            {/* 헤더 */}
            <div className="px-6 py-4 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-semibold text-[#0f172b]">평가자 매핑 설정</h2>
                  <p className="text-sm text-[#62748e]">평가��와 피평가자 간의 매핑 방식을 설정하세요</p>
                </div>
                <button
                  onClick={handleClose}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <X className="h-4 w-4 text-[#1E293B]" />
                </button>
              </div>
            </div>

            {/* 본문 */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                {/* 인원 정보 카드 */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-slate-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 20 20">
                          <path d="M10 10C11.3807 10 12.5 8.88071 12.5 7.5C12.5 6.11929 11.3807 5 10 5C8.61929 5 7.5 6.11929 7.5 7.5C7.5 8.88071 8.61929 10 10 10Z" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M15 15C15 13.3431 12.7614 12 10 12C7.23858 12 5 13.3431 5 15" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">평가자</p>
                        <p className="text-2xl font-bold text-blue-600">{evaluators.length}명</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-slate-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 20 20">
                          <path d="M10 10C11.3807 10 12.5 8.88071 12.5 7.5C12.5 6.11929 11.3807 5 10 5C8.61929 5 7.5 6.11929 7.5 7.5C7.5 8.88071 8.61929 10 10 10Z" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M15 15C15 13.3431 12.7614 12 10 12C7.23858 12 5 13.3431 5 15" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">피평가자</p>
                        <p className="text-2xl font-bold text-green-600">{targets.length}명</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* 피평가자별 평가자 인원 설정 */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">
                      피평가자별 평가자 인원 설정
                    </h3>
                    <p className="text-sm text-slate-500 mb-4">
                      각 피평가자를 평가할 최소/최대 평가자 수를 설정하세요
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="minEvaluators" className="text-sm font-medium text-slate-700">
                        최소 평가자 수
                      </Label>
                      <Input
                        id="minEvaluators"
                        type="number"
                        min={1}
                        max={maxEvaluators}
                        value={minEvaluators}
                        onChange={(e) => handleMinEvaluatorsChange(parseInt(e.target.value) || 1)}
                        className="w-full"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="maxEvaluators" className="text-sm font-medium text-slate-700">
                        최대 평가자 수
                      </Label>
                      <Input
                        id="maxEvaluators"
                        type="number"
                        min={minEvaluators}
                        max={evaluators.length}
                        value={maxEvaluators}
                        onChange={(e) => handleMaxEvaluatorsChange(parseInt(e.target.value) || 1)}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* 매핑 방식 */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">
                      매핑 방식
                    </h3>
                    <p className="text-sm text-slate-500 mb-4">
                      평가자와 피평가자를 어떻게 매핑할지 선택하세요
                    </p>
                  </div>
                  
                  <RadioGroup 
                    value={assignmentMethod} 
                    onValueChange={(value: 'manual' | 'random') => setAssignmentMethod(value)}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                      <RadioGroupItem value="manual" id="manual" />
                      <Label htmlFor="manual" className="flex-1 cursor-pointer">
                        <div>
                          <span className="font-medium text-slate-900">어드민에서 직접 선택</span>
                          <p className="text-sm text-slate-500">관리자가 수동으로 각 매핑을 설정합니다</p>
                        </div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg opacity-50 cursor-not-allowed">
                      <RadioGroupItem value="random" id="random" disabled />
                      <Label htmlFor="random" className="flex-1 cursor-not-allowed">
                        <div>
                          <span className="font-medium text-slate-400">랜덤 배정</span>
                          <p className="text-sm text-slate-400">설정된 인원 수에 맞춰 자동으로 랜덤 배정합니다</p>
                          <Badge variant="secondary" className="mt-1 text-xs bg-slate-100 text-slate-500">
                            개발 예정
                          </Badge>
                        </div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg opacity-50 cursor-not-allowed">
                      <RadioGroupItem value="self" id="evaluator-select" disabled />
                      <Label htmlFor="evaluator-select" className="flex-1 cursor-not-allowed">
                        <div>
                          <span className="font-medium text-slate-400">평가자가 직접 선택</span>
                          <p className="text-sm text-slate-400">평가자가 직접 피평가자를 선택합니다</p>
                          <Badge variant="secondary" className="mt-1 text-xs bg-slate-100 text-slate-500">
                            개발 예정
                          </Badge>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            {/* 액션 버튼 */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-200">
              <Button 
                variant="outline" 
                onClick={handleClose}
                className="px-4 py-2"
              >
                취소
              </Button>
              <Button 
                onClick={handleNext}
                className="bg-[#1e40af] hover:bg-[#1e40af]/90 text-white px-6 py-2"
              >
                다음
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // 수동 배정 페이지 - Figma 디자인 적용
  const filteredTargets = targets.filter(target =>
    target.name.toLowerCase().includes(targetSearchTerm.toLowerCase()) ||
    target.department.toLowerCase().includes(targetSearchTerm.toLowerCase()) ||
    target.position.toLowerCase().includes(targetSearchTerm.toLowerCase())
  );

  const filteredEvaluators = evaluators.filter(evaluator =>
    evaluator.name.toLowerCase().includes(evaluatorSearchTerm.toLowerCase()) ||
    evaluator.department.toLowerCase().includes(evaluatorSearchTerm.toLowerCase()) ||
    evaluator.position.toLowerCase().includes(evaluatorSearchTerm.toLowerCase())
  );

  const targetDepartments = [...new Set(filteredTargets.map(t => t.department))].sort();
  const evaluatorDepartments = [...new Set(filteredEvaluators.map(e => e.department))].sort();

  const selectedTarget = targets.find(t => t.id === selectedTargetId);
  const assignedEvaluators = selectedTargetId ? (assignments[selectedTargetId] || []) : [];

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="!max-w-[1200px] sm:!max-w-[1200px] w-[1200px] max-h-[90vh] p-0 gap-0 overflow-hidden bg-white rounded-[6px]">
        <DialogTitle className="sr-only">평가자 직접 선택</DialogTitle>
        <DialogDescription className="sr-only">평가자와 피평가자를 각각 선택해 주세요.</DialogDescription>
        
        <div className="box-border content-stretch flex flex-col h-[69px] items-start pb-px pt-0 px-0 relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
          <div className="h-[52px] relative shrink-0 w-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[52px] items-start px-6 py-[17px] relative w-full">
              <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-full">
                  <div className="absolute font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold leading-[0] left-0 text-[#0f172b] text-[20px] text-nowrap top-0">
                    <p className="leading-[28px] whitespace-pre">평가자 직접 선택</p>
                  </div>
                </div>
              </div>
              <div className="h-[20px] relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
                  <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#62748e] text-[14px] text-nowrap top-0">
                    <p className="leading-[20px] whitespace-pre">평가자와 피평가자를 각각 선택해 주세요.</p>
                  </div>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="absolute opacity-70 hover:opacity-100 transition-opacity right-6 rounded-[2px] size-[16px] top-[17px]"
              >
                <X className="h-4 w-4 text-[#1E293B]" />
              </button>
            </div>
          </div>
        </div>

        {/* 진행률 */}
        {validation && (
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="text-sm text-[#45556c]">
                진행률: <span className="font-medium text-[#0f172b]">{validation.validCount}</span> / {validation.totalCount} 완료
              </div>
              <div className="w-32 bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-blue-800 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(validation.validCount / validation.totalCount) * 100}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* 메인 컨텐츠 */}
        <div className="flex-1 overflow-hidden px-6 py-6">
          <div className="flex gap-6 h-full">
              {/* 왼쪽: 피평가자 목록 */}
              <div className="flex-1 flex flex-col">
                {/* 헤더 */}
                <div className="mb-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-medium text-[#0f172b]">피평가자 목록</h3>
                    <p className="text-sm text-[#62748e]">총 {targets.length}명</p>
                  </div>
                  
                  {/* 검색 */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#90A1B9]" />
                    <Input
                      placeholder="이름, 부서, 직급으로 검색..."
                      value={targetSearchTerm}
                      onChange={(e) => setTargetSearchTerm(e.target.value)}
                      className="pl-10 h-9 bg-white border-white focus-visible:border-slate-200"
                    />
                  </div>
                </div>

                {/* 피평가자 목록 */}
                <div className="flex-1 overflow-y-auto pr-2">
                  <div className="space-y-4">
                    {targetDepartments.map(department => {
                      const deptTargets = filteredTargets.filter(t => t.department === department);
                      
                      return (
                        <div key={department} className="space-y-2">
                          <h4 className="text-sm text-slate-500 border-b border-slate-200 pb-1">
                            {department} ({deptTargets.length}명)
                          </h4>
                          <div className="space-y-1">
                            {deptTargets.map((target) => {
                              const assignedCount = assignments[target.id]?.length || 0;
                              const isValid = assignedCount >= minEvaluators && assignedCount <= maxEvaluators;
                              const isSelected = selectedTargetId === target.id;
                              
                              return (
                                <div
                                  key={target.id}
                                  className={`p-3 rounded-[6px] cursor-pointer transition-colors ${
                                    isSelected 
                                      ? 'bg-[rgba(30,64,175,0.1)] border border-blue-800' 
                                      : 'hover:bg-accent border border-transparent'
                                  }`}
                                  onClick={() => setSelectedTargetId(target.id)}
                                >
                                  <div className="flex items-center justify-between gap-3">
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-2">
                                        <p className={`text-sm truncate ${isSelected ? 'font-medium text-blue-800' : 'text-slate-800'}`}>
                                          {target.name}
                                        </p>
                                        <Badge variant="secondary" className="text-xs flex-shrink-0 bg-slate-50">
                                          {target.position}
                                        </Badge>
                                      </div>
                                      <p className="text-xs text-slate-500 truncate">
                                        {target.email}
                                      </p>
                                    </div>
                                    <div className="flex flex-col items-end gap-1">
                                      <Badge 
                                        variant={isValid ? "default" : "secondary"}
                                        className={`text-xs ${
                                          isValid 
                                            ? "bg-green-100 text-green-700 border-green-200" 
                                            : "bg-slate-100 text-[#45556c]"
                                        }`}
                                      >
                                        {assignedCount}명
                                      </Badge>
                                      {!isValid && (
                                        <span className="text-xs text-[#90a1b9]">
                                          {minEvaluators}-{maxEvaluators}명 필요
                                        </span>
                                      )}
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
              </div>

              {/* 구분선 */}
              <div className="w-px bg-slate-200" />

              {/* 오른쪽: 평가자 목록 */}
              <div className="flex-1 flex flex-col">
                {selectedTargetId ? (
                  <>
                    {/* 헤더 */}
                    <div className="mb-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-medium text-[#0f172b]">{selectedTarget?.name}</h3>
                        </div>
                        <Badge 
                          variant="secondary"
                          className="bg-slate-50 text-slate-600"
                        >
                          {assignedEvaluators.length}/{maxEvaluators} 명 선택됨
                        </Badge>
                      </div>
                      <p className="text-sm text-[#62748e]">{selectedTarget?.department} · {selectedTarget?.position}</p>
                      
                      {/* 검색 */}
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#90A1B9]" />
                        <Input
                          placeholder="이름, 부서, 직급으로 검색..."
                          value={evaluatorSearchTerm}
                          onChange={(e) => setEvaluatorSearchTerm(e.target.value)}
                          className="pl-10 h-9 bg-white border-white focus-visible:border-slate-200"
                        />
                      </div>
                    </div>

                    {/* 평가자 목록 */}
                    <div className="flex-1 overflow-y-auto pr-2">
                      <div className="space-y-4">
                        {evaluatorDepartments.map(department => {
                          const deptEvaluators = filteredEvaluators.filter(e => e.department === department);
                          
                          return (
                            <div key={department} className="space-y-2">
                              <h4 className="text-sm text-slate-500 border-b border-slate-200 pb-1">
                                {department} ({deptEvaluators.length}명)
                              </h4>
                              <div className="space-y-1">
                                {deptEvaluators.map((evaluator) => {
                                  const isSelected = assignedEvaluators.includes(evaluator.id);
                                  const canSelect = !isSelected && assignedEvaluators.length < maxEvaluators;
                                  
                                  return (
                                    <div
                                      key={evaluator.id}
                                      className={`flex items-center space-x-3 p-3 rounded-[6px] cursor-pointer transition-colors ${
                                        isSelected 
                                          ? 'bg-blue-50 border border-blue-200' 
                                          : canSelect 
                                            ? 'hover:bg-accent border border-transparent' 
                                            : 'opacity-50 cursor-not-allowed border border-transparent'
                                      }`}
                                      onClick={() => {
                                        if (isSelected || canSelect) {
                                          toggleEvaluatorForTarget(selectedTargetId, evaluator.id);
                                        }
                                      }}
                                    >
                                      <Checkbox
                                        checked={isSelected}
                                        disabled={!isSelected && !canSelect}
                                        className="pointer-events-none"
                                      />
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                          <p className="text-sm truncate text-slate-800">{evaluator.name}</p>
                                          <Badge variant="secondary" className="text-xs flex-shrink-0 bg-slate-50">
                                            {evaluator.position}
                                          </Badge>
                                        </div>
                                        <p className="text-xs text-slate-500 truncate">
                                          {evaluator.email}
                                        </p>
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
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <div className="p-4 bg-slate-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <svg className="h-8 w-8 text-slate-400" fill="none" viewBox="0 0 24 24">
                          <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M18 18C18 16.0147 15.3137 14 12 14C8.68629 14 6 16.0147 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <h3 className="text-base font-medium text-slate-900 mb-2">피평가자를 선택해주세요</h3>
                      <p className="text-sm text-slate-500">
                        왼쪽 목록에서 평가자를 설정할 피평가자를 선택하세요
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        {/* 하단 액션 버튼 */}
        <div className="border-t border-slate-200 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-sm">
              {validation && !validation.isValid && (
                <span className="text-[#e17100]">
                  {validation.invalidTargets.length}명의 피평가자에 대한 평가자 선택이 완료되지 않았습니다.
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                onClick={handleBack}
                className="px-4 py-2 h-9 bg-white border-slate-200"
              >
                이전
              </Button>
              <Button 
                onClick={handleConfirm}
                disabled={!validation?.isValid}
                className="bg-blue-800 hover:bg-blue-800/90 text-white px-6 py-2 h-9 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                리뷰 시작하기
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}