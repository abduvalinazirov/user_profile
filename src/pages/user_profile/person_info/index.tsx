import React, { useEffect, useState } from "react";
import "./style.css";

interface PersonInfoProps {
  status: "view" | "edit"; // Assuming status is a string, you can replace it with the actual type
  setStatus: React.Dispatch<React.SetStateAction<"view" | "edit">>; // Assuming setStatus is a function that sets a string
}

const PersonInfo: React.FC<PersonInfoProps> = ({ status, setStatus }) => {
  useEffect(() => {
    let segment__elements: HTMLDivElement[] = Array.from(document?.querySelectorAll(".payment_segments_wrapper .segment__element"));
    let segment__mask: HTMLDivElement | null = document.querySelector(".segment__element-mask");
    if (segment__mask) {
      segment__mask.style.width = segment__elements[0].offsetWidth + "px";
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
  }, []);
  return (
    <div className="person__info">
      <img src="/images/person.jpg" alt="person" className="person__image" />
      <h3 className="person__name">Abduvali Nazirov</h3>
      <div className="toggle__buttons">
        <div className="payment_segments_wrapper">
          <div className="segment__elements">
            <div className="segment__element-mask"></div>
            <button onClick={() => setStatus("view")} className={`segment__element ${status === "view" && "active"}`}>
              View
            </button>
            <button onClick={() => setStatus("edit")} className={`segment__element ${status === "edit" && "active"}`}>
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonInfo;
