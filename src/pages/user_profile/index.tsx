import "./style.css";
import PersonInfo from "./person_info";
import ProfileView from "./profile_view";
import ProfileEdit from "./profile_edit";
import { useState } from "react";

const UserInfo = () => {
  const [status, setStatus] = useState<"view" | "edit">("view");

  return (
    <div className="user__profile">
      <div className="container">
        <div className="user__profile__wrapper">
          <PersonInfo status={status} setStatus={setStatus} />
          <div className="profile__content">{status === "view" ? <ProfileView /> : <ProfileEdit />}</div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
