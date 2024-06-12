export const ROLE = {
    MATER_ADMIN: {
        LABEL: '마스터관리자',
        VALUE: 'MASTER_ADMIN',
    },
    COMPANY_ADMIN: {
        LABEL: '일반관리자',
        VALUE: 'ADMIN',
    },
    COMPANY_USER: {
        LABEL: '일반사용자',
        VALUE: 'USER',
    },
} as const;

export const roleLabelMap = {
    [ROLE.MATER_ADMIN.VALUE]: ROLE.MATER_ADMIN.LABEL,
    [ROLE.COMPANY_ADMIN.VALUE]: ROLE.COMPANY_ADMIN.LABEL,
    [ROLE.COMPANY_USER.VALUE]: ROLE.COMPANY_USER.LABEL,
} as const;

export const roleMenuListMap = {
    [ROLE.MATER_ADMIN.VALUE]: [{category: '조직', menuList:[]}, {category: '평가', menuList:[]}],
    [ROLE.COMPANY_ADMIN.VALUE]: [],
    [ROLE.COMPANY_USER.VALUE]: [],
} as const;

export const roleDefaultUrlMap = {
    [ROLE.MATER_ADMIN.VALUE]: '/home',
    [ROLE.COMPANY_ADMIN.VALUE]: '/home',
    [ROLE.COMPANY_USER.VALUE]: '/home',
} as const;
