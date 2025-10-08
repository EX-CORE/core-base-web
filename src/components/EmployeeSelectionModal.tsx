import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { Search, User } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
  email: string;
}

interface EmployeeSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (selectedEmployees: Employee[]) => void;
  title: string;
  selectedEmployeeIds: number[];
}

// 모든 임직원 데이터 (실제로는 API에서 가져올 데이터)
const allEmployees: Employee[] = [
  { id: 1, name: '김민수', department: '개발팀', position: '팀장', email: 'kim.minsu@company.com' },
  { id: 2, name: '이영희', department: '개발팀', position: '선임', email: 'lee.younghee@company.com' },
  { id: 3, name: '박준호', department: '개발팀', position: '주임', email: 'park.junho@company.com' },
  { id: 4, name: '최수진', department: '디자인팀', position: '팀장', email: 'choi.sujin@company.com' },
  { id: 5, name: '정현우', department: '디자인팀', position: '선임', email: 'jung.hyunwoo@company.com' },
  { id: 6, name: '강미영', department: '마케팅팀', position: '팀장', email: 'kang.miyoung@company.com' },
  { id: 7, name: '윤서준', department: '마케팅팀', position: '주임', email: 'yoon.seojun@company.com' },
  { id: 8, name: '임도현', department: '인사팀', position: '팀장', email: 'lim.dohyun@company.com' },
  { id: 9, name: '한지우', department: '인사팀', position: '선임', email: 'han.jiwoo@company.com' },
  { id: 10, name: '조은서', department: '재무팀', position: '팀장', email: 'cho.eunseo@company.com' },
  { id: 11, name: '신재현', department: '재무팀', position: '주임', email: 'shin.jaehyun@company.com' },
  { id: 12, name: '오세영', department: '영업팀', position: '팀장', email: 'oh.seyoung@company.com' },
  { id: 13, name: '송민지', department: '영업팀', position: '선임', email: 'song.minji@company.com' },
  { id: 14, name: '배현수', department: '영업팀', position: '주임', email: 'bae.hyunsu@company.com' },
  { id: 15, name: '안소희', department: '기획팀', position: '팀장', email: 'an.sohee@company.com' }
];

export default function EmployeeSelectionModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  selectedEmployeeIds
}: EmployeeSelectionModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIds, setSelectedIds] = useState<number[]>(selectedEmployeeIds);

  useEffect(() => {
    setSelectedIds(selectedEmployeeIds);
  }, [selectedEmployeeIds]);

  const filteredEmployees = allEmployees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEmployeeToggle = (employeeId: number) => {
    setSelectedIds(prev =>
      prev.includes(employeeId)
        ? prev.filter(id => id !== employeeId)
        : [...prev, employeeId]
    );
  };

  const handleSelectAll = () => {
    if (selectedIds.length === filteredEmployees.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredEmployees.map(emp => emp.id));
    }
  };

  const handleConfirm = () => {
    const selectedEmployees = allEmployees.filter(emp => selectedIds.includes(emp.id));
    onConfirm(selectedEmployees);
    onClose();
  };

  const handleCancel = () => {
    setSelectedIds(selectedEmployeeIds);
    setSearchTerm('');
    onClose();
  };

  // 부서별 그룹화
  const departments = [...new Set(filteredEmployees.map(emp => emp.department))].sort();

  return (
    <Dialog open={isOpen} onOpenChange={handleCancel}>
      <DialogContent className="max-w-[1400px] h-[80vh] flex flex-col p-0 overflow-hidden">
        <DialogHeader className="px-6 py-4 border-b flex-shrink-0">
          <DialogTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            {title}
          </DialogTitle>
          <DialogDescription>
            {title === '평가자 선택' 
              ? '설문을 진행할 평가자를 선택해주세요. 이름, 부서, 직급으로 검색할 수 있습니다.'
              : '평가를 받을 대상자를 선택해주세요. 이름, 부서, 직급으로 검색할 수 있습니다.'}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 px-6 py-4 flex-1 min-h-0">
          {/* 검색 바 */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="이름, 부서, 직급으로 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* 선택 정보 및 전체 선택 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox
                id="select-all"
                checked={selectedIds.length === filteredEmployees.length && filteredEmployees.length > 0}
                onCheckedChange={handleSelectAll}
              />
              <label htmlFor="select-all" className="text-sm cursor-pointer">
                전체 선택
              </label>
              <Badge variant="outline" className="ml-2">
                {selectedIds.length}명 선택됨
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              총 {filteredEmployees.length}명
            </p>
          </div>

          {/* 임직원 목록 */}
          <ScrollArea className="flex-1 min-h-0 pr-4">
            <div className="space-y-4 pr-2">
              {filteredEmployees.length === 0 ? (
                <div className="text-center py-6 text-muted-foreground">
                  <User className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">검색 결과가 없습니다</p>
                  <p className="text-xs mt-1">다른 검색어를 입력해보세요</p>
                </div>
              ) : (
                departments.map(department => {
                const deptEmployees = filteredEmployees.filter(emp => emp.department === department);
                return (
                  <div key={department} className="space-y-2">
                    <h4 className="text-sm text-muted-foreground border-b pb-1 sticky top-0 bg-background">
                      {department} ({deptEmployees.length}명)
                    </h4>
                    <div className="space-y-1">
                      {deptEmployees.map(employee => (
                        <div
                          key={employee.id}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent cursor-pointer transition-colors"
                          onClick={() => handleEmployeeToggle(employee.id)}
                        >
                          <Checkbox
                            checked={selectedIds.includes(employee.id)}
                            onCheckedChange={() => handleEmployeeToggle(employee.id)}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="text-sm truncate">{employee.name}</p>
                              <Badge variant="secondary" className="text-xs flex-shrink-0">
                                {employee.position}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground truncate">
                              {employee.email}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
                })
              )}
            </div>
          </ScrollArea>
        </div>

        <DialogFooter className="px-6 py-4 border-t flex-shrink-0">
          <Button variant="outline" onClick={handleCancel}>
            취소
          </Button>
          <Button onClick={handleConfirm}>
            선택 완료 ({selectedIds.length}명)
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}