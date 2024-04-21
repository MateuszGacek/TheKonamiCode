import useKeyEvent from "../hook/useKeyEvent";
import { password } from "../store/password";
import useCheckKonami from "../hook/useCheckKonami";
import SecretData from "./SecretData";

const Listening: React.FC = () => {
  const konamiCode = useKeyEvent(5);
  const isCorrect = useCheckKonami(konamiCode, password, 15);

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ea ad
        optio dignissimos totam pariatur eveniet, rerum qui labore quia tenetur
        voluptatum? Qui a ad in. Iure ipsum dolores rem!
      </p>
      {isCorrect ? <SecretData /> : <p>Any data/content e.t.c </p>}
    </>
  );
};

export default Listening;
