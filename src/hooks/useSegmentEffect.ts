import { useEffect } from "react";

const useSegmentEffect = (status: "view" | "edit") => {
  useEffect(() => {
    const segmentElements = Array.from(document?.querySelectorAll(".segment__elements .segment__element")) as HTMLDivElement[];
    const segmentMask = document.querySelector(".segment__element-mask") as HTMLDivElement | null;

    if (segmentMask) {
      const index = status === "view" ? 0 : 1;
      segmentMask.style.width = segmentElements[index].offsetWidth + "px";
      segmentMask.style.left = (index === 0 ? 10 : +segmentElements[0].offsetWidth + 10) + "px";
    }

    const handleClick = (index: number) => () => {
      if (index === 0 || index === 1) {
        if (segmentMask) {
          segmentMask.style.width = +segmentElements[index].offsetWidth + "px";
          segmentMask.style.left = (index === 0 ? 10 : +segmentElements[0].offsetWidth + 10) + "px";
        }
      }
    };

    segmentElements.forEach((item, index) => {
      item.addEventListener("click", handleClick(index));
    });

    return () => {
      segmentElements.forEach((item, index) => {
        item.removeEventListener("click", handleClick(index));
      });
    };
  }, [status]);
};

export default useSegmentEffect;
