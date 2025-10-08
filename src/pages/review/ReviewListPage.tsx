import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../../components/ui/dialog';
import { 
  Search, 
  Plus, 
  Eye, 
  Filter,
  Play,
  Square,
  Users,
  FileText,
  Edit,
  MoreHorizontal,
  ChevronDown
} from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../components/ui/dropdown-menu';
import { ReviewState } from '../../services/review';
import { useGetOrganizationReviews } from '../../services/dummy';
import { getCookieValue } from '../../lib/cookies';
import { mockReviews } from './mockData';

interface Person {
  id: number;
  name: string;
  department: string;
  position: string;
}

interface ReviewItem {
  id: number;
  title: string;
  evaluators: Person[]; // 평가자 목록
  evaluatees: Person[]; // 피평가자 목록
  participatedEvaluators: number; // 참여한 평가자 수
  startDate: string;
  endDate: string;
  createdDate: string;
  status: ReviewState;
}

// mockReviews 데이터는 './mockData'에서 import함

export default function ReviewListPage() {
  const navigate = useNavigate();
  const organizationId = getCookieValue('organizationId');
  const { data: reviewListData } = useGetOrganizationReviews(organizationId);
  const onCreateReview = () => {
    navigate('/management/review/create');
  };

  const onEditReview = (reviewId: number) => {
    navigate(`/management/review/${reviewId}/edit`);
  };

  const onViewReview = (reviewId: number) => {
    navigate(`/management/review/${reviewId}`);
  };
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const [modalTitle, setModalTitle] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getStatusBadge = (status: ReviewItem['status']) => {
    const statusConfig = {
      [ReviewState.READY]: { 
        label: '시작전', 
        className: 'bg-amber-50 text-amber-600 border-amber-500'
      },
      [ReviewState.PROCESS]: { 
        label: '진행중', 
        className: 'bg-green-50 text-green-600 border-green-500'
      },
      [ReviewState.DONE]: { 
        label: '종료', 
        className: 'bg-gray-50 text-gray-500 border-gray-200'
      },
      [ReviewState.STOPPED]: { 
        label: '중단됨', 
        className: 'bg-red-50 text-red-600 border-red-500'
      },
      [ReviewState.DELETED]: { 
        label: '삭제됨', 
        className: 'bg-gray-50 text-gray-400 border-gray-200'
      },
    };
    
    const config = statusConfig[status];
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${config.className}`}>
        {config.label}
      </span>
    );
  };

  const getActionButton = (review: ReviewItem) => {
    if (review.status === ReviewState.READY) {
      return (
        <Button size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700">
          <Play className="h-4 w-4" />
          시작
        </Button>
      );
    } else if (review.status === ReviewState.PROCESS) {
      return (
        <Button size="sm" variant="destructive" className="gap-2">
          <Square className="h-4 w-4" />
          종료
        </Button>
      );
    } else {
      return (
        <Button size="sm" variant="outline" className="gap-2">
          <Eye className="h-4 w-4" />
          결과보기
        </Button>
      );
    }
  };

  const calculateProgress = (review: ReviewItem) => {
    const totalEvaluators = review.evaluators.length;
    const participatedEvaluators = review.participatedEvaluators;
    const percentage = totalEvaluators > 0 ? (participatedEvaluators / totalEvaluators) * 100 : 0;
    return {
      percentage: Math.round(percentage),
      participated: participatedEvaluators,
      total: totalEvaluators
    };
  };

  const openPeopleModal = (people: Person[], title: string) => {
    setSelectedPeople(people);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const serviceReviews: ReviewItem[] = (reviewListData ?? []).map((r, idx) => {
    const [startDate = '', endDate = ''] = (r.reviewPeriod ?? '').split(' ~ ');
    const base = mockReviews.find((m) => String(m.id) === r.id);
    return {
      id: Number(r.id) || idx + 1,
      title: r.title,
      evaluators: base?.evaluators ?? [],
      evaluatees: base?.evaluatees ?? [],
      participatedEvaluators: base?.participatedEvaluators ?? 0,
      startDate,
      endDate,
      createdDate: base?.createdDate ?? '',
      status: r.state ?? ReviewState.READY,
    };
  });

  const filteredReviews = serviceReviews.filter(review => {
    const matchesSearch = review.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || review.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return {
      range: `${startDate} ~ ${endDate}`,
      duration: `${diffDays}일간`
    };
  };

  return (
    <div className="bg-white h-full overflow-auto">
      <div className="w-full max-w-[1280px] mx-auto px-16 py-16">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold text-[#101828] leading-8">리뷰 관리</h1>
              <p className="text-sm text-[#6a7282] leading-5">인사평가 리뷰를 생성하고 관리하세요</p>
            </div>
          </div>
          <Button 
            onClick={onCreateReview} 
            className="bg-[#1447e6] hover:bg-[#1447e6]/90 text-white h-9 px-3 py-2 gap-2 rounded-[4px] text-sm font-medium leading-5"
          >
            <Plus className="h-4 w-4" />
            새 리뷰 생성
          </Button>
        </div>

        {/* 검색 및 필터 */}
        <div className="flex items-center gap-2 pb-4 border-b border-gray-200 mb-8">
          <div className="relative max-w-[448px] w-[260px]">
            <Input
              placeholder="리뷰명으로 검색"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-50 border-gray-200 h-9 rounded-[4px] pl-[41px] text-sm placeholder:text-slate-500"
            />
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#99A1AF]" />
          </div>
          <div className="relative">
            <button className="bg-white border border-gray-200 h-9 rounded-[4px] px-[13px] py-[9px] w-[140px] flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-[#99A1AF]" />
                <span className="text-sm text-slate-800 text-center">전체 상태</span>
              </div>
              <ChevronDown className="h-4 w-4 text-[#64748B] opacity-50" />
            </button>
          </div>
        </div>

        {/* 리뷰 목록 테이블 */}
        {filteredReviews.length === 0 ? (
        <div className="text-center py-24">
          <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg text-gray-900 mb-2">리뷰가 없습니다</h3>
          <p className="text-gray-500 mb-6">
              {searchTerm || statusFilter !== 'all' 
              ? '검색 조건에 맞는 리뷰를 찾을 수 없습니다.' 
              : '첫 번째 리뷰를 생성해서 시작해보세요.'}
          </p>
          {(!searchTerm && statusFilter === 'all') && (
            <Button onClick={onCreateReview} className="gap-2 bg-[#1447e6] hover:bg-[#1447e6]/90 text-white">
              <Plus className="h-4 w-4" />
              새 리뷰 생성
            </Button>
          )}
        </div>
      ) : (
          <div className="bg-white border border-gray-200 rounded-[6px] overflow-auto">
            {/* 테이블 헤더 */}
            <div className="bg-gray-50 border-b border-gray-200">
              <div className="flex">
                <div className="w-[300px] px-2 py-[10.25px]">
                  <span className="text-sm font-medium text-[#101828] leading-5">리뷰명</span>
                </div>
                <div className="w-[101.59px] px-2 py-[10.25px]">
                  <span className="text-sm font-medium text-[#101828] leading-5">상태</span>
                </div>
                <div className="w-[284.61px] px-2 py-[10.25px]">
                  <span className="text-sm font-medium text-[#101828] leading-5">리뷰 기간</span>
                </div>
                <div className="w-[113.03px] px-2 py-[10.25px]">
                  <span className="text-sm font-medium text-[#101828] leading-5">평가자</span>
                </div>
                <div className="w-[113.03px] px-2 py-[10.25px]">
                  <span className="text-sm font-medium text-[#101828] leading-5">피평가자</span>
                </div>
                <div className="w-[79.2px] px-2 py-[10.25px]">
                  <span className="text-sm font-medium text-[#101828] leading-5">진행도</span>
                </div>
                <div className="w-[142.53px] px-2 py-[10.25px]">
                  <span className="text-sm font-medium text-[#101828] leading-5">생성일</span>
                </div>
                <div className="w-20 px-2 py-[10.25px]"></div>
              </div>
            </div>
            
            {/* 테이블 바디 */}
            <div className="divide-y divide-gray-200">
              {filteredReviews.map((review) => {
                const dateInfo = formatDateRange(review.startDate, review.endDate);
                const progressInfo = calculateProgress(review);
                
                return (
                  <div key={review.id} className="flex items-center hover:bg-gray-50 border-b border-gray-200">
                    {/* 리뷰명 */}
                    <div className="w-[300px] px-2 py-[20.5px]">
                      <button
                        onClick={() => onViewReview(review.id)}
                        className="text-left hover:text-blue-700 transition-colors text-[#101828] text-sm leading-5 truncate max-w-[280px] block"
                      >
                        {review.title}
                      </button>
                    </div>
                    
                    {/* 상태 */}
                    <div className="w-[101.59px] px-2 py-[17.5px]">
                      {getStatusBadge(review.status)}
                    </div>
                    
                    {/* 리뷰 기간 */}
                    <div className="w-[276.61px] px-2 py-0">
                      <div className="flex flex-col gap-1">
                        <div className="text-sm text-[#101828] leading-5">{dateInfo.range}</div>
                        <div className="text-sm text-[#6a7282] leading-5">{dateInfo.duration}</div>
                      </div>
                    </div>
                    
                    {/* 평가자 */}
                    <div className="w-[121.03px] px-4 py-[12.5px]">
                      <button
                        onClick={() => openPeopleModal(review.evaluators, '평가자 목록')}
                        className="flex items-center gap-1 px-2.5 py-2 rounded-[4px] hover:bg-gray-100 transition-colors"
                      >
                        <Users className="h-4 w-4 text-[#4A5565]" />
                        <span className="text-sm font-medium text-[#4a5565] leading-5">{review.evaluators.length}명</span>
                      </button>
                    </div>
                    
                    {/* 피평가자 */}
                    <div className="w-[113.03px] px-2 py-[12.5px]">
                      <button
                        onClick={() => openPeopleModal(review.evaluatees, '피평가자 목록')}
                        className="flex items-center gap-1 px-2.5 py-2 rounded-[4px] hover:bg-gray-100 transition-colors"
                      >
                        <Users className="h-4 w-4 text-[#4A5565]" />
                        <span className="text-sm font-medium text-[#4a5565] leading-5">{review.evaluatees.length}명</span>
                      </button>
                    </div>
                    
                    {/* 진행도 */}
                    <div className="w-[79.2px] px-2 py-[20.5px]">
                      <span className="text-sm text-[#101828] leading-5">{progressInfo.percentage}%</span>
                    </div>
                    
                    {/* 생성일 */}
                    <div className="w-[142.53px] px-2 py-[20.5px]">
                      <span className="text-sm text-[#6a7282] leading-5">{review.createdDate}</span>
                    </div>
                    
                    {/* 액션 메뉴 */}
                    <div className="w-20 px-2 py-[14.5px]">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="flex items-center justify-center w-8 h-8 rounded-[4px] hover:bg-gray-100 transition-colors">
                            <MoreHorizontal className="h-4 w-4 text-[#99A1AF]" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-32">
                          <DropdownMenuItem onClick={() => onViewReview(review.id)} className="gap-2">
                            <Eye className="h-4 w-4" />
                            조회
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => onEditReview(review.id)} className="gap-2">
                            <Edit className="h-4 w-4" />
                            수정
                          </DropdownMenuItem>
                          {review.status === ReviewState.READY && (
                            <DropdownMenuItem className="gap-2">
                              <Play className="h-4 w-4" />
                              시작
                            </DropdownMenuItem>
                          )}
                          {review.status === ReviewState.PROCESS && (
                            <DropdownMenuItem className="gap-2">
                              <Square className="h-4 w-4" />
                              종료
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 평가자/피평가자 목록 모달 */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{modalTitle}</DialogTitle>
            <DialogDescription>
              {modalTitle === '평가자 목록' 
                ? '이 리뷰의 평가자 목록입니다.' 
                : '이 리뷰의 피평가자 목록입니다.'}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid gap-3">
              {selectedPeople.map((person) => (
                <div
                  key={person.id}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div>
                    <div className="font-medium">{person.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {person.department} · {person.position}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {selectedPeople.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                등록된 인원이 없습니다.
              </div>
            )}
          </div>
        </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}