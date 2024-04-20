const checkKonami = (konamiCode: string, password: string) => {
  if (konamiCode.includes(password) && konamiCode.length === password.length) {
    console.log("correct");
  }
};

export default checkKonami;
