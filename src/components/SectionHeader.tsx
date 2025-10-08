import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { 
  MoreVertical, 
  Edit3, 
  Trash2, 
  Plus,
  MessageSquare,
  FileText,
  Star,
  GripVertical
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface Section {
  id: number;
  title: string;
  description: string;
}

interface SectionHeaderProps {
  section: Section;
  isEditing: boolean;
  onUpdate: (id: number, updates: Partial<Section>) => void;
  onDelete: (id: number) => void;
  onAddQuestion: (type: 'multiple' | 'text' | 'rating', sectionId: number) => void;
  onStartEdit: () => void;
  onCancelEdit: () => void;
}

export default function SectionHeader({
  section,
  isEditing,
  onUpdate,
  onDelete,
  onAddQuestion,
  onStartEdit,
  onCancelEdit
}: SectionHeaderProps) {
  const [editTitle, setEditTitle] = useState(section.title);
  const [editDescription, setEditDescription] = useState(section.description);

  const handleSave = () => {
    onUpdate(section.id, {
      title: editTitle,
      description: editDescription
    });
    onCancelEdit();
  };

  const handleCancel = () => {
    setEditTitle(section.title);
    setEditDescription(section.description);
    onCancelEdit();
  };

  if (isEditing) {
    return (
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-4">
        <div className="flex items-center gap-2 text-slate-400">
          <GripVertical className="h-4 w-4" />
          <span className="text-sm font-medium">섹션 편집</span>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700 mb-2 block">
              섹션 제목
            </label>
            <Input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder="섹션 제목을 입력하세요"
              className="bg-white"
            />
          </div>
          
          <div>
            <label className="text-sm font-medium text-slate-700 mb-2 block">
              섹션 설명
            </label>
            <Textarea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              placeholder="섹션 설명을 입력하세요 (선택사항)"
              className="bg-white resize-none"
              rows={2}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2">
          <Button 
            size="sm" 
            onClick={handleSave}
            className="bg-blue-700 hover:bg-blue-800 text-white"
          >
            저장
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={handleCancel}
            className="border-slate-200 text-slate-600 hover:text-slate-800"
          >
            취소
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3 flex-1">
          <GripVertical className="h-4 w-4 text-slate-400 mt-1 cursor-move" />
          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-medium text-slate-800">
              {section.title || '제목 없는 섹션'}
            </h3>
            {section.description && (
              <p className="text-sm text-slate-600">{section.description}</p>
            )}
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-600">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={onStartEdit} className="gap-2">
              <Edit3 className="h-4 w-4" />
              섹션 편집
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              onClick={() => onAddQuestion('multiple', section.id)} 
              className="gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              객관식 문항 추가
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => onAddQuestion('rating', section.id)} 
              className="gap-2"
            >
              <Star className="h-4 w-4" />
              등급형 문항 추가
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => onAddQuestion('text', section.id)} 
              className="gap-2"
            >
              <FileText className="h-4 w-4" />
              주관식 문항 추가
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              onClick={() => onDelete(section.id)}
              className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
              섹션 삭제
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* 빠른 문항 추가 버튼들 */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-slate-500">문항 추가:</span>
        <Button
          size="sm"
          variant="outline"
          onClick={() => onAddQuestion('multiple', section.id)}
          className="gap-2 text-slate-600 hover:text-slate-800 border-slate-200"
        >
          <MessageSquare className="h-3 w-3" />
          객관식
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => onAddQuestion('rating', section.id)}
          className="gap-2 text-slate-600 hover:text-slate-800 border-slate-200"
        >
          <Star className="h-3 w-3" />
          등급형
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => onAddQuestion('text', section.id)}
          className="gap-2 text-slate-600 hover:text-slate-800 border-slate-200"
        >
          <FileText className="h-3 w-3" />
          주관식
        </Button>
      </div>
    </div>
  );
}