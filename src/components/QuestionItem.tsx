import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Trash2, Plus, X } from 'lucide-react';

interface Question {
  id: number;
  type: 'multiple' | 'text' | 'rating';
  title: string;
  description: string;
  options?: string[];
  required: boolean;
}

interface QuestionItemProps {
  question: Question;
  onUpdate: (id: number, updates: Partial<Question>) => void;
  onDelete: (id: number) => void;
}

export default function QuestionItem({ question, onUpdate, onDelete }: QuestionItemProps) {
  const [newOption, setNewOption] = useState('');

  const handleTitleChange = (title: string) => {
    onUpdate(question.id, { title });
  };

  const handleDescriptionChange = (description: string) => {
    onUpdate(question.id, { description });
  };

  const handleTypeChange = (type: 'multiple' | 'text' | 'rating') => {
    const updates: Partial<Question> = { type };
    if (type === 'multiple' && !question.options) {
      updates.options = ['옵션 1', '옵션 2'];
    }
    onUpdate(question.id, updates);
  };

  const addOption = () => {
    if (newOption.trim() && question.options) {
      onUpdate(question.id, { options: [...question.options, newOption.trim()] });
      setNewOption('');
    }
  };

  const removeOption = (index: number) => {
    if (question.options) {
      const newOptions = question.options.filter((_, i) => i !== index);
      onUpdate(question.id, { options: newOptions });
    }
  };

  const updateOption = (index: number, value: string) => {
    if (question.options) {
      const newOptions = [...question.options];
      newOptions[index] = value;
      onUpdate(question.id, { options: newOptions });
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'multiple': return '객관식';
      case 'text': return '주관식';
      case 'rating': return '등급형';
      default: return type;
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'multiple': return 'bg-blue-100 text-blue-800';
      case 'text': return 'bg-green-100 text-green-800';
      case 'rating': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="mb-4">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <Badge className={getTypeBadgeColor(question.type)}>
            {getTypeLabel(question.type)}
          </Badge>
          <span className="text-sm text-gray-500">문항 {question.id}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onDelete(question.id)}
          className="text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>문항 유형</Label>
          <Select value={question.type} onValueChange={handleTypeChange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="multiple">객관식</SelectItem>
              <SelectItem value="text">주관식</SelectItem>
              <SelectItem value="rating">등급형</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>문항 제목</Label>
          <Input
            placeholder="문항 제목을 입력해주세요"
            value={question.title}
            onChange={(e) => handleTitleChange(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label>문항 설명 (선택)</Label>
          <Textarea
            placeholder="문항에 대한 추가 설명을 입력해주세요"
            value={question.description}
            onChange={(e) => handleDescriptionChange(e.target.value)}
            rows={2}
          />
        </div>

        {question.type === 'multiple' && (
          <div className="space-y-2">
            <Label>선택지</Label>
            <div className="space-y-2">
              {question.options?.map((option, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    value={option}
                    onChange={(e) => updateOption(index, e.target.value)}
                    placeholder={`옵션 ${index + 1}`}
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeOption(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <Input
                  placeholder="새 선택지를 입력하고 추가를 클릭하세요"
                  value={newOption}
                  onChange={(e) => setNewOption(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addOption()}
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={addOption}
                  disabled={!newOption.trim()}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {question.type === 'rating' && (
          <div className="bg-purple-50 p-3 rounded-lg">
            <p className="text-sm text-purple-800">
              등급형 문항은 기본 설정에서 설정한 등급 체계를 사용합니다.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}