import { Button } from "src/components/ui/button";
import { Card, CardContent, CardHeader } from "src/components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAnnouncementList } from "src/services/announcement";

interface NoticeItem {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

const tempNotices: NoticeItem[] = [
  {
    id: "1",
    title: "시스템 점검 안내",
    content:
      "2024년 4월 1일 새벽 2시부터 4시까지 시스템 점검이 있을 예정입니다.",
    createdAt: "2024-03-25T09:00:00",
  },
];

export default function Notice() {
  const navigate = useNavigate();
  const organizationId = 1; // 실제로는 context나 props에서 받아와야 함
  const { data: notices, isLoading } = useAnnouncementList(organizationId);

  const isManager = true;

  if (isLoading) return <div>Loading...</div>;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">공지사항</h1>
        {isManager && (
          <Button onClick={() => navigate("/home/notice/new")}>
            공지사항 작성
          </Button>
        )}
      </div>

      <div className="grid gap-4">
        {notices?.map((notice) => (
          <Card
            key={notice.id}
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => navigate(`/home/notice/${notice.id}/detail`)}
          >
            <CardHeader className="flex flex-row justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{notice.title}</h3>
                <p className="text-sm text-gray-500">
                  {formatDate(notice.createdAt)}
                </p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
