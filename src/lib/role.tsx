import {Building2, ClipboardPenLine, House, SmilePlus, Star} from "lucide-react";

export const ROLE = {
  // MATER_ADMIN: {
  //   LABEL: "마스터관리자",
  //   VALUE: "MASTER_ADMIN",
  // },
  COMPANY_ADMIN: {
    LABEL: "일반관리자",
    VALUE: "ADMIN",
  },
  COMPANY_USER: {
    LABEL: "일반사용자",
    VALUE: "USER",
  },
};

export const MENU = {
  HOME: {
    LABEL: "대시보드",
    VALUE: "HOME",
    LINK: "/home",
    ICON: <House size={18}  />,
  },
  // 홈 서브메뉴
  DASH_BORAD: {
    LABEL: "대시보드",
    VALUE: "DASH_BORAD",
    LINK: "/home/dashboard",
  },
  NOTICE: {
    LABEL: "공지사항",
    VALUE: "NOTICE",
    LINK: "/home/notice",
  },
  REVIEW: {
    LABEL: "리뷰",
    VALUE: "REVIEW",
    LINK: "/user/review",
    ICON: <Star size={18} />,
  },
  MANAGEMENT_REVIEW: {
    LABEL: "리뷰 관리",
    VALUE: "MANAGEMENT_REVIEW",
    LINK: "/management/review",
    ICON: <ClipboardPenLine size={18}/>,
  },
  MANAGEMENT_REVIEW_LIST: {
    LABEL: "리뷰 관리",
    VALUE: "MANAGEMENT_REVIEW_LIST",
    LINK: "/management/review/list",
    ICON: <ClipboardPenLine size={18}/>,
  },
  MANAGEMENT_REVIEW_RESULT: {
    LABEL: "리뷰 결과",
    VALUE: "MANAGEMENT_REVIEW_LIST",
    LINK: "/management/review/results",
    ICON: <House size={18}/>,
  },
  MANAGEMENT_ORGANIZATION: {
    LABEL: "조직 관리",
    VALUE: "MANAGEMENT_ORGANIZATION",
    LINK: "/management/organization",
    ICON: <Building2 size={18}/>,
  },
  // 조직관리 서브메뉴
  MANAGEMENT_ORGANIZTION_INFO: {
    LABEL: "조직 정보",
    VALUE: "MANAGEMENT_ORGANIZTION_INFO",
    LINK: "/management/organization/info",
  },
  MANAGEMENT_ORGANIZTION_STRUCTURE: {
    LABEL: "조직 구성",
    VALUE: "MANAGEMENT_ORGANIZTION_STRUCTURE",
    LINK: "/management/organization/structure",
  },
  MANAGEMENT_ORGANIZTION_MEMBER: {
    LABEL: "구성원",
    VALUE: "MANAGEMENT_ORGANIZTION_MEMBER",
    LINK: "/management/organization/member",
  },
  // SETTING: {
  //   LABEL: "내설정",
  //   VALUE: "SETTING",
  //   LINK: "/setting",
  // },
  // ACCOUNT_SETTING: {
  //   LABEL: "계정 설정",
  //   VALUE: "ACCOUNT_SETTING",
  //   LINK: "/account",
  // },
};

// export const ROLE_LABEL_MAP = {
//   [ROLE.COMPANY_ADMIN.VALUE]: ROLE.COMPANY_ADMIN.LABEL,
//   [ROLE.COMPANY_USER.VALUE]: ROLE.COMPANY_USER.LABEL,
// } as const;

export const ROLE_MENULIST_MAP = {
  [ROLE.COMPANY_ADMIN.VALUE]: [
    { MENU: MENU.HOME, SUB_MENU: [MENU.DASH_BORAD, MENU.NOTICE] },
    { MENU: MENU.REVIEW, SUB_MENU: [] },
    { MENU: MENU.MANAGEMENT_REVIEW_LIST},
    { MENU: MENU.MANAGEMENT_REVIEW_RESULT},
    {
      MENU: MENU.MANAGEMENT_ORGANIZATION,
      SUB_MENU: [
        MENU.MANAGEMENT_ORGANIZTION_INFO,
        MENU.MANAGEMENT_ORGANIZTION_STRUCTURE,
        MENU.MANAGEMENT_ORGANIZTION_MEMBER,
      ],
    },
  ],
  [ROLE.COMPANY_USER.VALUE]: [
    { MENU: MENU.HOME, SUB_MENU: [MENU.DASH_BORAD, MENU.NOTICE] },
    { MENU: MENU.REVIEW, SUB_MENU: [] },
    { MENU: MENU.MANAGEMENT_REVIEW, SUB_MENU: [] },
    {
      MENU: MENU.MANAGEMENT_ORGANIZATION,
      SUB_MENU: [],
    },
  ],
};

export const ROLE_DEFAULT_URL_MAP = {
  [ROLE.COMPANY_ADMIN.VALUE]: "/home",
  [ROLE.COMPANY_USER.VALUE]: "/home",
};
