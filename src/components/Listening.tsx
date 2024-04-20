import useKeyEvent from "../hook/useKeyEvent";
import { password } from "../store/password";
import checkKonami from "../utils/checkKonami";

const Listening: React.FC = () => {
  const konamiCode = useKeyEvent();
  const isCorrect = checkKonami(konamiCode, password);

  return <p>Listening</p>;
};

export default Listening;
