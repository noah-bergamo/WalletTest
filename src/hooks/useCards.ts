import { useContext } from "react";
import { CardContext } from "contexts/CardContext";

const useCards = () => {
  const cardsContext = useContext(CardContext);

  return cardsContext;
};

export default useCards;
