import React from 'react';
import { ReviewState } from 'src/types';

export const getStateBadge = (status: ReviewState) => {
  const stateConfig: Record<ReviewState, { label: string; className: string }> = {
    [ReviewState.READY]: {
      label: '시작전',
      className: 'bg-amber-50 text-amber-600 border-amber-500'
    },
    [ReviewState.PROCESS]: {
      label: '진행중',
      className: 'bg-green-50 text-green-600 border-green-500'
    },
    [ReviewState.DONE]: {
      label: '종료',
      className: 'bg-gray-50 text-gray-500 border-gray-200'
    },
    [ReviewState.STOPPED]: {
      label: '중단됨',
      className: 'bg-red-50 text-red-600 border-red-500'
    },
    [ReviewState.DELETED]: {
      label: '삭제됨',
      className: 'bg-gray-50 text-gray-400 border-gray-200'
    },
  };

  const config = stateConfig[status];
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${config.className}`}>
      {config.label}
    </span>
  );
};

export default function ReviewStateBadge({ status }: { status: ReviewState }) {
  return getStateBadge(status);
}


