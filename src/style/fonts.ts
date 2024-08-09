import { KeyValuePair, ResolvableTo } from "tailwindcss/types/config";

const getLineHeightRem = (fontSize: number) => {
  return `${fontSize * 1.4}rem`;
};

const fontSize: ResolvableTo<
  KeyValuePair<string, [fontSize: string, lineHeight: string]>
> = {
  Emphasis2: ["3rem", getLineHeightRem(3)], // 48px
  Emphasis1: ["2.625rem", getLineHeightRem(2.625)], // 42px
  Body4: ["2.25rem", getLineHeightRem(2.25)], // 36px
  Body3: ["2.0625rem", getLineHeightRem(2.0625)], // 33px
  Body2: ["1.875rem", getLineHeightRem(1.875)], // 30px
  Body1: ["1.6875rem", getLineHeightRem(1.6875)], // 27px
  Detail2: ["1.5rem", getLineHeightRem(1.5)], // 24px
  Detail1: ["1.3125rem", getLineHeightRem(1.3125)], // 21px
};

export default fontSize;
