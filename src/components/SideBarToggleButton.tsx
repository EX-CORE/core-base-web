import * as React from "react";
import svgPathsSidebar from '../imports/svg-63i0icnlwn';

type Props = {
    onClick?: () => void;
    onMouseOver?: () => void;
};

export default function SideBarToggleButton({ onClick, onMouseOver }:Props) {
      return (
        <button
            onClick={onClick}
            onMouseOver={onMouseOver}
            className="ml-auto mr-1.5 items-center relative rounded-[4px] shrink-0 size-8 hover:bg-slate-100 transition-colors"
        >
            <div className="relative shrink-0 size-4">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0">
                    <g id="SVG">
                        <path d={svgPathsSidebar.p19d57600} id="Vector" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d="M6 2V14" id="Vector_2" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </g>
                </svg>
            </div>
        </button>
    );
  }
