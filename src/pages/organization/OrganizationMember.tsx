import "../../style/App.css";
import { Badge } from "../../components/ui/badge";

function OrganizationMember() {
  return (
    <div className="OrganizationInfo">
      {/* TODO 기본 페이지 */}
      <h1 className="font-bold">
        그룹 구성원 관리
        <Badge variant="outline">배찌</Badge>
      </h1>
    </div>
  );
}

export default OrganizationMember;
