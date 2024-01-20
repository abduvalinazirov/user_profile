import PersonInfo from "./person_info";
import ProfileView from "./profile_view";
import ProfileEdit from "./profile_edit";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getUser } from "../../services/userApi";
import "./style.css";

const UserInfo = () => {
  const [status, setStatus] = useState<"view" | "edit">("view");
  const { id } = useParams();

  const { data, isLoading, refetch } = useQuery(["user", id], () => getUser(id));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user__profile">
      <div className="container">
        {data ? (
          <div className="user__profile__wrapper">
            <PersonInfo status={status} setStatus={setStatus} user={data} />
            <div className="profile__content">{status === "view" ? <ProfileView user={data} /> : <ProfileEdit user={data} refetch={refetch} />}</div>
          </div>
        ) : (
          <div>User not found</div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
