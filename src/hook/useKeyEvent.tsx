import { useEffect, useState } from "react";

const useKeyEvent = () => {
  const [typedValue, setTypedValue] = useState<any[]>([]);

  useEffect(() => {
    const listeningWindow = (e: any) => {
      setTypedValue((prevValue) => [...prevValue, e.key]);
    };
    window.addEventListener("keydown", listeningWindow);

    return () => {
      window.removeEventListener("keydown", listeningWindow);
    };
  }, []);
  return typedValue;
};

export default useKeyEvent;
