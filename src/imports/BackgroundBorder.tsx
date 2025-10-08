import svgPaths from "./svg-to3lsz23fy";

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

function Container() {
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

function Container1() {
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

function Container2() {
  return (
    <div className="content-stretch flex items-start justify-start overflow-clip relative shrink-0" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function Frame1321320933() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <Container1 />
      <Container2 />
      <Container1 />
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

function Container4() {
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
        <Container4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="Container">
      <Label />
      <Input />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-800">
        <p className="leading-[14px] whitespace-pre">등급형 문항 설정</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">{` 모든 등급형 문항에 동일한 기준이 적용됩니다.`}</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0" data-name="Container">
      <Container7 />
      <Container8 />
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
      <Container9 />
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

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">매우 부족</p>
      </div>
    </div>
  );
}

function Container11() {
  return <div className="h-5 shrink-0 w-[19px]" data-name="Container" />;
}

function BackgroundBorder() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[8.67px] pr-[8.66px] py-[8.667px] relative w-full">
          <Container10 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
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
      <Container12 />
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

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Frame1321320935 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">부족</p>
      </div>
    </div>
  );
}

function Container15() {
  return <div className="h-5 shrink-0 w-[19px]" data-name="Container" />;
}

function BackgroundBorder2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[8.67px] pr-[8.66px] py-[8.667px] relative w-full">
          <Container14 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
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
      <Container16 />
    </div>
  );
}

function Frame1321320939() {
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

function Frame1321320940() {
  return (
    <div className="basis-0 content-stretch flex gap-6 grow items-center justify-start min-h-px min-w-px relative shrink-0">
      <BackgroundBorder2 />
      <Frame1321320939 />
      <IconX1 />
    </div>
  );
}

function Frame1321320941() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-4 items-center justify-start pl-4 pr-0 py-0 relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-right w-3">
            <p className="leading-[20px]">2</p>
          </div>
          <Frame1321320940 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Frame1321320941 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">보통</p>
      </div>
    </div>
  );
}

function Container19() {
  return <div className="h-5 shrink-0 w-[19px]" data-name="Container" />;
}

function BackgroundBorder4() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[8.67px] pr-[8.66px] py-[8.667px] relative w-full">
          <Container18 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
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
      <Container20 />
    </div>
  );
}

function Frame1321320942() {
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

function Frame1321320943() {
  return (
    <div className="basis-0 content-stretch flex gap-6 grow items-center justify-start min-h-px min-w-px relative shrink-0">
      <BackgroundBorder4 />
      <Frame1321320942 />
      <IconX2 />
    </div>
  );
}

function Frame1321320944() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-4 items-center justify-start pl-4 pr-0 py-0 relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-right w-3">
            <p className="leading-[20px]">3</p>
          </div>
          <Frame1321320943 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Frame1321320944 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">좋음</p>
      </div>
    </div>
  );
}

function Container23() {
  return <div className="h-5 shrink-0 w-[19px]" data-name="Container" />;
}

function BackgroundBorder6() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[8.67px] pr-[8.66px] py-[8.667px] relative w-full">
          <Container22 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
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
      <Container24 />
    </div>
  );
}

function Frame1321320945() {
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

function Frame1321320946() {
  return (
    <div className="basis-0 content-stretch flex gap-6 grow items-center justify-start min-h-px min-w-px relative shrink-0">
      <BackgroundBorder6 />
      <Frame1321320945 />
      <IconX3 />
    </div>
  );
}

function Frame1321320947() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-4 items-center justify-start pl-4 pr-0 py-0 relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-right w-3">
            <p className="leading-[20px]">4</p>
          </div>
          <Frame1321320946 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Frame1321320947 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">매우 좋음</p>
      </div>
    </div>
  );
}

function Container27() {
  return <div className="h-5 shrink-0 w-[19px]" data-name="Container" />;
}

function BackgroundBorder8() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[8.67px] pr-[8.66px] py-[8.667px] relative w-full">
          <Container26 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
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
      <Container28 />
    </div>
  );
}

function Frame1321320948() {
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

function Frame1321320949() {
  return (
    <div className="basis-0 content-stretch flex gap-6 grow items-center justify-start min-h-px min-w-px relative shrink-0">
      <BackgroundBorder8 />
      <Frame1321320948 />
      <IconX4 />
    </div>
  );
}

function Frame1321320950() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-4 items-center justify-start pl-4 pr-0 py-0 relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-right w-3">
            <p className="leading-[20px]">5</p>
          </div>
          <Frame1321320949 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Frame1321320950 />
    </div>
  );
}

function Frame1321320938() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full">
      <Container13 />
      <Container17 />
      <Container21 />
      <Container25 />
      <Container29 />
    </div>
  );
}

function Button() {
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

export default function BackgroundBorder10() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f1f1f1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[24px] relative size-full">
          <Container6 />
          <Button />
        </div>
      </div>
    </div>
  );
}