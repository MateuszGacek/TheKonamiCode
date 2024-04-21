import { useEffect, useState } from "react";

const useKeyEvent = (delay: number = 1) => {
  const [typedValue, setTypedValue] = useState<any[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypedValue([]);
    }, delay * 1000);
    const listeningWindow = (e: any) => {
      // Depending on the password, I can make regex conditions
      if (e.key === "Shift") {
        return;
      }
      if (e.key === "Escape") {
        setTypedValue([]);
        return;
      }
      setTypedValue((prevValue) => [...prevValue, e.key]);
    };
    window.addEventListener("keydown", listeningWindow);

    return () => {
      window.removeEventListener("keydown", listeningWindow);
      clearTimeout(timer);
    };
  });

  return typedValue.join("");
};

export default useKeyEvent;
