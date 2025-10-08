import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ArrowLeft, Star, Clock } from 'lucide-react';

interface Question {
  id: number;
  type: 'multiple' | 'text' | 'rating';
  title: string;
  description: string;
  options?: string[];
  required: boolean;
}

interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
  email: string;
}

interface SurveyPreviewPageProps {
  questions: Question[];
  selectedEvaluators: Employee[];
  selectedTargets: Employee[];
  onBack: () => void;
}

export default function SurveyPreviewPage({
  questions,
  selectedEvaluators,
  selectedTargets,
  onBack
}: SurveyPreviewPageProps) {
  const [answers, setAnswers] = useState<{ [key: number]: any }>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerChange = (questionId: number, answer: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;
  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const renderQuestion = (question: Question) => {
    const answer = answers[question.id];

    switch (question.type) {
      case 'multiple':
        return (
          <div className="space-y-4">
            <RadioGroup
              value={answer}
              onValueChange={(value: string) => handleAnswerChange(question.id, value)}
              className="space-y-3"
            >
              {question.options?.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent cursor-pointer">
                  <RadioGroupItem value={option} id={`${question.id}-${index}`} />
                  <Label htmlFor={`${question.id}-${index}`} className="cursor-pointer flex-1">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 'text':
        return (
          <div className="space-y-4">
            <Textarea
              placeholder="답변을 입력해주세요..."
              value={answer || ''}
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
              className="min-h-32 resize-none"
              maxLength={1000}
            />
            <div className="flex justify-end">
              <span className="text-sm text-muted-foreground">
                {(answer || '').length}/1000
              </span>
            </div>
          </div>
        );

      case 'rating':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
              <span>매우 부족</span>
              <span>매우 우수</span>
            </div>
            <RadioGroup
              value={answer?.toString()}
              onValueChange={(value: string) => handleAnswerChange(question.id, parseInt(value))}
              className="flex justify-between"
            >
              {[1, 2, 3, 4, 5].map((rating) => (
                <div key={rating} className="flex flex-col items-center space-y-2">
                  <RadioGroupItem
                    value={rating.toString()}
                    id={`${question.id}-rating-${rating}`}
                    className="w-6 h-6"
                  />
                  <Label 
                    htmlFor={`${question.id}-rating-${rating}`}
                    className="cursor-pointer text-center"
                  >
                    <div className="flex flex-col items-center space-y-1">
                      <Star
                        className={`h-6 w-6 ${
                          answer >= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                      <span className="text-sm">{rating}</span>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      default:
        return null;
    }
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={onBack}
                className="gap-2 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                편집으로 돌아가기
              </Button>
            </div>
          </div>
        </header>
        
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center">
              <Clock className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="text-xl text-muted-foreground">설문 문항이 없습니다</h2>
            <p className="text-muted-foreground">
              미리보기를 보려면 먼저 문항을 추가해주세요.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              편집으로 돌아가기
            </Button>
            <Badge variant="outline" className="gap-2">
              <Clock className="h-3 w-3" />
              미리보기 모드
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* 설문 컨텐츠는 읽기 최적화를 위해 좁은 width 사용 */}
        <div className="max-w-2xl mx-auto">
          {/* 설문 헤더 */}
          <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
            <div className="space-y-4">
              <div>
                <h1 className="text-2xl">인사평가 설문</h1>
                <p className="text-muted-foreground mt-2">
                  각 문항에 대해 신중히 답변해 주세요.
                </p>
              </div>
              
              {/* 진행률 */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">진행률</span>
                  <span className="text-muted-foreground">
                    {currentQuestionIndex + 1} / {questions.length}
                  </span>
                </div>
                <Progress value={progress} className="w-full" />
              </div>

              {/* 평가 정보 */}
              {(selectedEvaluators.length > 0 || selectedTargets.length > 0) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                  {selectedEvaluators.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm text-muted-foreground">평가자</h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedEvaluators.slice(0, 3).map((evaluator) => (
                          <Badge key={evaluator.id} variant="secondary" className="text-xs">
                            {evaluator.name}
                          </Badge>
                        ))}
                        {selectedEvaluators.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{selectedEvaluators.length - 3}명
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {selectedTargets.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm text-muted-foreground">평가 대상</h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedTargets.slice(0, 3).map((target) => (
                          <Badge key={target.id} variant="outline" className="text-xs">
                            {target.name}
                          </Badge>
                        ))}
                        {selectedTargets.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{selectedTargets.length - 3}명
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* 현재 문항 */}
          {currentQuestion && (
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="space-y-6">
                {/* 문항 헤더 */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-lg text-muted-foreground mt-1">
                      {currentQuestionIndex + 1}.
                    </span>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start gap-2">
                        <h3 className="text-lg flex-1">
                          {currentQuestion.title || '제목을 입력하세요'}
                        </h3>
                        {currentQuestion.required && (
                          <Badge className="bg-red-100 text-red-700 border-red-200 hover:bg-red-100">
                            필수
                          </Badge>
                        )}
                      </div>
                      {currentQuestion.description && (
                        <p className="text-muted-foreground">
                          {currentQuestion.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* 문항 응답 영역 */}
                <div className="pl-8">
                  {renderQuestion(currentQuestion)}
                </div>
              </div>
            </div>
          )}

          {/* 네비게이션 버튼 */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              이전
            </Button>
            
            <div className="flex gap-2">
              {currentQuestionIndex < questions.length - 1 ? (
                <Button onClick={handleNext}>
                  다음
                </Button>
              ) : (
                <Button className="bg-green-600 hover:bg-green-700">
                  제출하기
                </Button>
              )}
            </div>
          </div>

          {/* 문항 목록 (작은 인디케이터) */}
          <div className="mt-8 flex justify-center">
            <div className="flex gap-2">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`w-8 h-8 rounded-full text-sm transition-colors ${
                    index === currentQuestionIndex
                      ? 'bg-primary text-primary-foreground'
                      : answers[questions[index].id]
                      ? 'bg-green-100 text-green-700 border-green-200'
                      : 'bg-muted text-muted-foreground hover:bg-accent'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}