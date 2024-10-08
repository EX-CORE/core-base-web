import { getCookieValue } from "src/lib/cookies";
import { cn } from "src/lib/utils";
import { useGetAnnouncementInfoList } from "src/services/dashboard";

import AnnouncementMenuItem from "./AnnouncementMenuItem";

type Props = {
  className?: string;
};

export default function AnnouncementMenuBox({ className }: Props) {
  const { data: announcementList } = useGetAnnouncementInfoList(
    getCookieValue("organizationId")
  );

  return (
    <div className={cn(className)}>
      <div>
        {announcementList ? (
          <>
            <div className="my-8 mx-10 flex gap-8 items-center">
              <span className="font-bold text-base">공지사항</span>
              <span className="text-base">더보기</span>
            </div>
            <div className="my-8 mx-10">
              {announcementList?.map(({ title, createdAt, content }) => (
                <AnnouncementMenuItem
                  title={title}
                  date={createdAt}
                  content={content}
                />
              ))}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
