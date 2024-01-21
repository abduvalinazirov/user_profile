import PersonInfo from "./components/person_info";
import ProfileView from "./components/profile_view";
import ProfileEdit from "./components/profile_edit";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getUser } from "../../services/userApi";
import useSearchQuery from "../../hooks/useSearchQuery";
import "./style.css";
import NotFound from "../not_found";

const UserInfo = () => {
  const { id } = useParams();
  const [status, setStatus] = useState<"view" | "edit">("view");
  const { getQueryParam } = useSearchQuery();
  const page = getQueryParam("page");

  useEffect(() => {
    setStatus(page === "view" || page === "edit" ? page || "view" : "view");
  }, [page]);

  const { data, isLoading, refetch, isError } = useQuery(["user", id], () => getUser(id));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <NotFound />;
  }

  return (
    <div className="user__profile">
      <div className="container">
        <div className="user__profile__wrapper">
          <PersonInfo status={status} setStatus={setStatus} user={data} />
          <div className="profile__content">{status === "view" ? <ProfileView user={data} /> : <ProfileEdit user={data} refetch={refetch} />}</div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
