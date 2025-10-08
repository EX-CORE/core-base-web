import svgPaths from "./svg-9asqo7lgff";

function PrimitiveButton() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.922px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[51.922px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">전체 선택</p>
        </div>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="basis-0 grow h-[22px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center px-[9px] py-[3px] relative w-full">
          <div className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[12px] text-nowrap text-slate-800">
            <p className="leading-[16px] whitespace-pre">0명 선택됨</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[22px] relative shrink-0 w-[161.891px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[22px] items-center relative w-[161.891px]">
        <PrimitiveButton />
        <Label />
        <Badge />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-[44.938px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[44.938px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-slate-500 top-0 w-[45px]">
          <p className="leading-[20px]">총 15명</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex h-[22px] items-center justify-between left-[24px] top-[68px] w-[462px]" data-name="Container">
      <Container />
      <Paragraph />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-white h-[36px] left-0 rounded-[4px] top-0 w-[462px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip pl-[40px] pr-[12px] py-[4px] relative w-[462px]">
        <div className="font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
          <p className="leading-[normal] whitespace-pre">이름, 부서, 직급으로 검색...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 14L11.1066 11.1067" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[36px] left-[24px] top-[16px] w-[462px]" data-name="Container">
      <Input />
      <Icon />
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

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">김민수</p>
        </div>
      </div>
    </div>
  );
}

function Badge1() {
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

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Badge1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">kim.minsu@company.com</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container3 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton1 />
          <Container4 />
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

function Paragraph3() {
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

function Badge2() {
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

function Container6() {
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
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">lee.younghee@company.com</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container6 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton2 />
          <Container7 />
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

function Paragraph5() {
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

function Badge3() {
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

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph5 />
      <Badge3 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">park.junho@company.com</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container9 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton3 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[194px] items-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container8 />
      <Container11 />
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

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">안소희</p>
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
          <p className="leading-[16px] whitespace-pre">팀장</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph7 />
      <Badge4 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">an.sohee@company.com</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container13 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton4 />
          <Container14 />
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

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">최수진</p>
        </div>
      </div>
    </div>
  );
}

function Badge5() {
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

function Container16() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph9 />
      <Badge5 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">choi.sujin@company.com</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container16 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton5 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton6() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">정현우</p>
        </div>
      </div>
    </div>
  );
}

function Badge6() {
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

function Container19() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph11 />
      <Badge6 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">jung.hyunwoo@company.com</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container19 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton6 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[128px] items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container21 />
    </div>
  );
}

function PrimitiveButton7() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">강미영</p>
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

function Container23() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph13 />
      <Badge7 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">kang.miyoung@company.com</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container23 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton7 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton8() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">윤서준</p>
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
          <p className="leading-[16px] whitespace-pre">주임</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph15 />
      <Badge8 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">yoon.seojun@company.com</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container26 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton8 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[128px] items-start relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container28 />
    </div>
  );
}

function PrimitiveButton9() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">오세영</p>
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
          <p className="leading-[16px] whitespace-pre">팀장</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph17 />
      <Badge9 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">oh.seyoung@company.com</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container30 />
        <Paragraph18 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton9 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton10() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">송민지</p>
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
          <p className="leading-[16px] whitespace-pre">선임</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph19 />
      <Badge10 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">song.minji@company.com</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container33 />
        <Paragraph20 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton10 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton11() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">배현수</p>
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
          <p className="leading-[16px] whitespace-pre">주임</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph21 />
      <Badge11 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">bae.hyunsu@company.com</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container36 />
        <Paragraph22 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton11 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[194px] items-start relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container35 />
      <Container38 />
    </div>
  );
}

function PrimitiveButton12() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">임도현</p>
        </div>
      </div>
    </div>
  );
}

function Badge12() {
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

function Container40() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph23 />
      <Badge12 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">lim.dohyun@company.com</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container40 />
        <Paragraph24 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton12 />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton13() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">한지우</p>
        </div>
      </div>
    </div>
  );
}

function Badge13() {
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

function Container43() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph25 />
      <Badge13 />
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">han.jiwoo@company.com</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container43 />
        <Paragraph26 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton13 />
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[128px] items-start relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container45 />
    </div>
  );
}

function PrimitiveButton14() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">조은서</p>
        </div>
      </div>
    </div>
  );
}

function Badge14() {
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

function Container47() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph27 />
      <Badge14 />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">cho.eunseo@company.com</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container47 />
        <Paragraph28 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton14 />
          <Container48 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton15() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">신재현</p>
        </div>
      </div>
    </div>
  );
}

function Badge15() {
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

function Container50() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph29 />
      <Badge15 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">shin.jaehyun@company.com</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container50 />
        <Paragraph30 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton15 />
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[128px] items-start relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container52 />
    </div>
  );
}

function EmployeeSelectionModal() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[49px] h-[1289px] items-start left-0 pb-0 pl-0 pr-[8px] pt-[33px] top-0 w-[446px]" data-name="EmployeeSelectionModal">
      <Container12 />
      <Container15 />
      <Container22 />
      <Container29 />
      <Container39 />
      <Container46 />
      <Container53 />
    </div>
  );
}

function EmployeeSelectionModal1() {
  return (
    <div className="absolute bg-white h-[25px] left-0 top-0 w-[438px]" data-name="EmployeeSelectionModal">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-slate-500 top-0 w-[71px]">
        <p className="leading-[20px]">개발팀 (3명)</p>
      </div>
    </div>
  );
}

function EmployeeSelectionModal2() {
  return (
    <div className="absolute bg-white h-[25px] left-0 top-[243px] w-[438px]" data-name="EmployeeSelectionModal">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-slate-500 top-0 w-[71px]">
        <p className="leading-[20px]">기획팀 (1명)</p>
      </div>
    </div>
  );
}

function EmployeeSelectionModal3() {
  return (
    <div className="absolute bg-white h-[25px] left-0 top-[354px] w-[438px]" data-name="EmployeeSelectionModal">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-slate-500 top-0 w-[83px]">
        <p className="leading-[20px]">디자인팀 (2명)</p>
      </div>
    </div>
  );
}

function EmployeeSelectionModal4() {
  return (
    <div className="absolute bg-white h-[25px] left-0 top-[531px] w-[438px]" data-name="EmployeeSelectionModal">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-slate-500 top-0 w-[83px]">
        <p className="leading-[20px]">마케팅팀 (2명)</p>
      </div>
    </div>
  );
}

function EmployeeSelectionModal5() {
  return (
    <div className="absolute bg-white h-[25px] left-0 top-[708px] w-[438px]" data-name="EmployeeSelectionModal">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-slate-500 top-0 w-[71px]">
        <p className="leading-[20px]">영업팀 (3명)</p>
      </div>
    </div>
  );
}

function EmployeeSelectionModal6() {
  return (
    <div className="absolute bg-white h-[25px] left-0 top-[951px] w-[438px]" data-name="EmployeeSelectionModal">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-slate-500 top-0 w-[71px]">
        <p className="leading-[20px]">인사팀 (2명)</p>
      </div>
    </div>
  );
}

function EmployeeSelectionModal7() {
  return (
    <div className="absolute bg-white h-[25px] left-0 top-[1128px] w-[438px]" data-name="EmployeeSelectionModal">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-slate-500 top-0 w-[71px]">
        <p className="leading-[20px]">재무팀 (2명)</p>
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="absolute h-[449.188px] left-[24px] overflow-clip top-[106px] w-[446px]" data-name="Primitive.div">
      <EmployeeSelectionModal />
      <EmployeeSelectionModal1 />
      <EmployeeSelectionModal2 />
      <EmployeeSelectionModal3 />
      <EmployeeSelectionModal4 />
      <EmployeeSelectionModal5 />
      <EmployeeSelectionModal6 />
      <EmployeeSelectionModal7 />
    </div>
  );
}

function EmployeeSelectionModal8() {
  return (
    <div className="absolute bg-white h-[571.188px] left-0 top-0 w-[510px]" data-name="EmployeeSelectionModal">
      <Container1 />
      <Container2 />
      <PrimitiveDiv />
    </div>
  );
}

function PrimitiveButton16() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.922px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[51.922px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">전체 선택</p>
        </div>
      </div>
    </div>
  );
}

function Badge16() {
  return (
    <div className="basis-0 grow h-[22px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center px-[9px] py-[3px] relative w-full">
          <div className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[12px] text-nowrap text-slate-800">
            <p className="leading-[16px] whitespace-pre">0명 선택됨</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[22px] relative shrink-0 w-[161.891px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[22px] items-center relative w-[161.891px]">
        <PrimitiveButton16 />
        <Label1 />
        <Badge16 />
      </div>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[20px] relative shrink-0 w-[44.938px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[44.938px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-slate-500 top-0 w-[45px]">
          <p className="leading-[20px]">총 15명</p>
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex h-[22px] items-center justify-between left-[24px] top-[68px] w-[462px]" data-name="Container">
      <Container54 />
      <Paragraph31 />
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-white h-[36px] left-0 rounded-[4px] top-0 w-[462px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip pl-[40px] pr-[12px] py-[4px] relative w-[462px]">
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
          <path d="M14 14L11.1066 11.1067" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[36px] left-[24px] top-[16px] w-[462px]" data-name="Container">
      <Input1 />
      <Icon1 />
    </div>
  );
}

function PrimitiveButton17() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">김민수</p>
        </div>
      </div>
    </div>
  );
}

function Badge17() {
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

function Container57() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph32 />
      <Badge17 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">kim.minsu@company.com</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container57 />
        <Paragraph33 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton17 />
          <Container58 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton18() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph34() {
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

function Badge18() {
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

function Container60() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph34 />
      <Badge18 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">lee.younghee@company.com</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container60 />
        <Paragraph35 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton18 />
          <Container61 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton19() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph36() {
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

function Badge19() {
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

function Container63() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph36 />
      <Badge19 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">park.junho@company.com</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container63 />
        <Paragraph37 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton19 />
          <Container64 />
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[194px] items-start relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Container62 />
      <Container65 />
    </div>
  );
}

function PrimitiveButton20() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">안소희</p>
        </div>
      </div>
    </div>
  );
}

function Badge20() {
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

function Container67() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph38 />
      <Badge20 />
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">an.sohee@company.com</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container67 />
        <Paragraph39 />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton20 />
          <Container68 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton21() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">최수진</p>
        </div>
      </div>
    </div>
  );
}

function Badge21() {
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

function Container70() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph40 />
      <Badge21 />
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">choi.sujin@company.com</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container70 />
        <Paragraph41 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton21 />
          <Container71 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton22() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">정현우</p>
        </div>
      </div>
    </div>
  );
}

function Badge22() {
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

function Container73() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph42 />
      <Badge22 />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">jung.hyunwoo@company.com</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container73 />
        <Paragraph43 />
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton22 />
          <Container74 />
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[128px] items-start relative shrink-0 w-full" data-name="Container">
      <Container72 />
      <Container75 />
    </div>
  );
}

function PrimitiveButton23() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">강미영</p>
        </div>
      </div>
    </div>
  );
}

function Badge23() {
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

function Container77() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph44 />
      <Badge23 />
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">kang.miyoung@company.com</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container77 />
        <Paragraph45 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton23 />
          <Container78 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton24() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">윤서준</p>
        </div>
      </div>
    </div>
  );
}

function Badge24() {
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

function Container80() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph46 />
      <Badge24 />
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">yoon.seojun@company.com</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container80 />
        <Paragraph47 />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton24 />
          <Container81 />
        </div>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[128px] items-start relative shrink-0 w-full" data-name="Container">
      <Container79 />
      <Container82 />
    </div>
  );
}

function PrimitiveButton25() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">오세영</p>
        </div>
      </div>
    </div>
  );
}

function Badge25() {
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

function Container84() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph48 />
      <Badge25 />
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">oh.seyoung@company.com</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container84 />
        <Paragraph49 />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton25 />
          <Container85 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton26() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">송민지</p>
        </div>
      </div>
    </div>
  );
}

function Badge26() {
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

function Container87() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph50 />
      <Badge26 />
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">song.minji@company.com</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container87 />
        <Paragraph51 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton26 />
          <Container88 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton27() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">배현수</p>
        </div>
      </div>
    </div>
  );
}

function Badge27() {
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

function Container90() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph52 />
      <Badge27 />
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">bae.hyunsu@company.com</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container90 />
        <Paragraph53 />
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton27 />
          <Container91 />
        </div>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[194px] items-start relative shrink-0 w-full" data-name="Container">
      <Container86 />
      <Container89 />
      <Container92 />
    </div>
  );
}

function PrimitiveButton28() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">임도현</p>
        </div>
      </div>
    </div>
  );
}

function Badge28() {
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

function Container94() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph54 />
      <Badge28 />
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">lim.dohyun@company.com</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container94 />
        <Paragraph55 />
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton28 />
          <Container95 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton29() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">한지우</p>
        </div>
      </div>
    </div>
  );
}

function Badge29() {
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

function Container97() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph56 />
      <Badge29 />
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">han.jiwoo@company.com</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container97 />
        <Paragraph57 />
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton29 />
          <Container98 />
        </div>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[128px] items-start relative shrink-0 w-full" data-name="Container">
      <Container96 />
      <Container99 />
    </div>
  );
}

function PrimitiveButton30() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">조은서</p>
        </div>
      </div>
    </div>
  );
}

function Badge30() {
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

function Container101() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph58 />
      <Badge30 />
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">cho.eunseo@company.com</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container101 />
        <Paragraph59 />
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton30 />
          <Container102 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton31() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-[36.313px]">
        <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-nowrap text-slate-800 top-0">
          <p className="leading-[20px] whitespace-pre">신재현</p>
        </div>
      </div>
    </div>
  );
}

function Badge31() {
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

function Container104() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph60 />
      <Badge31 />
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[12px] text-nowrap text-slate-500 top-0">
        <p className="leading-[16px] whitespace-pre">shin.jaehyun@company.com</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start relative w-full">
        <Container104 />
        <Paragraph61 />
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="h-[62px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62px] items-center px-[12px] py-0 relative w-full">
          <PrimitiveButton31 />
          <Container105 />
        </div>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[128px] items-start relative shrink-0 w-full" data-name="Container">
      <Container103 />
      <Container106 />
    </div>
  );
}

function EmployeeSelectionModal9() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[49px] h-[1289px] items-start left-0 pb-0 pl-0 pr-[8px] pt-[33px] top-0 w-[446px]" data-name="EmployeeSelectionModal">
      <Container66 />
      <Container69 />
      <Container76 />
      <Container83 />
      <Container93 />
      <Container100 />
      <Container107 />
    </div>
  );
}

function EmployeeSelectionModal10() {
  return (
    <div className="absolute bg-white h-[25px] left-0 top-0 w-[438px]" data-name="EmployeeSelectionModal">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-slate-500 top-0 w-[71px]">
        <p className="leading-[20px]">개발팀 (3명)</p>
      </div>
    </div>
  );
}

function EmployeeSelectionModal11() {
  return (
    <div className="absolute bg-white h-[25px] left-0 top-[243px] w-[438px]" data-name="EmployeeSelectionModal">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-slate-500 top-0 w-[71px]">
        <p className="leading-[20px]">기획팀 (1명)</p>
      </div>
    </div>
  );
}

function EmployeeSelectionModal12() {
  return (
    <div className="absolute bg-white h-[25px] left-0 top-[354px] w-[438px]" data-name="EmployeeSelectionModal">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-slate-500 top-0 w-[83px]">
        <p className="leading-[20px]">디자인팀 (2명)</p>
      </div>
    </div>
  );
}

function EmployeeSelectionModal13() {
  return (
    <div className="absolute bg-white h-[25px] left-0 top-[531px] w-[438px]" data-name="EmployeeSelectionModal">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-slate-500 top-0 w-[83px]">
        <p className="leading-[20px]">마케팅팀 (2명)</p>
      </div>
    </div>
  );
}

function EmployeeSelectionModal14() {
  return (
    <div className="absolute bg-white h-[25px] left-0 top-[708px] w-[438px]" data-name="EmployeeSelectionModal">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-slate-500 top-0 w-[71px]">
        <p className="leading-[20px]">영업팀 (3명)</p>
      </div>
    </div>
  );
}

function EmployeeSelectionModal15() {
  return (
    <div className="absolute bg-white h-[25px] left-0 top-[951px] w-[438px]" data-name="EmployeeSelectionModal">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-slate-500 top-0 w-[71px]">
        <p className="leading-[20px]">인사팀 (2명)</p>
      </div>
    </div>
  );
}

function EmployeeSelectionModal16() {
  return (
    <div className="absolute bg-white h-[25px] left-0 top-[1128px] w-[438px]" data-name="EmployeeSelectionModal">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[0] left-0 text-[14px] text-slate-500 top-0 w-[71px]">
        <p className="leading-[20px]">재무팀 (2명)</p>
      </div>
    </div>
  );
}

function PrimitiveDiv1() {
  return (
    <div className="absolute h-[449.188px] left-[24px] overflow-clip top-[106px] w-[446px]" data-name="Primitive.div">
      <EmployeeSelectionModal9 />
      <EmployeeSelectionModal10 />
      <EmployeeSelectionModal11 />
      <EmployeeSelectionModal12 />
      <EmployeeSelectionModal13 />
      <EmployeeSelectionModal14 />
      <EmployeeSelectionModal15 />
      <EmployeeSelectionModal16 />
    </div>
  );
}

function EmployeeSelectionModal17() {
  return (
    <div className="absolute bg-white h-[571.188px] left-[510px] top-0 w-[510px]" data-name="EmployeeSelectionModal">
      <Container55 />
      <Container56 />
      <PrimitiveDiv1 />
    </div>
  );
}

export default function Group1321318978() {
  return (
    <div className="relative size-full">
      <EmployeeSelectionModal8 />
      <EmployeeSelectionModal17 />
    </div>
  );
}