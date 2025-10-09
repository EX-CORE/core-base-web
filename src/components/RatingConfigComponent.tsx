// Figma 디자인 기반 등급형 설정 컴포넌트
import {RatingConfig} from 'src/services/ratingConfig'
import {Input} from './ui/input'
import {Popover, PopoverTrigger, PopoverContent} from './ui/popover'
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from './ui/collapsible'
import {Grip, Trash2, ChevronDown, Plus, X, ChevronUp, Users, UserCheck} from 'lucide-react';
import {Button} from "./ui/button";
import {Label} from "./ui/label";
import svgPathsDesign from '../imports/svg-to3lsz23fy';


interface Question {
  id: number;
  type: 'multiple' | 'text' | 'rating';
  title: string;
  description: string;
  options?: string[];
  optionScores?: number[]; // 등급형 문항의 옵션별 점수
  required: boolean;
  sectionId?: number;
  order: number; // 전체 순서
}

interface Section {
  id: number;
  title: string;
  description: string;
  order: number; // 전체 순서
}

interface ReviewItem {
  id: number;
  type: 'section' | 'question';
  data: Section | Question;
  order: number;
}

interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
  email: string;
}
export default function RatingConfigComponent({
  ratingConfig,
  updateRatingConfig,
  isRatingConfigOpen,
  setIsRatingConfigOpen,
  reviewTitle,
  setReviewTitle,
  reviewDescription,
  setReviewDescription,
  addRatingOption,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  isDatePickerOpen,
  setIsDatePickerOpen,
  onSelectEvaluators,
  onSelectTargets,
  selectedEvaluators,
  selectedTargets
}: {
  ratingConfig: RatingConfig;
  updateRatingConfig: (config: RatingConfig) => void;
  isRatingConfigOpen: boolean;
  setIsRatingConfigOpen: (open: boolean) => void;
  reviewTitle: string;
  setReviewTitle: (title: string) => void;
  reviewDescription: string;
  setReviewDescription: (description: string) => void;
  addRatingOption: () => void;
  startDate: string;
  setStartDate: (date: string) => void;
  endDate: string;
  setEndDate: (date: string) => void;
  isDatePickerOpen: boolean;
  setIsDatePickerOpen: (open: boolean) => void;
  onSelectEvaluators: () => void;
  onSelectTargets: () => void;
  selectedEvaluators: Employee[];
  selectedTargets: Employee[];
}) {
  return (
    <div className="bg-white relative rounded-[8px] w-full">
      <div aria-hidden="true" className="absolute border border-[#f1f1f1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative w-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[24px] relative w-full">
          {/* 제목과 설명 섹션 */}
          <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
            {/* 제목 */}
            <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full">
              <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[22px] w-full">
                <Input
                  value={reviewTitle}
                  onChange={(e) => setReviewTitle(e.target.value)}
                  className="!text-[22px] !font-semibold !leading-7 border-0 p-0 h-auto bg-transparent focus-visible:ring-0 placeholder:text-slate-400 hover:border-b hover:border-slate-300 focus:border-b focus:border-slate-500 transition-all"
                  placeholder="리뷰 제목을 입력해 주세요."
                  style={{ fontSize: '22px', fontWeight: '600', lineHeight: '28px' }}
                />
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Line 16"></g>
                </svg>
              </div>
            </div>

            {/* 설명 */}
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-0 pt-1 px-0 relative shrink-0 w-full">
              <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
                <Input
                  value={reviewDescription}
                  onChange={(e) => setReviewDescription(e.target.value)}
                  className="!text-[16px] !font-normal !leading-5 border-0 p-0 h-auto bg-transparent focus-visible:ring-0 placeholder:text-slate-400 hover:border-b hover:border-slate-300 focus:border-b focus:border-slate-500 transition-all"
                  placeholder="리뷰 상세 설명을 입력해 주세요."
                  style={{ fontSize: '16px', fontWeight: '400', lineHeight: '20px' }}
                />
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Line 16"></g>
                </svg>
              </div>
            </div>

            {/* 진행 기간 */}
            <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
              <div className="content-stretch flex items-center justify-start relative shrink-0">
                <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center text-nowrap">
                  <p className="leading-[20px] whitespace-pre">진행 기간</p>
                </div>
              </div>
              <Popover open={isDatePickerOpen} onOpenChange={setIsDatePickerOpen}>
                <PopoverTrigger asChild>
                  <div className="bg-white h-9 relative rounded-[4px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="box-border content-stretch flex gap-4 h-9 items-start justify-start overflow-clip px-4 py-2 relative">
                      <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
                        <div className="box-border content-stretch flex gap-px items-start justify-start px-px py-0 relative self-stretch shrink-0">
                          <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-zinc-500">
                            <p className="leading-[14px] whitespace-pre">
                              {startDate ? new Date(startDate).toLocaleDateString('ko-KR', { year: '2-digit', month: '2-digit', day: '2-digit' }).replace(/\./g, '.').replace(/ /g, '') : '00.00.00'}
                            </p>
                          </div>
                        </div>
                        <div className="box-border content-stretch flex gap-px items-start justify-start px-px py-0 relative self-stretch shrink-0">
                          <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-zinc-500">
                            <p className="leading-[14px] whitespace-pre">~</p>
                          </div>
                        </div>
                        <div className="box-border content-stretch flex gap-px items-start justify-start px-px py-0 relative self-stretch shrink-0">
                          <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-zinc-500">
                            <p className="leading-[14px] whitespace-pre">
                              {endDate ? new Date(endDate).toLocaleDateString('ko-KR', { year: '2-digit', month: '2-digit', day: '2-digit' }).replace(/\./g, '.').replace(/ /g, '') : '00.00.00'}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h-[13.125px] relative shrink-0 w-3.5">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                          <g id="image">
                            <path d={svgPathsDesign.p2e800100} fill="var(--fill-0, black)" id="Vector" />
                            <g id="Vector_2"></g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <div className="p-4 space-y-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">시작일</Label>
                      <Input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">종료일</Label>
                      <Input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsDatePickerOpen(false)}
                        className="flex-1"
                      >
                        취소
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => setIsDatePickerOpen(false)}
                        className="flex-1"
                      >
                        확인
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* 평가자/피평가자 선택 */}
            <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0 w-full">
              <Button
                variant="outline"
                className="flex-1 bg-white border border-gray-200 text-slate-600 hover:bg-gray-50 h-9 px-4 py-2 gap-2 rounded-[4px]"
                onClick={onSelectEvaluators}
              >
                <Users className="h-4 w-4" />
                <span className="text-sm font-medium leading-5">
                  평가자 선택 {selectedEvaluators.length > 0 && `(${selectedEvaluators.length}명)`}
                </span>
              </Button>
              <Button
                variant="outline"
                className="flex-1 bg-white border border-gray-200 text-slate-600 hover:bg-gray-50 h-9 px-4 py-2 gap-2 rounded-[4px]"
                onClick={onSelectTargets}
              >
                <UserCheck className="h-4 w-4" />
                <span className="text-sm font-medium leading-5">
                  피평가자 선택 {selectedTargets.length > 0 && `(${selectedTargets.length}명)`}
                </span>
              </Button>
            </div>
          </div>

          {/* 등급형 문항 설정 */}
          <div className="bg-white relative rounded-[6px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[6px]" />
            <div className="relative w-full">
              <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[24px] relative w-full">
                <Collapsible open={isRatingConfigOpen} onOpenChange={setIsRatingConfigOpen} className="w-full">
                  <CollapsibleTrigger asChild>
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer">
                      <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0">
                        <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                          <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-800">
                            <p className="leading-[14px] whitespace-pre">등급형 문항 설정</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                          <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap">
                            <p className="leading-[20px] whitespace-pre">{` 모든 등급형 문항에 동일한 기준이 적용됩니다.`}</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 size-6">
                        {isRatingConfigOpen ? (
                          <ChevronUp className="h-6 w-6 text-[#18181B]" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-[#18181B]" />
                        )}
                      </div>
                    </div>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <div className="pt-4">
                      <div className="h-0 relative shrink-0 w-full">
                        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 840 1">
                            <g id="Separator">
                              <line id="Separator_2" stroke="var(--stroke-0, #E4E4E7)" x2="840" y1="0.5" y2="0.5" />
                            </g>
                          </svg>
                        </div>
                      </div>

                      <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full mt-4">
                        {ratingConfig.options.map((option, index) => (
                          <div key={index} className="relative shrink-0 w-full">
                            <div className="flex flex-row items-center relative size-full">
                              <div className="box-border content-stretch flex gap-4 items-center justify-start pl-4 pr-0 py-0 relative w-full">
                                <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-right w-3">
                                  <p className="leading-[20px]">{index + 1}</p>
                                </div>
                                <div className="basis-0 content-stretch flex gap-6 grow items-center justify-start min-h-px min-w-px relative shrink-0">
                                  <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[4px] shrink-0">
                                    <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
                                    <div className="flex flex-row items-center relative size-full">
                                      <div className="box-border content-stretch flex items-center justify-between pl-[8.67px] pr-[8.66px] py-[8.667px] relative w-full">
                                        <div className="content-stretch flex flex-col items-start justify-start relative shrink-0">
                                          <Input
                                            value={option}
                                            onChange={(e) => {
                                              const newOptions = [...ratingConfig.options];
                                              newOptions[index] = e.target.value;
                                              updateRatingConfig({ ...ratingConfig, options: newOptions });
                                            }}
                                            className="text-sm font-normal text-[#101828] leading-5 border-0 p-0 h-auto bg-transparent focus-visible:ring-0 placeholder:text-[#101828]"
                                            placeholder={option}
                                          />
                                        </div>
                                        <div className="h-5 shrink-0 w-[19px]" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
                                    <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
                                      <p className="leading-[20px] whitespace-pre">점수 :</p>
                                    </div>
                                    <div className="bg-white box-border content-stretch flex gap-6 items-center justify-center pl-[8.67px] pr-[8.66px] py-[8.667px] relative rounded-[4px] shrink-0 w-[55px]">
                                      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
                                      <Input
                                        type="number"
                                        value={ratingConfig.scores[index]}
                                        onChange={(e) => {
                                          const newScores = [...ratingConfig.scores];
                                          newScores[index] = parseInt(e.target.value) || 0;
                                          updateRatingConfig({ ...ratingConfig, scores: newScores });
                                        }}
                                        className="text-sm font-normal text-[#101828] leading-5 border-0 p-0 h-auto bg-transparent focus-visible:ring-0 text-center placeholder:text-[#101828]"
                                      />
                                    </div>
                                  </div>
                                  <button
                                    onClick={() => {
                                      if (ratingConfig.options.length > 2) {
                                        const newOptions = ratingConfig.options.filter((_, i) => i !== index);
                                        const newScores = ratingConfig.scores.filter((_, i) => i !== index);
                                        updateRatingConfig({ options: newOptions, scores: newScores });
                                      }
                                    }}
                                    className="h-6 w-6 flex items-center justify-center hover:bg-red-50 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed relative shrink-0"
                                    disabled={ratingConfig.options.length <= 2}
                                  >
                                    <X className="h-6 w-6 text-[#71717A]" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}

                        {/* 새 등급 추가 버튼 */}
                        <div className="relative shrink-0 w-full">
                          <div className="flex flex-row items-center relative size-full">
                            <div className="box-border content-stretch flex gap-4 items-center justify-start pl-4 pr-0 py-0 relative w-full">
                              <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-right w-3">
                                <p className="leading-[20px]">{ratingConfig.options.length + 1}</p>
                              </div>
                              <div className="basis-0 content-stretch flex gap-6 grow items-center justify-start min-h-px min-w-px relative shrink-0">
                                <button
                                  onClick={addRatingOption}
                                  className="bg-white border border-dashed border-[#eaeaea] h-9 rounded-[4px] w-full flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                                >
                                  <Plus className="h-4 w-4 text-[#1E293B]" />
                                  <span className="text-sm font-medium text-[#1E293B] leading-5">새 등급 추가</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
