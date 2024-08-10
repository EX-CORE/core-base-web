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
    LABEL: "기본홈",
    VALUE: "HOME",
    LINK: "/home",
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
    LINK: "/review",
  },
  MANAGEMENT_REVIEW: {
    LABEL: "리뷰관리",
    VALUE: "MANAGEMENT_REVIEW",
    LINK: "/management/review",
  },
  MANAGEMENT_ORGANIZATION: {
    LABEL: "조직 관리",
    VALUE: "MANAGEMENT_ORGANIZATION",
    LINK: "/management/organization",
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
    { MENU: MENU.MANAGEMENT_REVIEW, SUB_MENU: [] },
    {
      MENU: MENU.MANAGEMENT_ORGANIZATION,
      SUB_MENU: [
        MENU.MANAGEMENT_ORGANIZTION_INFO,
        MENU.MANAGEMENT_ORGANIZTION_MEMBER,
        MENU.MANAGEMENT_ORGANIZTION_STRUCTURE,
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
