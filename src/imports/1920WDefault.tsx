import svgPaths from "./svg-b5cux6qyh8";
import { imgGroup } from "./svg-r6qz6";

function Container() {
  return <div className="h-full shrink-0 w-12" data-name="Container" />;
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap">
        <p className="leading-[32px] whitespace-pre">리뷰 관리</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">인사평가 리뷰를 생성하고 관리하세요</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0" data-name="Container">
      <Heading1 />
      <Container1 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#1447e6] box-border content-stretch flex gap-2 h-9 items-center justify-center px-3 py-2 relative rounded-[4px] shrink-0" data-name="Button">
      <Svg />
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre">새 리뷰 생성</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Button />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bottom-2.5 box-border content-stretch flex flex-col items-start justify-start left-[41px] overflow-clip pl-0 pr-[295.12px] py-0 top-2.5" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">리뷰명으로 검색</p>
      </div>
    </div>
  );
}

function Container5() {
  return <div className="absolute bottom-2.5 left-[41px] top-2.5 w-[394px]" data-name="Container" />;
}

function Input() {
  return (
    <div className="bg-gray-50 h-9 relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div className="h-9 overflow-clip relative w-full">
        <Container4 />
        <Container5 />
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute left-3 size-4 top-1/2 translate-y-[-50%]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M14 14L11.1067 11.1067" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start max-w-[448px] relative shrink-0 w-[260px] z-[2]" data-name="Container">
      <Input />
      <Svg1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p36bb6c80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame1321320930() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <Svg2 />
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-slate-800">
        <p className="leading-[20px] whitespace-pre">전체 상태</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-start relative shrink-0" data-name="Container">
      <Frame1321320930 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="Container">
      <Container7 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Combobox() {
  return (
    <div className="bg-white box-border content-stretch flex h-9 items-center justify-between px-[13px] py-[9px] relative rounded-[4px] shrink-0 w-[140px] z-[1]" data-name="Combobox">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container8 />
      <Svg3 />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="box-border content-stretch flex gap-3 isolate items-center justify-start pb-4 pt-0 px-0 relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container6 />
      <Combobox />
    </div>
  );
}

function Cell() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-[10.25px] pt-[9.75px] px-2 relative shrink-0 w-[300px]" data-name="Cell">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">리뷰명</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-[10.25px] pt-[9.75px] px-2 relative shrink-0 w-[101.59px]" data-name="Cell">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">상태</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-[10.25px] pt-[9.75px] px-2 relative shrink-0 w-[284.61px]" data-name="Cell">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">리뷰 기간</p>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-[10.25px] pt-[9.75px] px-2 relative shrink-0 w-[113.03px]" data-name="Cell">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">평가자</p>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-[10.25px] pt-[9.75px] px-2 relative shrink-0 w-[113.03px]" data-name="Cell">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">피평가자</p>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-[10.25px] pt-[9.75px] px-2 relative shrink-0 w-[79.2px]" data-name="Cell">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">진행도</p>
      </div>
    </div>
  );
}

function Cell6() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-[10.25px] pt-[9.75px] px-2 relative shrink-0 w-[142.53px]" data-name="Cell">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">생성일</p>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="bg-gray-50 relative shrink-0 w-full" data-name="Header → Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex items-start justify-center pl-0 pr-20 py-0 relative w-full">
          <Cell />
          <Cell1 />
          <Cell2 />
          <Cell3 />
          <Cell4 />
          <Cell5 />
          <Cell6 />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[280px] overflow-clip relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">2024년 상반기 인사평가</p>
      </div>
    </div>
  );
}

function Data() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start px-2 py-[20.5px] relative shrink-0 w-[300px]" data-name="Data">
      <Button1 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-green-50 box-border content-stretch flex items-center justify-start px-[11px] py-[5px] relative rounded-[3.35544e+07px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-green-500 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-green-600 text-nowrap">
        <p className="leading-[16px] whitespace-pre">진행중</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start px-2 py-[17.5px] relative shrink-0 w-[101.59px]" data-name="Data">
      <BackgroundBorder />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="leading-[20px]">2024-02-01 ~ 2024-02-28</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] w-full">
        <p className="leading-[20px]">28일간</p>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pl-2 pr-0 py-0 relative shrink-0 w-[276.61px]" data-name="Data">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a837050} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">2명</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="box-border content-stretch flex gap-1 items-center justify-center px-2.5 py-2 relative rounded-[4px] shrink-0" data-name="Button">
      <Svg4 />
      <Container11 />
    </div>
  );
}

function Data3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pl-4 pr-2 py-[12.5px] relative shrink-0 w-[121.03px]" data-name="Data">
      <Button2 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a837050} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">5명</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="box-border content-stretch flex gap-1 items-center justify-center px-2.5 py-2 relative rounded-[4px] shrink-0" data-name="Button">
      <Svg5 />
      <Container12 />
    </div>
  );
}

function Data4() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start px-2 py-[12.5px] relative shrink-0 w-[113.03px]" data-name="Data">
      <Button3 />
    </div>
  );
}

function Data5() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start px-2 py-[20.5px] relative shrink-0 w-[79.2px]" data-name="Data">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">100%</p>
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start px-2 py-[20.5px] relative shrink-0 w-[142.53px]" data-name="Data">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">2024-01-15</p>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p36e45a00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a14b300} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2295f880} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonMenu() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-2.5 py-0 relative rounded-[4px] shrink-0 size-8" data-name="Button menu">
      <Svg6 />
    </div>
  );
}

function Data7() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start px-2 py-[14.5px] relative shrink-0 w-20" data-name="Data">
      <ButtonMenu />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Data />
      <Data1 />
      <Data2 />
      <Data3 />
      <Data4 />
      <Data5 />
      <Data6 />
      <Data7 />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[280px] overflow-clip relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">신입사원 온보딩 평가</p>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start px-2 py-[20.5px] relative shrink-0 w-[300px]" data-name="Data">
      <Button4 />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex items-center justify-start px-[11px] py-[5px] relative rounded-[3.35544e+07px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">종료</p>
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start px-2 py-[17.5px] relative shrink-0 w-[101.59px]" data-name="Data">
      <BackgroundBorder1 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="leading-[20px]">2024-01-20 ~ 2024-01-31</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] w-full">
        <p className="leading-[20px]">12일간</p>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pl-2 pr-0 py-0 relative shrink-0 w-[276.61px]" data-name="Data">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a837050} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">1명</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="box-border content-stretch flex gap-1 items-center justify-center px-2.5 py-2 relative rounded-[4px] shrink-0" data-name="Button">
      <Svg7 />
      <Container15 />
    </div>
  );
}

function Data11() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pl-4 pr-2 py-[12.5px] relative shrink-0 w-[121.03px]" data-name="Data">
      <Button5 />
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a837050} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-center justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">2명</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="box-border content-stretch flex gap-1 items-center justify-center px-2.5 py-2 relative rounded-[4px] shrink-0" data-name="Button">
      <Svg8 />
      <Container16 />
    </div>
  );
}

function Data12() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start px-2 py-[12.5px] relative shrink-0 w-[113.03px]" data-name="Data">
      <Button6 />
    </div>
  );
}

function Data13() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start px-2 py-[20.5px] relative shrink-0 w-[79.2px]" data-name="Data">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">100%</p>
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start px-2 py-[20.5px] relative shrink-0 w-[142.53px]" data-name="Data">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">2024-01-10</p>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p36e45a00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a14b300} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2295f880} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonMenu1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-2.5 py-0 relative rounded-[4px] shrink-0 size-8" data-name="Button menu">
      <Svg9 />
    </div>
  );
}

function Data15() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start px-2 py-[14.5px] relative shrink-0 w-20" data-name="Data">
      <ButtonMenu1 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Data8 />
      <Data9 />
      <Data10 />
      <Data11 />
      <Data12 />
      <Data13 />
      <Data14 />
      <Data15 />
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[280px] overflow-clip relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">팀장급 리더십 평가</p>
      </div>
    </div>
  );
}

function Data16() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start px-2 py-[20.5px] relative shrink-0 w-[300px]" data-name="Data">
      <Button7 />
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-amber-50 box-border content-stretch flex items-center justify-start px-[11px] py-[5px] relative rounded-[3.35544e+07px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-amber-500 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-amber-600 text-nowrap">
        <p className="leading-[16px] whitespace-pre">예정</p>
      </div>
    </div>
  );
}

function Data17() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start px-2 py-[17.5px] relative shrink-0 w-[101.59px]" data-name="Data">
      <BackgroundBorder2 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="leading-[20px]">2024-02-15 ~ 2024-03-15</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] w-full">
        <p className="leading-[20px]">30일간</p>
      </div>
    </div>
  );
}

function Data18() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pl-2 pr-0 py-0 relative shrink-0 w-[276.61px]" data-name="Data">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a837050} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">3명</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="box-border content-stretch flex gap-1 items-center justify-center px-2.5 py-2 relative rounded-[4px] shrink-0" data-name="Button">
      <Svg10 />
      <Container19 />
    </div>
  );
}

function Data19() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pl-4 pr-2 py-[12.5px] relative shrink-0 w-[121.03px]" data-name="Data">
      <Button8 />
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a837050} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">4명</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="box-border content-stretch flex gap-1 items-center justify-center px-2.5 py-2 relative rounded-[4px] shrink-0" data-name="Button">
      <Svg11 />
      <Container20 />
    </div>
  );
}

function Data20() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start px-2 py-[12.5px] relative shrink-0 w-[113.03px]" data-name="Data">
      <Button9 />
    </div>
  );
}

function Data21() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start px-2 py-[20.5px] relative shrink-0 w-[79.2px]" data-name="Data">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">33%</p>
      </div>
    </div>
  );
}

function Data22() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start px-2 py-[20.5px] relative shrink-0 w-[142.53px]" data-name="Data">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">2024-01-08</p>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p36e45a00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a14b300} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2295f880} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonMenu2() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-2.5 py-0 relative rounded-[4px] shrink-0 size-8" data-name="Button menu">
      <Svg12 />
    </div>
  );
}

function Data23() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start px-2 py-[14.5px] relative shrink-0 w-20" data-name="Data">
      <ButtonMenu2 />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Data16 />
      <Data17 />
      <Data18 />
      <Data19 />
      <Data20 />
      <Data21 />
      <Data22 />
      <Data23 />
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[280px] overflow-clip relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">개발팀 분기별 성과평가 및 역량 진단</p>
      </div>
    </div>
  );
}

function Data24() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-5 pt-[20.5px] px-2 relative shrink-0 w-[300px]" data-name="Data">
      <Button10 />
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-amber-50 box-border content-stretch flex items-center justify-start px-[11px] py-[5px] relative rounded-[3.35544e+07px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-amber-500 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-amber-600 text-nowrap">
        <p className="leading-[16px] whitespace-pre">예정</p>
      </div>
    </div>
  );
}

function Data25() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-[17px] pt-[17.5px] px-2 relative shrink-0 w-[101.59px]" data-name="Data">
      <BackgroundBorder3 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="leading-[20px]">2024-03-01 ~ 2024-03-31</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] w-full">
        <p className="leading-[20px]">31일간</p>
      </div>
    </div>
  );
}

function Data26() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pl-2 pr-0 py-0 relative shrink-0 w-[276.61px]" data-name="Data">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a837050} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-center justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">2명</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="box-border content-stretch flex gap-1 items-center justify-center px-2.5 py-2 relative rounded-[4px] shrink-0" data-name="Button">
      <Svg13 />
      <Container23 />
    </div>
  );
}

function Data27() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-3 pl-4 pr-2 pt-[12.5px] relative shrink-0 w-[121.03px]" data-name="Data">
      <Button11 />
    </div>
  );
}

function Svg14() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a837050} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-center justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">3명</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="box-border content-stretch flex gap-1 items-center justify-center px-2.5 py-2 relative rounded-[4px] shrink-0" data-name="Button">
      <Svg14 />
      <Container24 />
    </div>
  );
}

function Data28() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-3 pt-[12.5px] px-2 relative shrink-0 w-[113.03px]" data-name="Data">
      <Button12 />
    </div>
  );
}

function Data29() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-5 pt-[20.5px] px-2 relative shrink-0 w-[79.2px]" data-name="Data">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">0%</p>
      </div>
    </div>
  );
}

function Data30() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-5 pt-[20.5px] px-2 relative shrink-0 w-[142.53px]" data-name="Data">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">2024-02-10</p>
      </div>
    </div>
  );
}

function Svg15() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p36e45a00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a14b300} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2295f880} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonMenu3() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-2.5 py-0 relative rounded-[4px] shrink-0 size-8" data-name="Button menu">
      <Svg15 />
    </div>
  );
}

function Data31() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-3.5 pt-[14.5px] px-2 relative shrink-0 w-20" data-name="Data">
      <ButtonMenu3 />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Row">
      <Data24 />
      <Data25 />
      <Data26 />
      <Data27 />
      <Data28 />
      <Data29 />
      <Data30 />
      <Data31 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Body">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-auto relative shrink-0 w-full" data-name="Table">
      <HeaderRow />
      <Body />
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Background+Border">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-px relative w-full">
          <Table />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start pb-0 pt-16 px-0 relative shrink-0 w-[1280px]" data-name="Container">
      <Container3 />
      <HorizontalBorder />
      <BackgroundBorder4 />
    </div>
  );
}

function Container26() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col items-center overflow-auto relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-[328px] py-0 relative size-full">
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white content-stretch flex h-[1200px] items-start justify-start relative shrink-0 w-full" data-name="Background">
      <Container />
      <Container26 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[-0.05%_7.75%_0.75%_7.96%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[20.23px_24.023px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 24">
        <g id="Group">
          <path d={svgPaths.p39274000} fill="var(--fill-0, #FFAB00)" id="Vector" />
          <path d={svgPaths.pff50a00} fill="var(--fill-0, #0277FF)" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.pb531200} fill="var(--fill-0, #62EC87)" fillRule="evenodd" id="Vector_3" />
          <path d={svgPaths.p13e1ae80} fill="var(--fill-0, #FF1D3E)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[-0.05%_7.75%_-0.05%_7.96%]" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Svg16() {
  return (
    <div className="relative shrink-0 size-6" data-name="SVG">
      <ClipPathGroup />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-8" data-name="Container">
      <Svg16 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-8" data-name="Container">
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex h-8 items-center justify-center relative shrink-0 w-10" data-name="Container">
      <Container28 />
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[21px] pt-5 px-2 relative w-full">
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Svg17() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 2V14" id="Vector_2" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-8" data-name="Button">
      <Svg17 />
    </div>
  );
}

function Item() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-[-4.5px] right-[-4.5px] top-0" data-name="Item">
      <Button13 />
    </div>
  );
}

function ItemMargin() {
  return (
    <div className="h-10 relative shrink-0 w-full" data-name="Item:margin">
      <Item />
    </div>
  );
}

function Svg18() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p3a151200} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1811de30} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 size-8" data-name="Button">
      <Svg18 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Item">
      <Button14 />
    </div>
  );
}

function Svg19() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p17f48400} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 size-8" data-name="Button">
      <Svg19 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Item">
      <Button15 />
    </div>
  );
}

function Svg20() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #1E293B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #1E293B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #1E293B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #1E293B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #1E293B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-slate-200 box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 size-8" data-name="Button">
      <Svg20 />
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Item">
      <Button16 />
    </div>
  );
}

function Svg21() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.pda21400} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1be36900} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33333" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33333" id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33333" id="Vector_6" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33333" id="Vector_7" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 size-8" data-name="Button">
      <Svg21 />
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Item">
      <Button17 />
    </div>
  );
}

function Svg22() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1e124b00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 size-8" data-name="Button">
      <Svg22 />
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Item">
      <Button18 />
    </div>
  );
}

function List() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start px-3 py-6 relative shrink-0" data-name="List">
      <ItemMargin />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

function Container30() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Container">
      <List />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-slate-50 content-stretch flex flex-col h-full items-start justify-start relative shrink-0" data-name="Background">
      <HorizontalBorder1 />
      <Container30 />
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="absolute box-border content-stretch flex h-[1200px] items-start justify-center left-[-0.43px] pl-0 pr-px py-0 top-[0.14px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Background1 />
    </div>
  );
}

export default function Component1920WDefault() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-start relative size-full" data-name="1920w default">
      <VerticalBorder />
      <Background />
    </div>
  );
}