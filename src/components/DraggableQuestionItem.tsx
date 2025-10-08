import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import type { Identifier } from 'dnd-core';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Badge } from './ui/badge';
import { GripVertical, MessageSquare, FileText, Star, Edit } from 'lucide-react';
import svgPaths from '../imports/svg-srkdro9it3';

interface Question {
  id: number;
  type: 'multiple' | 'text' | 'rating';
  title: string;
  description: string;
  options?: string[];
  required: boolean;
}

interface DragItem {
  id: number;
  index: number;
  type: string;
}

interface DraggableQuestionItemProps {
  question: Question;
  index: number;
  moveQuestion: (dragIndex: number, hoverIndex: number) => void;
  selectQuestion: (id: number) => void;
  selectedQuestionId: number | undefined;
}

export default function DraggableQuestionItem({
  question,
  index,
  moveQuestion,
  selectQuestion,
  selectedQuestionId
}: DraggableQuestionItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: Identifier | null}>({
    accept: 'question',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveQuestion(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag, preview] = useDrag({
    type: 'question',
    item: () => {
      return { id: question.id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;
  
  preview(drop(ref));

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'multiple': return <MessageSquare className="h-4 w-4" />;
      case 'text': return <FileText className="h-4 w-4" />;
      case 'rating': return <Star className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
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
    <div
      ref={ref}
      style={{ opacity }}
      data-handler-id={handlerId}
      className={`group bg-white border rounded-[6px] w-full cursor-pointer transition-all hover:shadow-sm ${
        selectedQuestionId === question.id ? 'border-blue-300 bg-blue-50' : 'border-[#eaeaea]'
      } ${isDragging ? 'opacity-50' : ''}`}
      onClick={() => {
        selectQuestion(question.id);
        const element = document.querySelector(`[data-question-id="${question.id}"]`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }}
    >
      <div className="p-[13px]">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2 items-center flex-1 min-w-0">
            <div className={`px-[7px] py-[3px] rounded-[4px] flex items-center justify-center overflow-clip shrink-0 ${
              question.type === 'rating' ? 'bg-purple-100' : 
              question.type === 'multiple' ? 'bg-blue-100' : 'bg-green-100'
            }`}>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 12 12">
                <path 
                  d={question.type === 'rating' ? svgPaths.p295e8380 : svgPaths.p295e8380} 
                  stroke={question.type === 'rating' ? '#6E11B0' : question.type === 'multiple' ? '#1447E6' : '#008236'} 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </div>
            <div className="flex-1 overflow-clip">
              <span className="text-sm font-normal text-slate-800 leading-5 text-ellipsis overflow-hidden">
                {index + 1}. {question.title || '제목 없음'}
              </span>
            </div>
          </div>
          <div 
            ref={drag}
            className="pb-0 pt-0.5 shrink-0 cursor-move opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 16 16">
              <path d={svgPaths.p1c949200} stroke="#64748B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.pd12ce00} stroke="#64748B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p226ad00} stroke="#64748B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p1e9aa900} stroke="#64748B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p12fdd280} stroke="#64748B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p3be7b040} stroke="#64748B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}