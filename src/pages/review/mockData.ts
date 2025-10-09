// 리뷰 리스트 페이지에서 사용하는 목데이터 분리
import {Review, ReviewState} from '../../types';

export interface Person {
  id: number;
  name: string;
  department: string;
  position: string;
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
    state: ReviewState.PROCESS
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
    state: ReviewState.DONE
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
    state: ReviewState.READY
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
    state: ReviewState.READY
  }
];


// 임시 데이터 - 실제 리뷰 상세 정보
export const mockReviewDetails = {
  1: {
    id: 1,
    title: '상반기 인사평가',
    description: '2024년 상반기 직원 성과 및 역량 평가를 위한 리뷰입니다.',
    startDate: '2024.06.01',
    endDate: '2024.06.15',
    createdDate: '2024.05.25',
    state: ReviewState.READY,
    participants: {
      evaluators: [
        { id: 1, name: '김영수', department: '개발팀', position: '팀장', completed: false, email: 'kim.youngsu@company.com' },
        { id: 2, name: '이민정', department: '개발팀', position: '선임', completed: false, email: 'lee.minjeong@company.com' },
        { id: 3, name: '박준호', department: '개발팀', position: '책임', completed: false, email: 'park.junho@company.com' },
        { id: 4, name: '최수영', department: '기획팀', position: '팀장', completed: false, email: 'choi.suyoung@company.com' },
        { id: 5, name: '한지원', department: '기획팀', position: '선임', completed: false, email: 'han.jiwon@company.com' }
      ],
      targets: [
        { id: 1, name: '홍길동', department: '개발팀', position: '주임', email: 'hong.gildong@company.com' },
        { id: 2, name: '김철수', department: '개발팀', position: '사원', email: 'kim.chulsu@company.com' },
        { id: 3, name: '이영희', department: '기획팀', position: '대리', email: 'lee.younghee@company.com' }
      ]
    },
    statistics: {
      totalResponses: 0,
      totalTargets: 3,
      responseRate: 0,
      averageScore: 0
    },
    ratingOptions: [
      { label: '매우 부족', score: 1 },
      { label: '부족', score: 2 },
      { label: '보통', score: 3 },
      { label: '우수', score: 4 },
      { label: '매우 우수', score: 5 }
    ],
    questions: [
      {
        id: 1,
        type: 'rating' as const,
        title: '업무 수행 능력',
        description: '담당 업무를 정확하고 효율적으로 수행하는 정도를 평가해주세요.',
        required: true,
        ratingOptions: [
          { label: '매우 우수', score: 5 },
          { label: '우수', score: 4 },
          { label: '보통', score: 3 },
          { label: '부족', score: 2 },
          { label: '매우 부족', score: 1 }
        ]
      },
      {
        id: 2,
        type: 'rating' as const,
        title: '의사소통 능력',
        description: '동료 및 상급자와의 원활한 소통 능력을 평가해주세요.',
        required: true,
        ratingOptions: [
          { label: '매우 우수', score: 5 },
          { label: '우수', score: 4 },
          { label: '보통', score: 3 },
          { label: '부족', score: 2 },
          { label: '매우 부족', score: 1 }
        ]
      },
      {
        id: 3,
        type: 'multiple' as const,
        title: '개선이 필요한 영역',
        description: '해당 직원이 향후 개선해야 할 주요 영역을 선택해주세요.',
        required: false,
        options: [
          '기술적 역량',
          '리더십',
          '협업 능력',
          '시간 관리',
          '문제 해결 능력'
        ]
      },
      {
        id: 4,
        type: 'text' as const,
        title: '추가 의견',
        description: '평가에 대한 추가적인 의견이나 피드백을 자유롭게 작성해주세요.',
        required: false
      }
    ]
  }
};

// Mock 데이터 - 실제로는 API에서 가져올 데이터
export const mockCompletedReviews = [
  {
    id: 1,
    title: '2024년 4분기 성과 평가',
    description: '팀원들의 4분기 성과를 종합적으로 평가',
    period: '2024.12.01 ~ 2024.12.15',
    duration: '15일간',
    status: '종료됨',
    participants: 15,
    responses: 15,
    avgScore: 4.2,
    completedDate: '2024-12-15',
    sections: [
      {
        id: 1,
        title: '핵심 역량 평가',
        description: '업무 수행과 관련된 핵심 역량을 평가합니다',
        questions: [
          {
            id: 1,
            type: 'rating' as const,
            title: '업무 수행 능력',
            description: '담당 업무를 정확하고 효율적으로 수행하는 정도',
            avgScore: 4.3,
            options: ['매우 부족', '부족', '보통', '우수', '매우 우수']
          },
          {
            id: 2,
            type: 'multiple' as const,
            title: '의사소통 스타일',
            description: '업무 상황에서 선호하는 의사소통 방식',
            avgScore: null,
            options: ['직접적이고 명확한 소통', '협력적이고 포용적인 소통', '분석적이고 논리적인 소통', '창의적이고 유연한 소통']
          }
        ]
      },
      {
        id: 2,
        title: '성장 및 개발 영역',
        description: '개인의 성장과 발전 가능성을 평가합니다',
        questions: [
          {
            id: 3,
            type: 'text' as const,
            title: '개선이 필요한 영역',
            description: '향후 개선하거나 발전시켰으면 하는 영역에 대해 구체적으로 작성해 주세요',
            avgScore: null,
            options: null
          },
          {
            id: 4,
            type: 'rating' as const,
            title: '협업 능력',
            description: '팀원들과의 협업 및 업무 조율 능력',
            avgScore: 4.4,
            options: ['매우 부족', '부족', '보통', '우수', '매우 우수']
          }
        ]
      }
    ],
    participants_data: [
      {
        id: 1,
        name: '김철수',
        department: '개발팀',
        position: '시니어 개발자',
        email: 'kim.chulsoo@company.com',
        finalGrade: '',
        evaluatedCount: 3,
        totalEvaluators: 3,
        responses: [
          {
            questionId: 1,
            sectionId: 1,
            evaluations: [
              { evaluatorId: 1, score: 5, option: '매우 우수' },
              { evaluatorId: 2, score: 4, option: '우수' },
              { evaluatorId: 3, score: 5, option: '매우 우수' }
            ]
          },
          {
            questionId: 2,
            sectionId: 1,
            evaluations: [
              { evaluatorId: 1, option: '직접적이고 명확한 소통' },
              { evaluatorId: 2, option: '분석적이고 논리적인 소통' },
              { evaluatorId: 3, option: '직접적이고 명확한 소통' }
            ]
          },
          {
            questionId: 3,
            sectionId: 2,
            evaluations: [
              {
                evaluatorId: 1,
                text: '새로운 기술 스택에 대한 학습 속도를 높이고, 주니어 개발자들에게 더 체계적인 멘토링을 제공했으면 좋겠습니다.'
              },
              {
                evaluatorId: 2,
                text: '프로젝트 일정 관리와 우선순위 설정 능력을 개선하여 더 효율적인 업무 진행이 가능할 것 같습니다.'
              },
              {
                evaluatorId: 3,
                text: '타 부서와의 커뮤니케이션에서 좀 더 적극적인 자세를 보여주시면 좋을 것 같습니다.'
              }
            ]
          },
          {
            questionId: 4,
            sectionId: 2,
            evaluations: [
              { evaluatorId: 1, score: 4, option: '우수' },
              { evaluatorId: 2, score: 5, option: '매우 우수' },
              { evaluatorId: 3, score: 4, option: '우수' }
            ]
          }
        ]
      },
      {
        id: 2,
        name: '이영희',
        department: '디자인팀',
        position: 'UI/UX 디자이너',
        email: 'lee.younghee@company.com',
        finalGrade: '',
        evaluatedCount: 3,
        totalEvaluators: 3,
        responses: [
          {
            questionId: 1,
            sectionId: 1,
            evaluations: [
              { evaluatorId: 1, score: 4, option: '우수' },
              { evaluatorId: 2, score: 4, option: '우수' },
              { evaluatorId: 3, score: 4, option: '우수' }
            ]
          },
          {
            questionId: 2,
            sectionId: 1,
            evaluations: [
              { evaluatorId: 1, option: '창의적이고 유연한 소통' },
              { evaluatorId: 2, option: '협력적이고 포용적인 소통' },
              { evaluatorId: 3, option: '창의적이고 유연한 소통' }
            ]
          },
          {
            questionId: 3,
            sectionId: 2,
            evaluations: [
              {
                evaluatorId: 1,
                text: '사용자 리서치 역량을 강화하여 더 데이터 기반의 디자인 결정을 내릴 수 있도록 발전했으면 좋겠습니다.'
              },
              {
                evaluatorId: 2,
                text: '개발팀과의 협업에서 기술적 제약사항을 더 잘 이해하고 현실적인 디자인 제안을 했으면 합니다.'
              },
              {
                evaluatorId: 3,
                text: '프로젝트 전체 일정을 고려한 디자인 우선순위 설정 능력을 기를 필요가 있습니다.'
              }
            ]
          },
          {
            questionId: 4,
            sectionId: 2,
            evaluations: [
              { evaluatorId: 1, score: 4, option: '우수' },
              { evaluatorId: 2, score: 4, option: '우수' },
              { evaluatorId: 3, score: 3, option: '보통' }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '박민수',
        department: '기획팀',
        position: '프로덕트 매니저',
        email: 'park.minsu@company.com',
        finalGrade: '',
        evaluatedCount: 2,
        totalEvaluators: 3,
        responses: [
          {
            questionId: 1,
            sectionId: 1,
            evaluations: [
              { evaluatorId: 1, score: 4, option: '우수' },
              { evaluatorId: 2, score: 4, option: '우수' },
              { evaluatorId: 3, score: 3, option: '보통' }
            ]
          },
          {
            questionId: 2,
            sectionId: 1,
            evaluations: [
              { evaluatorId: 1, option: '분석적이고 논리적인 소통' },
              { evaluatorId: 2, option: '협력적이고 포용적인 소통' },
              { evaluatorId: 3, option: '��석적이고 논리적인 소통' }
            ]
          },
          {
            questionId: 3,
            sectionId: 2,
            evaluations: [
              {
                evaluatorId: 1,
                text: '시장 분석과 경쟁사 분석 능력을 더 체계적으로 발전시켜 전략적 의사결정에 활용했으면 좋겠습니다.'
              },
              {
                evaluatorId: 2,
                text: '팀 내 커뮤니케이션에서 더 명확하고 구체적인 지시사항 전달이 필요합니다.'
              }
            ]
          },
          {
            questionId: 4,
            sectionId: 2,
            evaluations: [
              { evaluatorId: 1, score: 4, option: '우수' },
              { evaluatorId: 2, score: 4, option: '우수' },
              { evaluatorId: 3, score: 4, option: '우수' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: '2024년 3분기 역량 평가',
    description: '직무별 핵심 역량 평가',
    period: '2024.09.01 ~ 2024.09.15',
    duration: '15일간',
    status: '종료됨',
    participants: 12,
    responses: 12,
    avgScore: 3.9,
    completedDate: '2024-09-15',
    sections: [
      {
        id: 1,
        title: '전문성 평가',
        description: '직무 관련 전문성과 기술 역량을 평가합니다',
        questions: [
          {
            id: 4,
            type: 'rating' as const,
            title: '전문성',
            description: '담당 분야의 전문 지식과 기술',
            avgScore: 4.0,
            options: ['매우 부족', '부족', '보통', '우수', '매우 우수']
          }
        ]
      },
      {
        id: 2,
        title: '창의성 및 혁신',
        description: '새로운 아이디어 제시와 문제 해결 능력을 평가합니다',
        questions: [
          {
            id: 5,
            type: 'rating' as const,
            title: '창의성',
            description: '새로운 아이디어 제시 및 문제 해결',
            avgScore: 3.8,
            options: ['매우 부족', '부족', '보통', '우수', '매우 우수']
          }
        ]
      }
    ],
    participants_data: []
  }
];
