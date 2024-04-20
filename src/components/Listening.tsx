import useKeyEvent from "../hook/useKeyEvent";
import { password } from "../store/password";
import checkKonami from "../utils/checkKonami";
import data from "../store/data.json";
import Issues from "./Issues";

const Listening: React.FC = () => {
  const konamiCode = useKeyEvent();
  const isCorrect = checkKonami(konamiCode, password);

  return (
    <div>
      <Issues data={data} showIssues={isCorrect} />
    </div>
  );
};

export default Listening;
