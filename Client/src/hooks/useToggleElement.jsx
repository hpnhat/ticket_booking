import { useEffect, useRef } from "react";

const useToggleElement = (isOpen) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isOpen]);

  return { contentRef };
};

export default useToggleElement;
