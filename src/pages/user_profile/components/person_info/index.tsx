import React from "react";
import "./style.css";
import { IUser } from "../../../../types/data.models";
import useSearchQuery from "../../../../hooks/useSearchQuery";
import useSegmentEffect from "../../../../hooks/useSegmentEffect";

interface PersonInfoProps {
  status: "view" | "edit";
  setStatus: React.Dispatch<React.SetStateAction<"view" | "edit">>;
  user: IUser;
}

const PersonInfo: React.FC<PersonInfoProps> = ({ status, setStatus, user }) => {
  const { setQueryParam } = useSearchQuery();

  const handleUpdatePage = (newPage: "edit" | "view") => {
    setStatus(newPage);
    setQueryParam("page", newPage);
  };

  useSegmentEffect(status);

  return (
    <div className="person__info">
      <img src={user.image} alt="person" className="person__image" />
      <h3 className="person__name">{user?.name}</h3>
      <div className="toggle__buttons">
        <div className="segment__elements">
          <div className="segment__element-mask"></div>
          <button onClick={() => handleUpdatePage("view")} className={`segment__element ${status === "view" && "active"}`}>
            View
          </button>
          <button onClick={() => handleUpdatePage("edit")} className={`segment__element ${status === "edit" && "active"}`}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonInfo;
