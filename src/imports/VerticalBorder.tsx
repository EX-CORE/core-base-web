import svgPaths from "./svg-63i0icnlwn";

function Frame() {
  return (
    <div className="absolute inset-[10.94%_17.02%_10.94%_17.19%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 22">
        <g clipPath="url(#clip0_177_652)" id="Frame">
          <path d={svgPaths.p2c933b00} fill="var(--fill-0, #FFAB00)" id="Vector" />
          <path d={svgPaths.p203fd7b0} fill="var(--fill-0, #0277FF)" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p3f4fe7c0} fill="var(--fill-0, #62EC87)" fillRule="evenodd" id="Vector_3" />
          <path d={svgPaths.p3e217a00} fill="var(--fill-0, #FF1D3E)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_177_652">
            <rect fill="white" height="21.3542" width="18.2175" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame235() {
  return (
    <div className="absolute bottom-[7.29%] left-0 right-[77.11%] top-[7.29%]">
      <div className="absolute bg-[rgba(217,217,217,0)] left-0 size-48 top-0" />
      <Frame />
    </div>
  );
}

function CoreBase() {
  return (
    <div className="absolute inset-[31.22%_4.6%_26.01%_27.21%]" data-name="CoreBase">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83 14">
          <g id="CoreBase">
            <path d={svgPaths.p2de91680} fill="var(--fill-0, #1C1C1C)" id="Vector" />
            <path d={svgPaths.p376df600} fill="var(--fill-0, #1C1C1C)" id="Vector_2" />
            <path d={svgPaths.p147280} fill="var(--fill-0, #1C1C1C)" id="Vector_3" />
            <path d={svgPaths.p6170280} fill="var(--fill-0, #1C1C1C)" id="Vector_4" />
            <path d={svgPaths.p1d472e70} fill="var(--fill-0, #1C1C1C)" id="Vector_5" />
            <path d={svgPaths.p1d5b9f00} fill="var(--fill-0, #1C1C1C)" id="Vector_6" />
            <path d={svgPaths.p169713c0} fill="var(--fill-0, #1C1C1C)" id="Vector_7" />
            <path d={svgPaths.p1606380} fill="var(--fill-0, #1C1C1C)" id="Vector_8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame236() {
  return (
    <div className="h-8 relative shrink-0 w-[121px]">
      <Frame235 />
      <CoreBase />
    </div>
  );
}

function Svg() {
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

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-8" data-name="Button">
      <Svg />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Frame236 />
      <Button />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[24px] relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Svg1() {
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

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">대시보드</p>
      </div>
    </div>
  );
}

function ItemButton() {
  return (
    <div className="h-8 relative rounded-[4px] shrink-0 w-full" data-name="Item → Button">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-3 h-8 items-center justify-start px-3 py-2 relative w-full">
          <Svg1 />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Svg2() {
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

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">리뷰</p>
      </div>
    </div>
  );
}

function ItemButton1() {
  return (
    <div className="h-8 relative rounded-[4px] shrink-0 w-full" data-name="Item → Button">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-3 h-8 items-center justify-start px-3 py-2 relative w-full">
          <Svg2 />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Svg3() {
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

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-800">
        <p className="leading-[20px] whitespace-pre">리뷰 관리</p>
      </div>
    </div>
  );
}

function ItemButton2() {
  return (
    <div className="bg-slate-200 h-8 relative rounded-[4px] shrink-0 w-full" data-name="Item → Button">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-3 h-8 items-center justify-start px-3 py-2 relative w-full">
          <Svg3 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Svg4() {
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

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">조직 관리</p>
      </div>
    </div>
  );
}

function ItemButton3() {
  return (
    <div className="h-8 relative rounded-[4px] shrink-0 w-full" data-name="Item → Button">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-3 h-8 items-center justify-start px-3 py-2 relative w-full">
          <Svg4 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Svg5() {
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

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">설정</p>
      </div>
    </div>
  );
}

function ItemButton4() {
  return (
    <div className="h-8 relative rounded-[4px] shrink-0 w-full" data-name="Item → Button">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-3 h-8 items-center justify-start px-3 py-2 relative w-full">
          <Svg5 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start px-4 py-6 relative w-full">
          <ItemButton />
          <ItemButton1 />
          <ItemButton2 />
          <ItemButton3 />
          <ItemButton4 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-auto relative shrink-0 w-full" data-name="Container">
      <List />
    </div>
  );
}

function Background() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Background">
      <HorizontalBorder />
      <Container6 />
    </div>
  );
}

export default function VerticalBorder() {
  return (
    <div className="relative size-full" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-slate-300 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex items-start justify-center pl-0 pr-px py-0 relative size-full">
          <Background />
        </div>
      </div>
    </div>
  );
}