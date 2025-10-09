import React, { useState } from 'react';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Switch } from '../../components/ui/switch';
import { Button } from '../../components/ui/button';
import { ChevronDown, ChevronUp, Settings, Plus, X } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../../components/ui/collapsible';

interface RatingConfig {
  options: string[];
  scores: number[];
}

interface ReviewFormProps {
  onAddQuestion?: (type?: 'multiple' | 'text' | 'rating') => void;
  onUpdateRatingConfig: (newConfig: RatingConfig) => void;
}

export default function ReviewForm({ onAddQuestion, onUpdateRatingConfig }: ReviewFormProps) {
  const [reviewData, setReviewData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    useRating: false
  });
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [newRatingOption, setNewRatingOption] = useState('');
  const ratingConfig = {
    options: ['매우 부족', '부족', '보통', '우수', '매우 우수'],
    scores: [1, 2, 3, 4, 5]
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setReviewData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addRatingOption = () => {
    if (newRatingOption.trim()) {
      const maxScore = Math.max(...ratingConfig.scores);
      const newConfig = {
        options: [...ratingConfig.options, newRatingOption.trim()],
        scores: [...ratingConfig.scores, maxScore + 1]
      };
      onUpdateRatingConfig(newConfig);
      setNewRatingOption('');
    }
  };

  const removeRatingOption = (index: number) => {
    if (ratingConfig.options.length > 2) { // 최소 2개 옵션 유지
      const newConfig = {
        options: ratingConfig.options.filter((_, i) => i !== index),
        scores: ratingConfig.scores.filter((_, i) => i !== index)
      };
      onUpdateRatingConfig(newConfig);
    }
  };

  const updateRatingOption = (index: number, value: string) => {
    const newConfig = {
      ...ratingConfig,
      options: ratingConfig.options.map((option, i) => i === index ? value : option)
    };
    onUpdateRatingConfig(newConfig);
  };

  const updateRatingScore = (index: number, score: number) => {
    const newConfig = {
      ...ratingConfig,
      scores: ratingConfig.scores.map((s, i) => i === index ? score : s)
    };
    onUpdateRatingConfig(newConfig);
  };

  return (
    <div className="space-y-8">
      {/* 기본 정보 설정 */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl text-gray-900 mb-2">기본 정보</h2>
            <p className="text-gray-600 text-sm">리뷰의 기본 정보를 입력하세요</p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="title">리뷰 제목</Label>
              <Input
                id="title"
                placeholder="리뷰 제목을 입력해주세요"
                value={reviewData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="mt-1"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="startDate">시작일</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={reviewData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="endDate">종료일</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={reviewData.endDate}
                  onChange={(e) => handleInputChange('endDate', e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 추가 설정 영역 */}
      <Collapsible open={isAdvancedOpen} onOpenChange={setIsAdvancedOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full justify-between p-6 h-auto bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 border border-gray-200 rounded-lg transition-all duration-200">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <Settings className="h-5 w-5 text-blue-700" />
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-900">상세 설정</div>
                <p className="text-sm text-gray-500">리뷰 설명 및 등급형 문항 세부 설정</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400 hidden sm:block">
                {isAdvancedOpen ? '접기' : '펼치기'}
              </span>
              {isAdvancedOpen ? <ChevronUp className="h-4 w-4 text-gray-500" /> : <ChevronDown className="h-4 w-4 text-gray-500" />}
            </div>
          </Button>
        </CollapsibleTrigger>

        <CollapsibleContent className="pt-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-8">
            {/* 리뷰 설명 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-gray-100">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-blue-700">1</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">리뷰 설명</h3>
                  <p className="text-sm text-gray-500">참여자에게 보여질 안내사항을 작성하세요</p>
                </div>
              </div>
              <Textarea
                id="description"
                placeholder="리뷰에 대한 설명을 입력해주세요 (선택사항)"
                value={reviewData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
                className="border-gray-200 resize-none"
              />
            </div>

            {/* 등급형 문항 설정 */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-green-700">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">등급형 문항 설정</h3>
                    <p className="text-sm text-gray-500">평점 기반 평가 문항의 등급과 점수를 설정합니다</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">{reviewData.useRating ? '활성화' : '비활성화'}</span>
                  <Switch
                    id="useRating"
                    checked={reviewData.useRating}
                    onCheckedChange={(checked) => handleInputChange('useRating', checked)}
                  />
                </div>
              </div>

              {reviewData.useRating && (
                <div className="space-y-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <div className="space-y-3">
                    <Label className="font-medium text-gray-900">등급별 라벨 및 점수</Label>
                    {ratingConfig.options.map((option, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-200 shadow-sm">
                        <div className="flex items-center gap-2 flex-1">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-blue-700">
                              {index + 1}
                            </span>
                          </div>
                          <Input
                            value={option}
                            onChange={(e) => updateRatingOption(index, e.target.value)}
                            placeholder={`등급 ${index + 1}`}
                            className="border-blue-200 focus:border-blue-400 focus:ring-blue-400/20"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <Label className="text-sm text-blue-700 whitespace-nowrap">점수:</Label>
                          <Input
                            type="number"
                            value={ratingConfig.scores[index] || 0}
                            onChange={(e) => updateRatingScore(index, parseInt(e.target.value) || 0)}
                            className="w-20 border-blue-200 focus:border-blue-400 focus:ring-blue-400/20"
                            min="0"
                            max="100"
                          />
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeRatingOption(index)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 flex-shrink-0"
                          disabled={ratingConfig.options.length <= 2}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}

                    <div className="flex items-center gap-3 p-3 border-2 border-dashed border-blue-300 rounded-lg bg-white/50">
                      <div className="flex items-center gap-2 flex-1">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center border-2 border-dashed border-blue-300">
                          <span className="text-xs font-medium text-blue-500">
                            {ratingConfig.options.length + 1}
                          </span>
                        </div>
                        <Input
                          placeholder="새 등급을 입력하세요"
                          value={newRatingOption}
                          onChange={(e) => setNewRatingOption(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && addRatingOption()}
                          className="border-blue-200 focus:border-blue-400 focus:ring-blue-400/20"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <Label className="text-sm text-blue-700 whitespace-nowrap">점수:</Label>
                        <Input
                          type="number"
                          value={ratingConfig.scores.length > 0 ? Math.max(...ratingConfig.scores) + 1 : 1}
                          className="w-20 border-blue-200 focus:border-blue-400 focus:ring-blue-400/20 bg-gray-50"
                          disabled
                        />
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={addRatingOption}
                        disabled={!newRatingOption.trim()}
                        className="flex-shrink-0 border-blue-200 text-blue-700 hover:bg-blue-50"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="bg-blue-100 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-white">ℹ</span>
                      </div>
                      <div>
                        <p className="text-sm text-blue-800 font-medium mb-1">등급형 문항 일괄 적용</p>
                        <p className="text-sm text-blue-700">
                          이 설정은 모든 등급형 문항에 자동으로 적용됩니다.
                          등급형 문항 추가 시 동일한 설정이 사용됩니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
