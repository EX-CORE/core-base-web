import svgPaths from "./svg-9d0lra3xok";

function Text() {
  return (
    <div className="absolute bg-slate-100 left-[16px] rounded-[3.35544e+07px] size-[24px] top-[20px]" data-name="Text">
      <p className="absolute font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[16px] left-[12.22px] text-[#45556c] text-[12px] text-center text-nowrap top-[4px] translate-x-[-50%] whitespace-pre">1</p>
    </div>
  );
}

function TableCell() {
  return (
    <div className="h-[62.5px] relative shrink-0 w-[56px]" data-name="Table Cell">
      <Text />
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-blue-50 h-[22px] relative rounded-[4px] shrink-0 w-full" data-name="Badge">
      <div className="h-[22px] overflow-clip relative w-full">
        <p className="absolute font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[16px] left-[9px] text-[#1447e6] text-[12px] text-nowrap top-[3px] whitespace-pre">객관식</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-full items-start px-[16px] py-[19px] relative shrink-0 w-[81.125px]" data-name="Table Cell">
      <Badge />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[758px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[758px]">
        <p className="absolute font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[20px] left-0 text-[#0f172b] text-[14px] text-nowrap top-0 whitespace-pre">업무 수행 능력</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[758px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[758px]">
        <p className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[16px] left-0 text-[#62748e] text-[12px] text-nowrap top-0 whitespace-pre">담당 업무를 정확하고 효율적으로 수행하는 정도</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[38px] items-start left-[16px] top-[12.5px] w-[758px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="basis-0 grow h-[62.5px] min-h-px min-w-px relative shrink-0" data-name="Table Cell">
      <Container />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[28px] left-[15.88px] top-0 w-[31.844px]" data-name="Text">
      <p className="absolute font-['Pretendard_Variable:Bold',_sans-serif] font-bold leading-[28px] left-[16px] text-[20px] text-blue-800 text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">4.7</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[16px] left-[49.72px] top-[9px] w-[14.391px]" data-name="Text">
      <p className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[16px] left-[7.5px] text-[#90a1b9] text-[12px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">/ 5</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[28px] left-[16px] top-[17.5px] w-[80px]" data-name="Container">
      <Text1 />
      <Text2 />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="h-[62.5px] relative shrink-0 w-[112px]" data-name="Table Cell">
      <Container1 />
    </div>
  );
}

function TableRow() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Table Row">
      <TableCell />
      <div className="flex flex-row items-center self-stretch">
        <TableCell1 />
      </div>
      <TableCell2 />
      <TableCell3 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Table Body">
      <TableRow />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-slate-100 left-[16px] rounded-[3.35544e+07px] size-[24px] top-[20px]" data-name="Text">
      <p className="absolute font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[16px] left-[12.22px] text-[#45556c] text-[12px] text-center text-nowrap top-[4px] translate-x-[-50%] whitespace-pre">2</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="h-[62.5px] relative shrink-0 w-[56px]" data-name="Table Cell">
      <Text3 />
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-green-50 h-[22px] relative rounded-[4px] shrink-0 w-[49.125px]" data-name="Badge">
      <div className="h-[22px] overflow-clip relative w-[49.125px]">
        <p className="absolute font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[16px] left-[9px] text-[#008236] text-[12px] text-nowrap top-[3px] whitespace-pre">주관식</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-full items-start px-[16px] py-[19px] relative shrink-0 w-[81.125px]" data-name="Table Cell">
      <Badge1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[758px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[758px]">
        <p className="absolute font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[20px] left-0 text-[#0f172b] text-[14px] text-nowrap top-0 whitespace-pre">개선이 필요한 영역</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[758px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[758px]">
        <p className="absolute font-['Pretendard_Variable:Regular',_sans-serif] font-normal leading-[16px] left-0 text-[#62748e] text-[12px] text-nowrap top-0 whitespace-pre">향후 개선하거나 발전시켰으면 하는 영역에 대해 구체적으로 작성해 주세요</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[38px] items-start left-[16px] top-[12.5px] w-[758px]" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="basis-0 grow h-[62.5px] min-h-px min-w-px relative shrink-0" data-name="Table Cell">
      <Container2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[14px] top-px" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p37834640} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[16px] left-[20px] top-0 w-[20.75px]" data-name="Text">
      <p className="absolute font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[16px] left-[21px] text-[#009966] text-[12px] text-nowrap text-right top-0 translate-x-[-100%] whitespace-pre">완료</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[16px] translate-x-[-50%] translate-y-[-50%] w-[40.75px]" data-name="Container" style={{ top: "calc(50% + 0.25px)", left: "calc(50% - 0.125px)" }}>
      <Icon />
      <Text4 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="h-[62.5px] relative shrink-0 w-[112px]" data-name="Table Cell">
      <Container3 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Table Row">
      <TableCell4 />
      <div className="flex flex-row items-center self-stretch">
        <TableCell5 />
      </div>
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function TableBody1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Table Body">
      <TableRow1 />
    </div>
  );
}

export default function Frame1321320942() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <TableBody />
      <TableBody1 />
    </div>
  );
}