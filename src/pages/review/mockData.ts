// 리뷰 리스트 페이지에서 사용하는 목데이터 분리
import { ReviewState } from '../../services/review';

export interface Person {
  id: number;
  name: string;
  department: string;
  position: string;
}

export interface Review {
  id: number;
  title: string;
  evaluators: Person[];
  evaluatees: Person[];
  participatedEvaluators: number;
  startDate: string;
  endDate: string;
  createdDate: string;
  status: ReviewState;
}

export const mockEvaluators: Person[] = [
  { id: 1, name: '김인사', department: '인사팀', position: '팀장' },
  { id: 2, name: '박관리', department: '경영지원팀', position: '차장' },
  { id: 3, name: '이총무', department: '총무팀', position: '과장' }
];

export const mockEvaluatees: Person[] = [
  { id: 1, name: '최개발', department: '개발팀', position: '주임' },
  { id: 2, name: '정프론트', department: '개발팀', position: '사원' },
  { id: 3, name: '한백엔드', department: '개발팀', position: '주임' },
  { id: 4, name: '윤디자인', department: '디자인팀', position: '사원' },
  { id: 5, name: '조기획', department: '기획팀', position: '대리' }
];

export const mockReviews: Review[] = [
  {
    id: 1,
    title: '2024년 상반기 인사평가',
    evaluators: [mockEvaluators[0], mockEvaluators[1]],
    evaluatees: mockEvaluatees.slice(0, 5),
    participatedEvaluators: 2,
    startDate: '2024-02-01',
    endDate: '2024-02-28',
    createdDate: '2024-01-15',
    status: ReviewState.PROCESS
  },
  {
    id: 2,
    title: '신입사원 온보딩 평가',
    evaluators: [mockEvaluators[0]],
    evaluatees: mockEvaluatees.slice(1, 3),
    participatedEvaluators: 1,
    startDate: '2024-01-20',
    endDate: '2024-01-31',
    createdDate: '2024-01-10',
    status: ReviewState.DONE
  },
  {
    id: 3,
    title: '팀장급 리더십 평가',
    evaluators: mockEvaluators,
    evaluatees: mockEvaluatees.slice(0, 4),
    participatedEvaluators: 1,
    startDate: '2024-02-15',
    endDate: '2024-03-15',
    createdDate: '2024-01-08',
    status: ReviewState.READY
  },
  {
    id: 4,
    title: '개발팀 분기별 성과평가 및 역량 진단',
    evaluators: [mockEvaluators[0], mockEvaluators[1]],
    evaluatees: mockEvaluatees.slice(0, 3),
    participatedEvaluators: 0,
    startDate: '2024-03-01',
    endDate: '2024-03-31',
    createdDate: '2024-02-10',
    status: ReviewState.READY
  }
];


