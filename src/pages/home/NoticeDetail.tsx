import { Button } from "src/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "src/components/ui/card";
import {
  useAnnouncementList,
  useDeleteAnnouncement,
} from "src/services/announcement";

// 임시 데이터 - API 연동 시 제거
const tempNotice = {
  id: "1",
  title: "시스템 점검 안내",
  content: `<p>2024년 4월 1일 새벽 2시부터 4시까지 시스템 점검이 있을 예정입니다.</p>
            <p>점검 내용:</p>
            <ul>
              <li>서버 안정화 작업</li>
              <li>보안 업데이트</li>
              <li>성능 개선</li>
            </ul>`,
  createdAt: "2024-03-25T09:00:00",
};

export default function NoticeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const organizationId = 1;

  const isManager = true;

  const { data: notices } = useAnnouncementList(organizationId);
  const notice = notices?.find((n) => n.id === Number(id));

  const deleteMutation = useDeleteAnnouncement();

  const handleDelete = async () => {
    try {
      await deleteMutation.mutateAsync({
        organizationId,
        announcementId: Number(id),
      });
      navigate("/home/notice");
    } catch (error) {
      console.error("Failed to delete announcement:", error);
      // 에러 처리 로직 추가
    }
  };

  if (!notice) return <div>Loading...</div>;

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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Card className="p-6">
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h1 className="text-2xl font-bold mb-2">{notice.title}</h1>
            <div className="text-sm text-gray-500">
              {formatDate(notice.createdAt)}
            </div>
          </div>

          <div
            className="prose max-w-none py-4"
            dangerouslySetInnerHTML={{ __html: notice.content }}
          />

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={() => navigate("/home/notice")}>
              목록으로
            </Button>
            {isManager && (
              <>
                <Button
                  variant="outline"
                  onClick={() => navigate(`/home/notice/${id}/edit`)}
                >
                  수정
                </Button>
                <Button variant="destructive" onClick={handleDelete}>
                  삭제
                </Button>
              </>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
