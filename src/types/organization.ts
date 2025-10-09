/**
 * 조직 및 구성원 관련 타입 정의
 */

export interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
  email: string;
}

export interface Team {
  id: number;
  name: string;
  members: Employee[];
}

export interface Organization {
  id: number;
  name: string;
  logo?: string;
}
