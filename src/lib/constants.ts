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
} as const;

export const MENU = {
  DASHBOARD: {
    LABEL: "대시보드",
    VALUE: "DASHBOARD",
    LINK: "/dashboard",
  },
  REVIEW_MANAGEMENT: {
    LABEL: "리뷰관리",
    VALUE: "REVIEW_MANAGEMENT",
    LINK: "/review",
  },
  COMPANY_MANAGEMENT: {
    LABEL: "회사관리",
    VALUE: "COMPANY_MANAGEMENT",
    LINK: "/organization",
  },
  COMPANY_INFO: {
    LABEL: "회사정보",
    VALUE: "COMPANY_INFO",
    LINK: "/organization/information",
  },
  COMPANY_MEMBER_MANAGEMENT: {
    LABEL: "그룹/구성원 관리",
    VALUE: "COMPANY_MEMBER_MANAGEMENT",
    LINK: "/organization/member",
  },
  COMPANY_ORGANIZATION_STRUCTURE: {
    LABEL: "조직 관리",
    VALUE: "COMPANY_MEMBER_MANAGEMENT",
    LINK: "/organization/structure",
  },
  REVIEW_PROGRESS: {
    LABEL: "리뷰진행",
    VALUE: "REVIEW_PROGRESS",
    LINK: "/review/detail",
  },
  REVIEW_RESULT: {
    LABEL: "리뷰결과",
    VALUE: "REVIEW_RESULT",
    LINK: "/review/result",
  },
  MORESEE: {
    LABEL: "더보기",
    VALUE: "MORESEE",
    LINK: "/moresee",
  },
  SETTING: {
    LABEL: "내설정",
    VALUE: "SETTING",
    LINK: "/setting",
  },
  ACCOUNT_SETTING: {
    LABEL: "계정 설정",
    VALUE: "ACCOUNT_SETTING",
    LINK: "/account",
  },
} as const;

// export const ROLE_LABEL_MAP = {
//   [ROLE.COMPANY_ADMIN.VALUE]: ROLE.COMPANY_ADMIN.LABEL,
//   [ROLE.COMPANY_USER.VALUE]: ROLE.COMPANY_USER.LABEL,
// } as const;

export const ROLE_MENULIST_MAP = {
  [ROLE.COMPANY_ADMIN.VALUE]: [
    { CATEGORY: MENU.DASHBOARD, MENU_LIST: [] },
    { CATEGORY: MENU.REVIEW_MANAGEMENT, MENU_LIST: [] },
    {
      CATEGORY: MENU.COMPANY_MANAGEMENT,
      MENU_LIST: [
        MENU.COMPANY_INFO,
        MENU.COMPANY_MEMBER_MANAGEMENT,
        MENU.COMPANY_ORGANIZATION_STRUCTURE,
      ],
    },
  ],
  [ROLE.COMPANY_USER.VALUE]: [
    { CATEGORY: MENU.REVIEW_PROGRESS, MENU_LIST: [] },
    { CATEGORY: MENU.REVIEW_MANAGEMENT, MENU_LIST: [] },
    {
      CATEGORY: MENU.MORESEE,
      MENU_LIST: [MENU.SETTING, MENU.ACCOUNT_SETTING],
    },
  ],

  // {
  //   [MENU.DASHBOARD.VALUE]: [],
  //   [MENU.REVIEW_MANAGEMENT.VALUE]: [],
  //   [MENU.COMPANY_MANAGEMENT.VALUE]: [
  //     MENU.COMPANY_INFO.LABEL,
  //     MENU.COMPANY_MEMBER_MANAGEMENT.LABEL,
  //   ],
  // },
  // [ROLE.COMPANY_USER.VALUE]: {
  //   [MENU.REVIEW_PROGRESS.VALUE]: [],
  //   [MENU.REVIEW_MANAGEMENT.VALUE]: [],
  //   [MENU.MORESEE.VALUE]: [MENU.SETTING, MENU.ACCOUNT_SETTING],
  // },
};

export const ROLE_DEFAULT_URL_MAP = {
  [ROLE.COMPANY_ADMIN.VALUE]: "/home",
  [ROLE.COMPANY_USER.VALUE]: "/home",
} as const;
