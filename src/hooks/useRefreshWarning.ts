import { useEffect } from "react";

// @ts-ignore
const useRefreshWarning = (message) => {
  useEffect(() => {
    if (!message) return;

    // @ts-ignore
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = message; 
      return message; 
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [message]);
};

export default useRefreshWarning;