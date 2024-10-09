import { cn } from "src/lib/utils";
import { Button } from "../ui/button";
import { useGetUserInfo } from "src/services/profile";

type Props = {
  className?: string;
  title: string;
  date: string;
  content: string;
};

export default function AnnouncementMenuItem({
  className,
  title,
  date,
  content,
}: Props) {
  return (
    <div className={cn(className)}>
      <div>
        <div className="my-6 block p-6 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <div className="flex gap-7 mb-2">
            <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="font-thin">{date}</p>
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400 whitespace-pre-line">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
