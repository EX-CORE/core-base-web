import React from 'react';

// 유저(임직원)의 리뷰 메뉴, 네이밍 수정하기!
export default function ReviewsPage() {
  return (
    <div className="bg-white h-full overflow-auto">
      <div className="w-full max-w-[1280px] mx-auto px-16 py-16">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold text-[#101828] leading-8">리뷰</h1>
              <p className="text-sm text-[#6a7282] leading-5">진행 중인 리뷰에 참여하세요</p>
            </div>
          </div>
        </div>

        {/* 콘텐츠 영역 - 비워둠 */}
        <div className="space-y-4">
          {/* 향후 리뷰 콘텐츠가 추가될 영역 */}
        </div>
      </div>
    </div>
  );
}
