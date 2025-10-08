import svgPaths from "./svg-d0cdh277x4";

function Frame() {
  return (
    <div className="absolute h-[150px] left-8 top-[21px] w-[126.316px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 150">
        <g clipPath="url(#clip0_145_381)" id="Frame">
          <path d={svgPaths.p8668040} fill="var(--fill-0, #FFAB00)" id="Vector" />
          <path d={svgPaths.pa8a0900} fill="var(--fill-0, #0277FF)" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p3dd5b000} fill="var(--fill-0, #62EC87)" fillRule="evenodd" id="Vector_3" />
          <path d={svgPaths.p3175f300} fill="var(--fill-0, #FF1D3E)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_145_381">
            <rect fill="white" height="150" width="126.316" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group238() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[rgba(217,217,217,0)] left-0 size-48 top-0" />
      <Frame />
    </div>
  );
}

function Frame235() {
  return (
    <div className="absolute left-0 size-48 top-0">
      <Group238 />
    </div>
  );
}

function CoreBase() {
  return (
    <div className="absolute h-[82.11px] left-[223px] top-[59.95px] w-[488.634px]" data-name="CoreBase">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 489 83">
        <g id="CoreBase">
          <path d={svgPaths.p995280} fill="var(--fill-0, #1C1C1C)" id="Vector" />
          <path d={svgPaths.p354a0000} fill="var(--fill-0, #1C1C1C)" id="Vector_2" />
          <path d={svgPaths.p3bdef380} fill="var(--fill-0, #1C1C1C)" id="Vector_3" />
          <path d={svgPaths.p1b2f7700} fill="var(--fill-0, #1C1C1C)" id="Vector_4" />
          <path d={svgPaths.p1362df80} fill="var(--fill-0, #1C1C1C)" id="Vector_5" />
          <path d={svgPaths.p50ff400} fill="var(--fill-0, #1C1C1C)" id="Vector_6" />
          <path d={svgPaths.p8c1ba80} fill="var(--fill-0, #1C1C1C)" id="Vector_7" />
          <path d={svgPaths.p12b20f80} fill="var(--fill-0, #1C1C1C)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame236() {
  return (
    <div className="relative size-full">
      <Frame235 />
      <CoreBase />
    </div>
  );
}