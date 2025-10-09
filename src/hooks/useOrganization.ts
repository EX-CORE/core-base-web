import { useState } from 'react';
import type { Organization } from '../types';
import { logger } from '../utils/security';

/**
 * 조직 관련 상태 및 로직을 관리하는 커스텀 훅
 */
export function useOrganization() {
  const [currentOrganization, setCurrentOrganization] = useState<Organization | null>(null);
  const [organizations, setOrganizations] = useState<Organization[]>([
    { id: 1, name: '송구름', logo: undefined },
    { id: 2, name: '송구름', logo: undefined },
  ]);
  const [invitedOrganizations] = useState<Organization[]>([
    { id: 3, name: '홍지은조직', logo: undefined },
  ]);

  // UI 상태
  const [isOrgSwitcherOpen, setIsOrgSwitcherOpen] = useState(false);
  const [isOrgAddModalOpen, setIsOrgAddModalOpen] = useState(false);

  // 조직 선택
  const selectOrganization = (org: Organization) => {
    setCurrentOrganization(org);
    logger.log('조직 선택:', { id: org.id, name: org.name });
  };

  // 조직 추가 모달 열기
  const openAddOrganizationModal = () => {
    setIsOrgAddModalOpen(true);
  };

  // 조직 저장
  const saveOrganization = (name: string, logo?: string) => {
    const newOrg: Organization = {
      id: organizations.length + invitedOrganizations.length + 1,
      name,
      logo,
    };
    setOrganizations([...organizations, newOrg]);
    logger.log('새 조직 추가:', { id: newOrg.id, name: newOrg.name });
  };

  // 초대 수락
  const acceptInvite = (orgId: number) => {
    logger.log('초대 수락:', orgId);
    alert(`조직 초대를 수락했습니다. (ID: ${orgId})`);
  };

  // 초대 거절
  const declineInvite = (orgId: number) => {
    logger.log('초대 거절:', orgId);
    alert(`조직 초대를 거절했습니다. (ID: ${orgId})`);
  };

  return {
    // 상태
    currentOrganization,
    organizations,
    invitedOrganizations,
    isOrgSwitcherOpen,
    isOrgAddModalOpen,
    
    // Setters
    setCurrentOrganization,
    setOrganizations,
    setIsOrgSwitcherOpen,
    setIsOrgAddModalOpen,
    
    // 메서드
    selectOrganization,
    openAddOrganizationModal,
    saveOrganization,
    acceptInvite,
    declineInvite,
  };
}
