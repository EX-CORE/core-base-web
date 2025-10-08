import svgPaths from "./svg-nijk6rb17i";

function Container() {
  return <div className="h-full shrink-0 w-64" data-name="Container" />;
}

function Svg() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-2 h-8 items-center justify-center relative rounded-[4px] shrink-0" data-name="Button">
      <Svg />
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">수정 취소</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap">
        <p className="leading-[32px] whitespace-pre">리뷰 수정</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.pad05c0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-2 items-center justify-center px-4 py-2 relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Svg1 />
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">미리보기</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#1447e6] box-border content-stretch flex gap-2 h-9 items-center justify-center px-4 py-2 relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre">저장하기</p>
      </div>
    </div>
  );
}

function Frame1321320931() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Frame1321320932() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Container1 />
      <Frame1321320931 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <Frame1321320932 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[22px] w-full">
        <p className="leading-[28px]">리뷰 제목을 입력해 주세요.</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Line 16"></g>
        </svg>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-0 pt-1 px-0 relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
        <p className="leading-[20px]">리뷰 상세 설명을 입력해 주세요.</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Line 16"></g>
        </svg>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Heading3 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">진행 기간</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="box-border content-stretch flex gap-px items-start justify-start px-px py-0 relative self-stretch shrink-0" data-name="Paragraph">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-zinc-500">
        <p className="leading-[14px] whitespace-pre">00.00.00</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-start justify-start overflow-clip relative shrink-0" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="box-border content-stretch flex gap-px items-start justify-start px-px py-0 relative self-stretch shrink-0" data-name="Paragraph">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-zinc-500">
        <p className="leading-[14px] whitespace-pre">~</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-start justify-start overflow-clip relative shrink-0" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function Frame1321320933() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <Container4 />
      <Container5 />
      <Container4 />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[13.125px] relative shrink-0 w-3.5" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="image">
          <path d={svgPaths.p2e800100} fill="var(--fill-0, black)" id="Vector" />
          <g id="Vector_2"></g>
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip pb-[2.875px] pt-0.5 px-0.5 relative shrink-0 size-[18px]" data-name="image fill">
      <Image />
    </div>
  );
}

function ButtonMenu() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 size-[18px]" data-name="Button menu">
      <ImageFill />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-4 h-full items-center justify-start relative shrink-0" data-name="Container">
      <Frame1321320933 />
      <ButtonMenu />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-9 relative rounded-[4px] shrink-0" data-name="Input">
      <div className="box-border content-stretch flex gap-4 h-9 items-start justify-start overflow-clip px-4 py-2 relative">
        <Container7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="Container">
      <Label />
      <Input />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-800">
        <p className="leading-[14px] whitespace-pre">등급형 문항 설정</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">{` 모든 등급형 문항에 동일한 기준이 적용됩니다.`}</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function IconChevronUp() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / ChevronUp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / ChevronUp">
          <path d="M18 15L12 9L6 15" id="Vector" stroke="var(--stroke-0, #18181B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1321320934() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Container12 />
      <IconChevronUp />
    </div>
  );
}

function Separator() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Separator">
      <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 840 1">
          <g id="Separator">
            <line id="Separator_2" stroke="var(--stroke-0, #E4E4E7)" x2="840" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">매우 부족</p>
      </div>
    </div>
  );
}

function Container14() {
  return <div className="h-5 shrink-0 w-[19px]" data-name="Container" />;
}

function BackgroundBorder() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[8.67px] pr-[8.66px] py-[8.667px] relative w-full">
          <Container13 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">00</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-6 items-center justify-center pl-[8.67px] pr-[8.66px] py-[8.667px] relative rounded-[4px] shrink-0 w-[55px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container15 />
    </div>
  );
}

function Frame1321320936() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">점수 :</p>
      </div>
      <BackgroundBorder1 />
    </div>
  );
}

function IconX() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / X">
          <path d="M18 6L6 18M6 6L18 18" id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1321320937() {
  return (
    <div className="basis-0 content-stretch flex gap-6 grow items-center justify-start min-h-px min-w-px relative shrink-0">
      <BackgroundBorder />
      <Frame1321320936 />
      <IconX />
    </div>
  );
}

function Frame1321320935() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-4 items-center justify-start pl-4 pr-0 py-0 relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-right w-3">
            <p className="leading-[20px]">1</p>
          </div>
          <Frame1321320937 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Frame1321320935 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">부족</p>
      </div>
    </div>
  );
}

function Container18() {
  return <div className="h-5 shrink-0 w-[19px]" data-name="Container" />;
}

function BackgroundBorder2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[8.67px] pr-[8.66px] py-[8.667px] relative w-full">
          <Container17 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">00</p>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-white box-border content-stretch flex gap-6 items-center justify-center pl-[8.67px] pr-[8.66px] py-[8.667px] relative rounded-[4px] shrink-0 w-[55px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container19 />
    </div>
  );
}

function Frame1321320940() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">점수 :</p>
      </div>
      <BackgroundBorder3 />
    </div>
  );
}

function IconX1() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / X">
          <path d="M18 6L6 18M6 6L18 18" id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1321320941() {
  return (
    <div className="basis-0 content-stretch flex gap-6 grow items-center justify-start min-h-px min-w-px relative shrink-0">
      <BackgroundBorder2 />
      <Frame1321320940 />
      <IconX1 />
    </div>
  );
}

function Frame1321320942() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-4 items-center justify-start pl-4 pr-0 py-0 relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-right w-3">
            <p className="leading-[20px]">2</p>
          </div>
          <Frame1321320941 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Frame1321320942 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">보통</p>
      </div>
    </div>
  );
}

function Container22() {
  return <div className="h-5 shrink-0 w-[19px]" data-name="Container" />;
}

function BackgroundBorder4() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[8.67px] pr-[8.66px] py-[8.667px] relative w-full">
          <Container21 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">00</p>
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-white box-border content-stretch flex gap-6 items-center justify-center pl-[8.67px] pr-[8.66px] py-[8.667px] relative rounded-[4px] shrink-0 w-[55px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container23 />
    </div>
  );
}

function Frame1321320943() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">점수 :</p>
      </div>
      <BackgroundBorder5 />
    </div>
  );
}

function IconX2() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / X">
          <path d="M18 6L6 18M6 6L18 18" id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1321320944() {
  return (
    <div className="basis-0 content-stretch flex gap-6 grow items-center justify-start min-h-px min-w-px relative shrink-0">
      <BackgroundBorder4 />
      <Frame1321320943 />
      <IconX2 />
    </div>
  );
}

function Frame1321320945() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-4 items-center justify-start pl-4 pr-0 py-0 relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-right w-3">
            <p className="leading-[20px]">3</p>
          </div>
          <Frame1321320944 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Frame1321320945 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">좋음</p>
      </div>
    </div>
  );
}

function Container26() {
  return <div className="h-5 shrink-0 w-[19px]" data-name="Container" />;
}

function BackgroundBorder6() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[8.67px] pr-[8.66px] py-[8.667px] relative w-full">
          <Container25 />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">00</p>
      </div>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="bg-white box-border content-stretch flex gap-6 items-center justify-center pl-[8.67px] pr-[8.66px] py-[8.667px] relative rounded-[4px] shrink-0 w-[55px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container27 />
    </div>
  );
}

function Frame1321320946() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">점수 :</p>
      </div>
      <BackgroundBorder7 />
    </div>
  );
}

function IconX3() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / X">
          <path d="M18 6L6 18M6 6L18 18" id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1321320947() {
  return (
    <div className="basis-0 content-stretch flex gap-6 grow items-center justify-start min-h-px min-w-px relative shrink-0">
      <BackgroundBorder6 />
      <Frame1321320946 />
      <IconX3 />
    </div>
  );
}

function Frame1321320948() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-4 items-center justify-start pl-4 pr-0 py-0 relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-right w-3">
            <p className="leading-[20px]">4</p>
          </div>
          <Frame1321320947 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Frame1321320948 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">매우 좋음</p>
      </div>
    </div>
  );
}

function Container30() {
  return <div className="h-5 shrink-0 w-[19px]" data-name="Container" />;
}

function BackgroundBorder8() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[8.67px] pr-[8.66px] py-[8.667px] relative w-full">
          <Container29 />
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">00</p>
      </div>
    </div>
  );
}

function BackgroundBorder9() {
  return (
    <div className="bg-white box-border content-stretch flex gap-6 items-center justify-center pl-[8.67px] pr-[8.66px] py-[8.667px] relative rounded-[4px] shrink-0 w-[55px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container31 />
    </div>
  );
}

function Frame1321320949() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">점수 :</p>
      </div>
      <BackgroundBorder9 />
    </div>
  );
}

function IconX4() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / X">
          <path d="M18 6L6 18M6 6L18 18" id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1321320950() {
  return (
    <div className="basis-0 content-stretch flex gap-6 grow items-center justify-start min-h-px min-w-px relative shrink-0">
      <BackgroundBorder8 />
      <Frame1321320949 />
      <IconX4 />
    </div>
  );
}

function Frame1321320951() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-4 items-center justify-start pl-4 pr-0 py-0 relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-right w-3">
            <p className="leading-[20px]">5</p>
          </div>
          <Frame1321320950 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Frame1321320951 />
    </div>
  );
}

function Frame1321320938() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full">
      <Container16 />
      <Container20 />
      <Container24 />
      <Container28 />
      <Container32 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[24px] relative w-full">
          <Frame1321320934 />
          <Separator />
          <Frame1321320938 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder10() {
  return (
    <div className="bg-[#fdfdfd] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f1f1f1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[24px] relative w-full">
          <Container9 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-8 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder10 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[20px] whitespace-pre">문항 1.</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex items-center justify-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8200db] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">등급형</p>
      </div>
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
    <div className="bg-[rgba(250,245,255,0.5)] box-border content-stretch flex h-9 items-center justify-between pl-[12.67px] pr-[12.66px] py-[8.667px] relative rounded-[4px] shrink-0 w-28" data-name="Combobox">
      <div aria-hidden="true" className="absolute border border-[#e9d4ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container35 />
      <Svg3 />
    </div>
  );
}

function Switch() {
  return (
    <div className="bg-[#1447e6] box-border content-stretch flex h-[18.4px] items-center justify-start opacity-50 pl-[14.67px] pr-[1.33px] py-[0.667px] relative rounded-[999px] shrink-0 w-8" data-name="Switch">
      <div className="bg-white rounded-[2.23696e+07px] shrink-0 size-4" data-name="Background" />
    </div>
  );
}

function Margin() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pl-1 pr-0 py-0 relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-500">
        <p className="leading-[16px] whitespace-pre">(고정)</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start opacity-50 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1447e6] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">필수</p>
      </div>
      <Margin />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="Container">
      <Switch />
      <Label1 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pl-2 pr-0 py-0 relative shrink-0" data-name="Margin">
      <Container36 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Combobox />
      <Margin1 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-zinc-400 w-full">
        <p className="leading-[28px]">문항 제목을 입력해 주세요</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Line 16"></g>
        </svg>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-0 pt-1 px-0 relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-zinc-400 w-full">
        <p className="leading-[20px]">문항 설명을 입력해 주세요</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Line 16"></g>
        </svg>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Heading5 />
    </div>
  );
}

function Container39() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M6.66667 7.33333V11.3333" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37e28100} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2ffbeb80} id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="box-border content-stretch flex h-8 items-center justify-center px-2.5 py-0 relative rounded-[4px] shrink-0" data-name="Button">
      <Svg4 />
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="content-stretch flex items-start justify-between relative w-full">
          <Container39 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-800">
        <p className="leading-[14px] whitespace-pre">현재 적용된 등급</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0" data-name="Container">
      <Container42 />
    </div>
  );
}

function IconChevronUp1() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / ChevronUp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / ChevronUp">
          <path d="M18 15L12 9L6 15" id="Vector" stroke="var(--stroke-0, #18181B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1321320952() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Container43 />
      <IconChevronUp1 />
    </div>
  );
}

function Separator1() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Separator">
      <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 840 1">
          <g id="Separator">
            <line id="Separator_2" stroke="var(--stroke-0, #E4E4E7)" x2="840" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[23.02px]" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[20px] whitespace-pre">1.</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col justify-center overflow-auto relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center pl-0 pr-[679.06px] py-0 relative size-full">
          <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-zinc-500">
            <p className="leading-[20px] whitespace-pre">매우 우수</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-zinc-500">
        <p className="leading-[20px] whitespace-pre">5점</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="basis-0 bg-white grow h-9 min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Input">
      <div className="content-stretch flex h-9 items-center justify-start overflow-clip relative w-full">
        <Container45 />
        <Container46 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container47() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container44 />
      <Input1 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Container47 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[23.02px]" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[20px] whitespace-pre">2.</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col justify-center overflow-auto relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center pl-0 pr-[679.06px] py-0 relative size-full">
          <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-zinc-500">
            <p className="leading-[20px] whitespace-pre">우수</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-zinc-500">
        <p className="leading-[20px] whitespace-pre">4점</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="basis-0 bg-white grow h-9 min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Input">
      <div className="content-stretch flex h-9 items-center justify-start overflow-clip relative w-full">
        <Container50 />
        <Container51 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container52() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container49 />
      <Input2 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[23.02px]" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[20px] whitespace-pre">3.</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col justify-center overflow-auto relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center pl-0 pr-[679.06px] py-0 relative size-full">
          <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-zinc-500">
            <p className="leading-[20px] whitespace-pre">보통</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-zinc-500">
        <p className="leading-[20px] whitespace-pre">3점</p>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="basis-0 bg-white grow h-9 min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Input">
      <div className="content-stretch flex h-9 items-center justify-start overflow-clip relative w-full">
        <Container55 />
        <Container56 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container57() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container54 />
      <Input3 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Container57 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[23.02px]" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[20px] whitespace-pre">4.</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col justify-center overflow-auto relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center pl-0 pr-[679.06px] py-0 relative size-full">
          <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-zinc-500">
            <p className="leading-[20px] whitespace-pre">부족</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-zinc-500">
        <p className="leading-[20px] whitespace-pre">2점</p>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="basis-0 bg-white grow h-9 min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Input">
      <div className="content-stretch flex h-9 items-center justify-start overflow-clip relative w-full">
        <Container60 />
        <Container61 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container62() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container59 />
      <Input4 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[23.02px]" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[20px] whitespace-pre">5.</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col justify-center overflow-auto relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center pl-0 pr-[679.06px] py-0 relative size-full">
          <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-zinc-500">
            <p className="leading-[20px] whitespace-pre">매우 부족</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-zinc-500">
        <p className="leading-[20px] whitespace-pre">1점</p>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div className="basis-0 bg-white grow h-9 min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Input">
      <div className="content-stretch flex h-9 items-center justify-start overflow-clip relative w-full">
        <Container65 />
        <Container66 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container67() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container64 />
      <Input5 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Container67 />
    </div>
  );
}

function Container69() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-1 py-0 relative w-full">
          <Container48 />
          <Container53 />
          <Container58 />
          <Container63 />
          <Container68 />
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[24px] relative w-full">
          <Frame1321320952 />
          <Separator1 />
          <Container69 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder11() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-9 items-start justify-start p-[24px] relative w-full">
          <Container41 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[20px] whitespace-pre">문항 2.</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex items-center justify-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1447e6] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">객관식</p>
      </div>
    </div>
  );
}

function Svg5() {
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

function Combobox1() {
  return (
    <div className="bg-[rgba(239,246,255,0.5)] box-border content-stretch flex h-9 items-center justify-between pl-[12.67px] pr-[12.66px] py-[8.667px] relative rounded-[4px] shrink-0 w-28" data-name="Combobox">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container71 />
      <Svg5 />
    </div>
  );
}

function Switch1() {
  return (
    <div className="bg-blue-800 box-border content-stretch flex h-[18.4px] items-center justify-start pl-[14.67px] pr-[1.33px] py-[0.667px] relative rounded-[2.23696e+07px] shrink-0 w-8" data-name="Switch">
      <div className="bg-white rounded-[2.23696e+07px] shrink-0 size-4" data-name="Background" />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="Container">
      <Switch1 />
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1447e6] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">필수</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pl-2 pr-0 py-0 relative shrink-0" data-name="Margin">
      <Container72 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Container70 />
      <Combobox1 />
      <Margin2 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-zinc-400 w-full">
        <p className="leading-[28px]">문항 제목을 입력해 주세요</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Line 16"></g>
        </svg>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-0 pt-1 px-0 relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-zinc-400 w-full">
        <p className="leading-[20px]">문항 설명을 입력해 주세요</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Line 16"></g>
        </svg>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Heading7 />
    </div>
  );
}

function Container75() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container73 />
      <Container74 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M6.66667 7.33333V11.3333" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37e28100} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2ffbeb80} id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="box-border content-stretch flex h-8 items-center justify-center px-2.5 py-0 relative rounded-[4px] shrink-0" data-name="Button">
      <Svg6 />
    </div>
  );
}

function Container76() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="content-stretch flex items-start justify-between relative w-full">
          <Container75 />
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container76 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-800">
        <p className="leading-[14px] whitespace-pre">선택지</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0" data-name="Container">
      <Container78 />
    </div>
  );
}

function Frame1321320953() {
  return (
    <div className="content-stretch flex h-6 items-center justify-between relative shrink-0 w-full">
      <Container79 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[23.02px]" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[20px] whitespace-pre">1.</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start justify-start overflow-auto pl-0 pr-[679.06px] py-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-800">
        <p className="leading-[normal] whitespace-pre">매우 우수</p>
      </div>
    </div>
  );
}

function Input6() {
  return (
    <div className="basis-0 bg-white grow h-9 min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Input">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex h-9 items-start justify-start pb-[9.66px] pt-[9.67px] px-[12.667px] relative w-full">
          <Container81 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container82() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container80 />
      <Input6 />
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="box-border content-stretch flex h-8 items-center justify-center px-2.5 py-0 relative rounded-[4px] shrink-0" data-name="Button">
      <Svg7 />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Container82 />
      <Button7 />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[23.02px]" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[20px] whitespace-pre">2.</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start justify-start overflow-auto pl-0 pr-[706.77px] py-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-800">
        <p className="leading-[normal] whitespace-pre">우수</p>
      </div>
    </div>
  );
}

function Input7() {
  return (
    <div className="basis-0 bg-white grow h-9 min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Input">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex h-9 items-start justify-start pb-[9.66px] pt-[9.67px] px-[12.667px] relative w-full">
          <Container85 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container86() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container84 />
      <Input7 />
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="box-border content-stretch flex h-8 items-center justify-center px-2.5 py-0 relative rounded-[4px] shrink-0" data-name="Button">
      <Svg8 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Container86 />
      <Button8 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[23.02px]" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[20px] whitespace-pre">3.</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start justify-start overflow-auto pl-0 pr-[706.77px] py-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-800">
        <p className="leading-[normal] whitespace-pre">보통</p>
      </div>
    </div>
  );
}

function Input8() {
  return (
    <div className="basis-0 bg-white grow h-9 min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Input">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex h-9 items-start justify-start pb-[9.66px] pt-[9.67px] px-[12.667px] relative w-full">
          <Container89 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container90() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container88 />
      <Input8 />
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="box-border content-stretch flex h-8 items-center justify-center px-2.5 py-0 relative rounded-[4px] shrink-0" data-name="Button">
      <Svg9 />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Container90 />
      <Button9 />
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[23.02px]" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[20px] whitespace-pre">4.</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start justify-start overflow-auto pl-0 pr-[706.77px] py-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-800">
        <p className="leading-[normal] whitespace-pre">부족</p>
      </div>
    </div>
  );
}

function Input9() {
  return (
    <div className="basis-0 bg-white grow h-9 min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Input">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex h-9 items-start justify-start pb-[9.66px] pt-[9.67px] px-[12.667px] relative w-full">
          <Container93 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container94() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container92 />
      <Input9 />
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="box-border content-stretch flex h-8 items-center justify-center px-2.5 py-0 relative rounded-[4px] shrink-0" data-name="Button">
      <Svg10 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Container94 />
      <Button10 />
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[23.02px]" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[20px] whitespace-pre">5.</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start justify-start overflow-auto pl-0 pr-[679.06px] py-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-800">
        <p className="leading-[normal] whitespace-pre">매우 부족</p>
      </div>
    </div>
  );
}

function Input10() {
  return (
    <div className="basis-0 bg-white grow h-9 min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Input">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex h-9 items-start justify-start pb-[9.66px] pt-[9.67px] px-[12.667px] relative w-full">
          <Container97 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container98() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container96 />
      <Input10 />
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="box-border content-stretch flex h-8 items-center justify-center px-2.5 py-0 relative rounded-[4px] shrink-0" data-name="Button">
      <Svg11 />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Container98 />
      <Button11 />
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[23.02px]" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[20px] whitespace-pre">6.</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute bottom-[9.66px] box-border content-stretch flex flex-col items-start justify-start left-[12.66px] overflow-clip pl-0 pr-[601.62px] py-0 top-[9.67px]" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">새 선택지를 입력하세요</p>
      </div>
    </div>
  );
}

function Container102() {
  return <div className="absolute bottom-[9.66px] left-[12.66px] top-[9.67px] w-[729.65px]" data-name="Container" />;
}

function Input11() {
  return (
    <div className="basis-0 bg-white grow h-9 min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Input">
      <div className="h-9 overflow-clip relative w-full">
        <Container101 />
        <Container102 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container103() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container100 />
      <Input11 />
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #1E293B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #1E293B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-white box-border content-stretch flex h-8 items-center justify-center opacity-50 px-[10.667px] py-[0.667px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Svg12 />
    </div>
  );
}

function Container104() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-start pb-0 pt-2 px-0 relative shrink-0 w-full" data-name="Container">
      <Container103 />
      <Button12 />
    </div>
  );
}

function Container105() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-1 py-0 relative w-full">
          <Container83 />
          <Container87 />
          <Container91 />
          <Container95 />
          <Container99 />
          <Container104 />
        </div>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[24px] relative w-full">
          <Frame1321320953 />
          <Container105 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder12() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-9 items-start justify-start p-[24px] relative w-full">
          <Container77 />
          <Button13 />
        </div>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col gap-[24.01px] items-start justify-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder11 />
      <BackgroundBorder12 />
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M8 6.66667V10.6667" id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 8.66667H10" id="Vector_2" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f315b00} id="Vector_3" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-zinc-100 box-border content-stretch flex gap-2 items-center justify-center px-6 py-3 relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Svg13 />
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-zinc-900">
        <p className="leading-[20px] whitespace-pre">섹션 추가</p>
      </div>
    </div>
  );
}

function Svg14() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-zinc-100 box-border content-stretch flex gap-2 items-center justify-center px-6 py-3 relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Svg14 />
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-zinc-900">
        <p className="leading-[20px] whitespace-pre">문항 추가</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="box-border content-stretch flex gap-[11.99px] items-start justify-center pb-0 pt-4 px-0 relative shrink-0 w-full" data-name="Container">
      <Button14 />
      <Button15 />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col gap-8 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container106 />
      <Container107 />
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col gap-[47.99px] items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container108 />
    </div>
  );
}

function Main() {
  return (
    <div className="basis-0 grow h-[1928px] min-h-px min-w-px relative shrink-0" data-name="Main">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col h-[1928px] items-start justify-start pl-0 pr-6 py-0 relative w-full">
          <Container109 />
        </div>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">설문 구조</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-slate-50 box-border content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-slate-600">
        <p className="leading-[16px] whitespace-pre">2개 문항</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Background />
    </div>
  );
}

function Svg15() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p3dcf1000} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[20px] whitespace-pre">객관식</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="Container">
      <Svg15 />
      <Container111 />
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[20px] whitespace-pre">1개</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-0 pr-2 py-0 relative w-full">
          <Container112 />
          <Container113 />
        </div>
      </div>
    </div>
  );
}

function Svg16() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p17f48400} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[20px] whitespace-pre">등급형</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="Container">
      <Svg16 />
      <Container115 />
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[20px] whitespace-pre">1개</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-0 pr-2 py-0 relative w-full">
          <Container116 />
          <Container117 />
        </div>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container114 />
      <Container118 />
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-slate-500 w-full">
        <p className="leading-[16px]">섹션 관리</p>
      </div>
    </div>
  );
}

function Svg17() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M8 6.66667V10.6667" id="Vector" stroke="var(--stroke-0, #1E293B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 8.66667H10" id="Vector_2" stroke="var(--stroke-0, #1E293B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f315b00} id="Vector_3" stroke="var(--stroke-0, #1E293B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-white h-8 relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-dashed border-slate-200 inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2 h-8 items-center justify-center px-[11px] py-px relative w-full">
          <Svg17 />
          <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-slate-800">
            <p className="leading-[20px] whitespace-pre">섹션 추가</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container120 />
      <Button16 />
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-slate-500 w-full">
        <p className="leading-[16px]">문항 추가</p>
      </div>
    </div>
  );
}

function Svg18() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p3dcf1000} id="Vector" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex flex-col items-center justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1447e6] text-[12px] text-center text-nowrap">
        <p className="leading-[16px] whitespace-pre">객관식</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="basis-0 bg-blue-50 grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center pl-[29.59px] pr-[29.61px] py-2 relative w-full">
          <Svg18 />
          <Container123 />
        </div>
      </div>
    </div>
  );
}

function Svg19() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col items-center justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#008236] text-[12px] text-center text-nowrap">
        <p className="leading-[16px] whitespace-pre">주관식</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="basis-0 bg-green-50 grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center pl-[29.59px] pr-[29.61px] py-2 relative w-full">
          <Svg19 />
          <Container124 />
        </div>
      </div>
    </div>
  );
}

function Svg20() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p17f48400} id="Vector" stroke="var(--stroke-0, #8200DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex flex-col items-center justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8200db] text-[12px] text-center text-nowrap">
        <p className="leading-[16px] whitespace-pre">등급형</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="basis-0 bg-purple-50 grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center pl-[29.61px] pr-[29.6px] py-2 relative w-full">
          <Svg20 />
          <Container125 />
        </div>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Button17 />
      <Button18 />
      <Button19 />
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container122 />
      <Container126 />
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container121 />
      <Container127 />
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <Container110 />
      <Container119 />
      <Container128 />
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="bg-[#fdfdfd] box-border content-stretch flex flex-col gap-6 items-start justify-start p-[24px] relative rounded-[8px] shrink-0 w-80" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border border-[#f1f1f1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <BackgroundHorizontalBorder />
    </div>
  );
}

function Heading9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center relative shrink-0 text-[#101828] text-[16px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">전체 문항</p>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center min-w-full relative shrink-0 text-[12px] text-slate-500" style={{ width: "min-content" }}>
        <p className="leading-[16px]">문항을 드래그하여 순서를 변경하세요</p>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading9 />
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start pb-4 pt-0 px-0 relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container129 />
    </div>
  );
}

function Svg21() {
  return (
    <div className="relative shrink-0 size-3" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.p295e8380} id="Vector" stroke="var(--stroke-0, #6E11B0)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-purple-100 box-border content-stretch flex items-center justify-center overflow-clip px-[7px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background">
      <Svg21 />
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="Container">
      <Background1 />
    </div>
  );
}

function Container131() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-slate-800 w-full">
        <p className="leading-[20px]">1. 문항명</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container130 />
      <Container131 />
    </div>
  );
}

function Svg22() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1c949200} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pd12ce00} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p226ad00} id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1e9aa900} id="Vector_4" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p12fdd280} id="Vector_5" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3be7b040} id="Vector_6" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0" data-name="Margin">
      <Svg22 />
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Container132 />
      <Margin3 />
    </div>
  );
}

function BackgroundBorder13() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[13px] relative w-full">
          <Container133 />
        </div>
      </div>
    </div>
  );
}

function Svg23() {
  return (
    <div className="relative shrink-0 size-3" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.p295e8380} id="Vector" stroke="var(--stroke-0, #6E11B0)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-purple-100 box-border content-stretch flex items-center justify-center overflow-clip px-[7px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background">
      <Svg23 />
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="Container">
      <Background2 />
    </div>
  );
}

function Container135() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-slate-800 w-full">
        <p className="leading-[20px]">2. 문항명</p>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container134 />
      <Container135 />
    </div>
  );
}

function Svg24() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1c949200} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pd12ce00} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p226ad00} id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1e9aa900} id="Vector_4" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p12fdd280} id="Vector_5" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3be7b040} id="Vector_6" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Margin4() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0" data-name="Margin">
      <Svg24 />
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Container136 />
      <Margin4 />
    </div>
  );
}

function BackgroundBorder14() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[13px] relative w-full">
          <Container137 />
        </div>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder13 />
      <BackgroundBorder14 />
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container138 />
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="Container">
      <Container139 />
    </div>
  );
}

function BackgroundVerticalBorder1() {
  return (
    <div className="bg-[#fdfdfd] box-border content-stretch flex flex-col gap-6 h-[762px] items-start justify-start p-[24px] relative rounded-[8px] shrink-0 w-80" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border border-[#f1f1f1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <BackgroundHorizontalBorder1 />
      <Container140 />
    </div>
  );
}

function Frame1321320939() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-center relative shrink-0">
      <BackgroundVerticalBorder />
      <BackgroundVerticalBorder1 />
    </div>
  );
}

function Container141() {
  return (
    <div className="content-stretch flex h-[1095px] items-start justify-start max-w-[1280px] relative shrink-0 w-[1280px]" data-name="Container">
      <Main />
      <Frame1321320939 />
    </div>
  );
}

function Container142() {
  return (
    <div className="box-border content-stretch flex flex-col gap-16 items-start justify-start pb-0 pt-16 px-0 relative shrink-0 w-[1280px]" data-name="Container">
      <Container2 />
      <Container141 />
    </div>
  );
}

function Container143() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col items-center overflow-auto relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-[328px] py-0 relative size-full">
          <Container142 />
        </div>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-white content-stretch flex h-[2263px] items-start justify-start left-0 right-0 top-0" data-name="Background">
      <Container />
      <Container143 />
    </div>
  );
}

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

function Svg25() {
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

function Button20() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-8" data-name="Button">
      <Svg25 />
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Frame236 />
      <Button20 />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[24px] relative w-full">
          <Container144 />
        </div>
      </div>
    </div>
  );
}

function Svg26() {
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

function Container145() {
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
          <Svg26 />
          <Container145 />
        </div>
      </div>
    </div>
  );
}

function Svg27() {
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

function Container146() {
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
          <Svg27 />
          <Container146 />
        </div>
      </div>
    </div>
  );
}

function Svg28() {
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

function Container147() {
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
          <Svg28 />
          <Container147 />
        </div>
      </div>
    </div>
  );
}

function Svg29() {
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

function Container148() {
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
          <Svg29 />
          <Container148 />
        </div>
      </div>
    </div>
  );
}

function Svg30() {
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

function Container149() {
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
          <Svg30 />
          <Container149 />
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

function Container150() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-auto relative shrink-0 w-full" data-name="Container">
      <List />
    </div>
  );
}

function Background4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Background">
      <HorizontalBorder />
      <Container150 />
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="absolute box-border content-stretch flex h-[1200px] items-start justify-center left-0 pl-0 pr-px py-0 top-0 w-64" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-slate-300 border-solid inset-0 pointer-events-none" />
      <Background4 />
    </div>
  );
}

export default function Component1920WDefault() {
  return (
    <div className="bg-white relative size-full" data-name="1920w default">
      <VerticalBorder />
      <Background3 />
    </div>
  );
}