import { useEffect, useState } from "react";

const useKeyEvent = () => {
  const [typedValue, setTypedValue] = useState<any[]>([]);

  useEffect(() => {
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
    };
  }, []);

  return typedValue.join("");
};

export default useKeyEvent;
