import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Plus, FileQuestion } from 'lucide-react';
import QuestionItem from './QuestionItem';

interface Question {
  id: number;
  type: 'multiple' | 'text' | 'rating';
  title: string;
  description: string;
  options?: string[];
  required: boolean;
}

interface QuestionListProps {
  onQuestionAdd: boolean;
  resetQuestionAdd: () => void;
}

export default function QuestionList({ onQuestionAdd, resetQuestionAdd }: QuestionListProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [nextId, setNextId] = useState(1);

  React.useEffect(() => {
    if (onQuestionAdd) {
      addQuestion();
      resetQuestionAdd();
    }
  }, [onQuestionAdd, resetQuestionAdd]);

  const addQuestion = () => {
    const newQuestion: Question = {
      id: nextId,
      type: 'multiple',
      title: '',
      description: '',
      options: ['옵션 1', '옵션 2'],
      required: false
    };
    setQuestions(prev => [...prev, newQuestion]);
    setNextId(prev => prev + 1);
  };

  const updateQuestion = (id: number, updates: Partial<Question>) => {
    setQuestions(prev =>
      prev.map(q => q.id === id ? { ...q, ...updates } : q)
    );
  };

  const deleteQuestion = (id: number) => {
    setQuestions(prev => prev.filter(q => q.id !== id));
  };

  return (
    <div className="space-y-4">
      {questions.length === 0 ? (
        <Card className="border-dashed border-2">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FileQuestion className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg mb-2">문항을 추가해보세요</h3>
            <p className="text-muted-foreground text-center mb-6">
              설문에 포함할 문항을 생성하여 응답자가 답변할 수 있도록<br />
              객관식, 주관식, 등급형 문항을 자유롭게 구성해보세요
            </p>
            <Button onClick={addQuestion} className="gap-2">
              <Plus className="h-4 w-4" />
              첫 번째 문항 만들기
            </Button>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <h2 className="text-lg">문항 목록 ({questions.length}개)</h2>
            <Button
              variant="outline"
              size="sm"
              onClick={addQuestion}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              문항 추가
            </Button>
          </div>

          <div className="space-y-4">
            {questions.map(question => (
              <QuestionItem
                key={question.id}
                question={question}
                onUpdate={updateQuestion}
                onDelete={deleteQuestion}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
