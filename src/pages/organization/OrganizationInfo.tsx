import "../../style/App.css";
import { Badge } from "../../components/ui/badge";

function OrganizationInfo() {
  return (
    <div className="OrganizationInfo">
      {/* TODO 기본 페이지 */}
      <h1 className="font-bold">
        회사 정보
        <Badge variant="outline">배찌</Badge>
      </h1>
    </div>
  );
}

export default OrganizationInfo;
