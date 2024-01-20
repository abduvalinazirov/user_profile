import React, { useEffect } from "react";
import "./style.css";
import { IUser } from "../../../../types/data.models";
import useSearchQuery from "../../../../hooks/useSearchQuery";

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

  useEffect(() => {
    let segment__elements: HTMLDivElement[] = Array.from(document?.querySelectorAll(".segment__elements .segment__element"));
    let segment__mask: HTMLDivElement | null = document.querySelector(".segment__element-mask");
    if (segment__mask) {
      segment__mask.style.width = segment__elements[0].offsetWidth + "px";
      if (status === "view") {
        segment__mask.style.left = 10 + "px";
      } else {
        segment__mask.style.left = +segment__elements[0].offsetWidth + 10 + "px";
      }
    }
    if (segment__elements?.length) {
      segment__elements.forEach((item, index) => {
        item.addEventListener("click", (e) => {
          if (index === 1 && segment__mask) {
            segment__mask.style.width = +item.offsetWidth + "px";
            segment__mask.style.left = +segment__elements[0].offsetWidth + 10 + "px";
          }
          if (index === 0 && segment__mask) {
            segment__mask.style.width = item.offsetWidth + "px";
            segment__mask.style.left = 10 + "px";
          }
        });
      });
    }
  }, [status]);
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
