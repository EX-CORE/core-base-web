import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  useAnnouncementList,
  useUpdateAnnouncement,
  useCreateAnnouncement,
} from "src/services/announcement";

export default function NoticeEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const organizationId = 1;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 기존 공지사항 데이터 가져오기
  const { data: notices } = useAnnouncementList(organizationId);
  const updateMutation = useUpdateAnnouncement();
  const createMutation = useCreateAnnouncement();

  // 수정 모드일 경우 기존 데이터 불러오기
  useEffect(() => {
    if (id && notices) {
      const existingNotice = notices.find((notice) => notice.id === Number(id));
      if (existingNotice) {
        setTitle(existingNotice.title);
        setContent(existingNotice.content);
      }
    }
  }, [id, notices]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const req = {
      title,
      content,
    };

    try {
      if (id) {
        // 수정
        await updateMutation.mutateAsync({
          organizationId,
          announcementId: Number(id),
          req,
        });
      } else {
        // 새로 작성
        await createMutation.mutateAsync({
          organizationId,
          req,
        });
      }
      navigate("/home/notice");
    } catch (error) {
      console.error("Failed to save announcement:", error);
      // 에러 처리
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            {id ? "공지사항 수정" : "새 공지사항 작성"}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-700">제목</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="공지사항 제목을 입력하세요"
              className="w-full text-base"
            />
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-700">내용</label>
            <div className="h-[500px] border rounded-lg">
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
                className="h-[440px]"
                placeholder="공지사항 내용을 입력하세요"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/home/notice")}
              className="px-6"
            >
              취소
            </Button>
            <Button type="submit" className="px-6">
              {id ? "수정하기" : "작성하기"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
