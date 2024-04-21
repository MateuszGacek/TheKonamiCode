import useKeyEvent from "../hook/useKeyEvent";
import { password } from "../store/password";
import useCheckKonami from "../hook/useCheckKonami";
import data from "../store/data.json";
import Issues from "./Issues";

const Listening: React.FC = () => {
  const konamiCode = useKeyEvent(5);
  const isCorrect = useCheckKonami(konamiCode, password, 15);

  return (
    <div>
      <Issues data={data} showIssues={isCorrect} />
    </div>
  );
};

export default Listening;
