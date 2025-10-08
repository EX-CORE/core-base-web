import svgPaths from "./svg-74e9h6c03y";

function PrimitiveH2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[451.641px]" data-name="Primitive.h2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[451.641px]">
        <div className="absolute font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold leading-[0] left-0 text-[#0f172b] text-[20px] text-nowrap top-0">
          <p className="leading-[28px] whitespace-pre">평가자 직접 선택</p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveP() {
  return (
    <div className="h-[20px] relative shrink-0 w-[451.641px]" data-name="Primitive.p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[451.641px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#62748e] text-[14px] text-nowrap top-0">
          <p className="leading-[20px] whitespace-pre">피평가자와 피평가자를 각각 선택해 주세요.</p>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, #1E293B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, #1E293B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function DialogContent() {
  return (
    <div className="absolute left-[-1px] overflow-clip size-px top-[15px]" data-name="DialogContent">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[16px] text-nowrap text-slate-800 top-[-1px]">
        <p className="leading-[24px] whitespace-pre">Close</p>
      </div>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="absolute opacity-70 right-0 rounded-[2px] size-[16px] top-0" data-name="Primitive.button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative size-[16px]">
        <Icon />
        <DialogContent />
      </div>
    </div>
  );
}

function EvaluatorMappingModal() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="EvaluatorMappingModal">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[52px] items-start relative w-full">
        <PrimitiveH2 />
        <PrimitiveP />
        <PrimitiveButton />
      </div>
    </div>
  );
}

function DialogHeader() {
  return (
    <div className="box-border content-stretch flex flex-col h-[69px] items-start pb-px pt-0 px-0 relative shrink-0 w-full" data-name="DialogHeader">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <EvaluatorMappingModal />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center left-[43.38px] top-[2px] w-[8.797px]" data-name="Text">
      <div className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#0f172b] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[20px] relative shrink-0 w-[100.203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[100.203px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#45556c] text-[14px] text-nowrap top-0">
          <p className="leading-[20px] whitespace-pre">진행률:</p>
        </div>
        <Text />
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-[52px] text-[#45556c] text-[14px] top-0 w-[49px]">
          <p className="leading-[20px]">/ 3 완료</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return <div className="bg-blue-800 h-[8px] rounded-[3.35544e+07px] shrink-0 w-[64px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="bg-slate-200 h-[8px] relative rounded-[3.35544e+07px] shrink-0 w-[128px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[8px] items-start pl-0 pr-[128px] py-0 relative w-[128px]">
        <Container1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container2 />
    </div>
  );
}

function EvaluatorMappingModal1() {
  return (
    <div className="bg-slate-50 h-[45px] relative shrink-0 w-full" data-name="EvaluatorMappingModal">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col h-[45px] items-start pb-px pt-[12px] px-[24px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[86.875px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[86.875px]">
        <div className="absolute font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[0] left-0 text-[#0f172b] text-[16px] text-nowrap top-[-1px]">
          <p className="leading-[24px] whitespace-pre">피평가자 목록</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.344px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[36.344px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#62748e] text-[14px] top-0 w-[37px]">
          <p className="leading-[20px]">총 3명</p>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Paragraph />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-white h-[36px] left-0 rounded-[4px] top-0 w-[195px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip pl-[40px] pr-[12px] py-[4px] relative w-[195px]">
        <div className="font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
          <p className="leading-[normal] whitespace-pre">이름, 부서, 직급으로 검색...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 14L11.1066 11.1067" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Input />
      <Icon1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-[72px] items-start relative w-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[25px] relative shrink-0 w-full" data-name="Heading 4">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-slate-500 top-0 w-[71px]">
        <p className="leading-[20px]">개발팀 (2명)</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[0] left-0 text-[14px] text-blue-800 text-nowrap top-0">
          <p className="leading-[20px] whitespace-pre">홍길동</p>
        </div>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-slate-50 h-[22px] relative rounded-[4px] shrink-0 w-[38.75px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative w-[38.75px]">
        <div className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[12px] text-nowrap text-slate-600">
          <p className="leading-[16px] whitespace-pre">주임</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Badge />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-slate-500 top-0 w-[157px]">
        <p className="leading-[16px]">hong.gildong@company.com</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container7 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="basis-0 bg-slate-100 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-[35.922px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip px-[9px] py-[3px] relative w-[35.922px]">
        <div className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#45556c] text-[12px] text-nowrap">
          <p className="leading-[16px] whitespace-pre">0명</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[54.078px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[54.078px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#90a1b9] text-[12px] top-0 w-[55px]">
          <p className="leading-[16px]">1-3명 필요</p>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[42px] relative shrink-0 w-[54.078px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[42px] items-end relative w-[54.078px]">
        <Badge1 />
        <Text1 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[rgba(30,64,175,0.1)] h-[68px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-blue-800 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[68px] items-center px-[13px] py-px relative w-full">
          <Container8 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">김철수</p>
        </div>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-slate-50 h-[22px] relative rounded-[4px] shrink-0 w-[38.75px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative w-[38.75px]">
        <div className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[12px] text-nowrap text-slate-600">
          <p className="leading-[16px] whitespace-pre">사원</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph3 />
      <Badge2 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-slate-500 top-0 w-[143px]">
        <p className="leading-[16px]">kim.chulsu@company.com</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container11 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="basis-0 bg-slate-100 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-[35.922px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip px-[9px] py-[3px] relative w-[35.922px]">
        <div className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#45556c] text-[12px] text-nowrap">
          <p className="leading-[16px] whitespace-pre">0명</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[54.078px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[54.078px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#90a1b9] text-[12px] top-0 w-[55px]">
          <p className="leading-[16px]">1-3명 필요</p>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[42px] relative shrink-0 w-[54.078px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[42px] items-end relative w-[54.078px]">
        <Badge3 />
        <Text2 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[68px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[68px] items-center px-[13px] py-px relative w-full">
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[140px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[173px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Container15 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[25px] relative shrink-0 w-full" data-name="Heading 4">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-slate-500 top-0 w-[71px]">
        <p className="leading-[20px]">기획팀 (1명)</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">이영희</p>
        </div>
      </div>
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-slate-50 h-[22px] relative rounded-[4px] shrink-0 w-[38.75px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative w-[38.75px]">
        <div className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[12px] text-nowrap text-slate-600">
          <p className="leading-[16px] whitespace-pre">대리</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph5 />
      <Badge4 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-slate-500 top-0 w-[159px]">
        <p className="leading-[16px]">lee.younghee@company.com</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container17 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Badge5() {
  return (
    <div className="basis-0 bg-slate-100 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-[35.922px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip px-[9px] py-[3px] relative w-[35.922px]">
        <div className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#45556c] text-[12px] text-nowrap">
          <p className="leading-[16px] whitespace-pre">0명</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[54.078px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[54.078px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#90a1b9] text-[12px] top-0 w-[55px]">
          <p className="leading-[16px]">1-3명 필요</p>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[42px] relative shrink-0 w-[54.078px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[42px] items-end relative w-[54.078px]">
        <Badge5 />
        <Text3 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[68px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[68px] items-center px-[13px] py-px relative w-full">
          <Container18 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[101px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container20 />
    </div>
  );
}

function EvaluatorMappingModal2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[290px] items-start relative shrink-0 w-full" data-name="EvaluatorMappingModal">
      <Container16 />
      <Container21 />
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Primitive.div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip relative size-full">
        <EvaluatorMappingModal2 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-[524.594px] items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container6 />
      <PrimitiveDiv />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Heading 3">
      <div className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#0f172b] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">홍길동</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Paragraph">
      <div className="font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#62748e] text-[14px] w-[72px]">
        <p className="leading-[20px]">개발팀 · 주임</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-[257.031px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center relative w-[257.031px]">
        <Heading6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Badge6() {
  return (
    <div className="bg-slate-50 h-[22px] relative rounded-[4px] shrink-0 w-[69.969px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative w-[69.969px]">
        <div className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[12px] text-nowrap text-slate-600">
          <p className="leading-[16px] whitespace-pre">0/0 명 선택됨</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Badge6 />
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-white h-[36px] left-0 rounded-[4px] top-0" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip pl-[40px] pr-[12px] py-[4px] relative">
        <div className="font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
          <p className="leading-[normal] whitespace-pre">이름, 부서, 직급으로 검색...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 14L11.1066 11.1067" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Input1 />
      <Icon2 />
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[25px] relative shrink-0 w-full" data-name="Heading 4">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-slate-500 top-0 w-[71px]">
        <p className="leading-[20px]">개발팀 (3명)</p>
      </div>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">김영수</p>
        </div>
      </div>
    </div>
  );
}

function Badge7() {
  return (
    <div className="bg-slate-50 h-[22px] relative rounded-[4px] shrink-0 w-[38.75px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative w-[38.75px]">
        <div className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[12px] text-nowrap text-slate-600">
          <p className="leading-[16px] whitespace-pre">팀장</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph8 />
      <Badge7 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">kim.youngsu@company.com</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container27 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton1 />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">이민정</p>
        </div>
      </div>
    </div>
  );
}

function Badge8() {
  return (
    <div className="bg-slate-50 h-[22px] relative rounded-[4px] shrink-0 w-[38.75px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative w-[38.75px]">
        <div className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[12px] text-nowrap text-slate-600">
          <p className="leading-[16px] whitespace-pre">선임</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph10 />
      <Badge8 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">lee.minjeong@company.com</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container30 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton2 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">박준호</p>
        </div>
      </div>
    </div>
  );
}

function Badge9() {
  return (
    <div className="bg-slate-50 h-[22px] relative rounded-[4px] shrink-0 w-[38.75px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative w-[38.75px]">
        <div className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[12px] text-nowrap text-slate-600">
          <p className="leading-[16px] whitespace-pre">책임</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph12 />
      <Badge9 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">park.junho@company.com</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container33 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton3 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[194px] items-start relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container32 />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[227px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Container36 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[25px] relative shrink-0 w-full" data-name="Heading 4">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-slate-500 top-0 w-[71px]">
        <p className="leading-[20px]">기획팀 (2명)</p>
      </div>
    </div>
  );
}

function PrimitiveButton4() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">최수영</p>
        </div>
      </div>
    </div>
  );
}

function Badge10() {
  return (
    <div className="bg-slate-50 h-[22px] relative rounded-[4px] shrink-0 w-[38.75px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative w-[38.75px]">
        <div className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[12px] text-nowrap text-slate-600">
          <p className="leading-[16px] whitespace-pre">팀장</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph14 />
      <Badge10 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">choi.suyoung@company.com</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container38 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton4 />
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton5() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">한지원</p>
        </div>
      </div>
    </div>
  );
}

function Badge11() {
  return (
    <div className="bg-slate-50 h-[22px] relative rounded-[4px] shrink-0 w-[38.75px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative w-[38.75px]">
        <div className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[12px] text-nowrap text-slate-600">
          <p className="leading-[16px] whitespace-pre">선임</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph16 />
      <Badge11 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">han.jiwon@company.com</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container41 />
        <Paragraph17 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton5 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[128px] items-start relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[161px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Container44 />
    </div>
  );
}

function EvaluatorMappingModal3() {
  return (
    <div className="h-[404px] relative shrink-0 w-full" data-name="EvaluatorMappingModal">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[404px] items-start pl-0 pr-[8px] py-0 relative w-full">
          <Container37 />
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveDiv1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Primitive.div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip relative size-full">
        <EvaluatorMappingModal3 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-[524.594px] items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container26 />
      <PrimitiveDiv1 />
    </div>
  );
}

function Container47() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <div className="flex h-full items-center justify-center relative shrink-0" style={{ "--transform-inner-width": "524.59375", "--transform-inner-height": "524.59375", width: "calc(1px * ((var(--transform-inner-height) * 1) + (var(--transform-inner-width) * 0)))" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[90deg]">
          <div className="h-full relative w-[524.594px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 525 1">
                <line id="Line 5" stroke="var(--stroke-0, #E2E8F0)" x2="524.594" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Container46 />
    </div>
  );
}

function EvaluatorMappingModal4() {
  return (
    <div className="h-[548.594px] relative shrink-0 w-full" data-name="EvaluatorMappingModal">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col h-[548.594px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <div className="font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#e17100] text-[14px] text-nowrap">
          <p className="leading-[20px] whitespace-pre">3명의 피평가자에 대한 평가자 선택이 완료되지 않았습니다.</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-[58.203px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[17px] py-[9px] relative w-[58.203px]">
        <div className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-800">
          <p className="leading-[20px] whitespace-pre">이전</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-blue-800 grow h-[36px] min-h-px min-w-px opacity-50 relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[24px] py-[8px] relative w-full">
          <div className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-white">
            <p className="leading-[20px] whitespace-pre">리뷰 시작하기</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[36px] relative shrink-0 w-[194.219px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[36px] items-center relative w-[194.219px]">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function EvaluatorMappingModal5() {
  return (
    <div className="h-[89px] relative shrink-0 w-full" data-name="EvaluatorMappingModal">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex h-[89px] items-center justify-between pb-0 pt-px px-[24px] relative w-full">
          <Text4 />
          <Container48 />
        </div>
      </div>
    </div>
  );
}

function ModalContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Modal Container">
      <DialogHeader />
      <EvaluatorMappingModal1 />
      <EvaluatorMappingModal4 />
      <EvaluatorMappingModal5 />
    </div>
  );
}

export default function PrimitiveDiv2() {
  return (
    <div className="bg-white relative rounded-[6px] size-full" data-name="Primitive.div">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start overflow-clip px-[25px] py-[17px] relative size-full">
          <ModalContainer />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}