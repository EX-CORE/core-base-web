import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Grip, Trash2 } from 'lucide-react';
import { Input } from './ui/input';

interface Section {
  id: number;
  title: string;
  description: string;
}

interface DraggableSectionItemProps {
  section: Section;
  index: number;
  moveSection: (dragIndex: number, hoverIndex: number) => void;
  selectSection: (id: number) => void;
  selectedSectionId: number | undefined;
  isMainContent?: boolean;
  updateSection?: (id: number, updates: Partial<Section>) => void;
  deleteSection?: (id: number) => void;
}

const ItemType = 'SECTION';

export default function DraggableSectionItem({
  section,
  index,
  moveSection,
  selectSection,
  selectedSectionId,
  isMainContent = false,
  updateSection,
  deleteSection
}: DraggableSectionItemProps) {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveSection(item.index, index);
        item.index = index;
      }
    },
  });

  // 메인 컨텐츠 영역에서 사용하는 경우와 사이드바에서 사용하는 경우를 구분
  if (isMainContent) {
    return (
      <div
        ref={(node) => drag(drop(node))}
        className={`group bg-white border rounded-[10px] w-full border-amber-200 transition-all ${
          isDragging ? 'opacity-50' : ''
        } ${selectedSectionId === section.id ? 'border-blue-300 shadow-md' : ''}`}
        onClick={() => selectSection(section.id)}
      >
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between w-full">
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex gap-3 items-center w-full">
                <span className="text-sm font-medium text-amber-600 leading-5">섹션</span>
                <div className="flex gap-2 items-center pl-2">
                  <span className="text-sm font-medium text-amber-600 leading-5">섹션 구분</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex flex-col gap-2">
                  <Input
                    value={section.title}
                    onChange={(e) => updateSection?.(section.id, { title: e.target.value })}
                    className="!text-[22px] !font-medium !leading-7 border-0 p-0 h-auto bg-transparent focus-visible:ring-0 placeholder:text-slate-400 hover:border-b hover:border-slate-300 focus:border-b focus:border-slate-500 transition-all"
                    placeholder="섹션 제목을 입력해 주세요"
                    style={{ fontSize: '22px', fontWeight: '500', lineHeight: '28px' }}
                  />
                  <div className="h-0 w-full" />
                </div>
                <div className="flex flex-col gap-1 pt-1">
                  <Input
                    value={section.description}
                    onChange={(e) => updateSection?.(section.id, { description: e.target.value })}
                    className="!text-[16px] !font-normal !leading-5 border-0 p-0 h-auto bg-transparent focus-visible:ring-0 placeholder:text-slate-400 hover:border-b hover:border-slate-300 focus:border-b focus:border-slate-500 transition-all"
                    placeholder="섹션 설명을 입력해 주세요"
                    style={{ fontSize: '16px', fontWeight: '400', lineHeight: '20px' }}
                  />
                  <div className="h-0 w-full" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteSection?.(section.id);
                }}
                className="h-8 px-2.5 flex items-center justify-center rounded-[4px] hover:bg-red-50 transition-colors"
              >
                <Trash2 className="h-4 w-4 text-[#E7000B]" />
              </button>
              <div className="h-8 px-2.5 flex items-center justify-center rounded-[4px] cursor-grab opacity-0 group-hover:opacity-100 transition-opacity">
                <Grip className="h-4 w-4 text-amber-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 사이드바에서 사용하는 경우 (기존 UI)
  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`group bg-amber-50 border border-amber-200 rounded-md p-3 cursor-pointer hover:bg-amber-100 transition-colors ${
        isDragging ? 'opacity-50' : ''
      } ${selectedSectionId === section.id ? 'ring-2 ring-amber-300' : ''}`}
      onClick={() => selectSection(section.id)}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className="text-xs font-medium text-amber-700 px-2 py-1 bg-amber-100 rounded">섹션</span>
          <span className="text-sm font-medium text-amber-800 truncate">
            {section.title || `섹션 ${index + 1}`}
          </span>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
          <Grip className="h-4 w-4 text-amber-600" />
        </div>
      </div>
    </div>
  );
}