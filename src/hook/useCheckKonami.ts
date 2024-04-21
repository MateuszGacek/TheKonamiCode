import { useEffect, useState } from "react";

const useCheckKonami = (
  konamiCode: string,
  password: string,
  delay: number = 1
) => {
  const [showSecret, setShowSecret] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecret(false);
    }, delay * 1000);
    if (konamiCode.includes(password) && konamiCode.length === password.length)
      setShowSecret(true);

    return () => clearTimeout(timer);
  }, [konamiCode, password, delay]);

  return showSecret;
};

export default useCheckKonami;
