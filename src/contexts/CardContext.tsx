import React, { PropsWithChildren, createContext, useState } from "react";
import { CardType } from "components";
import uuid from "react-native-uuid";
import useAPI from "hooks/useAPI";

type TCardContext = {
  cards: CardType[];
  addCard: (card: CardType) => void;
  getCards: () => Promise<CardType[]>;
};

export const CardContext = createContext<TCardContext>({} as TCardContext);

export const CardProvider = ({ children }: PropsWithChildren) => {
  const api = useAPI();
  const [cards, setCards] = useState<CardType[]>([]);

  const addCard = (card: CardType) => {
    const id = uuid.v4().toString();
    const cardWithID = { ...card, id };
    setCards((state) => [...state, cardWithID]);
    api.addCard(cardWithID);
  };

  const getCards = async (noAPICall: boolean = false) => {
    if (noAPICall) return cards;

    const response = await api.getCards();
    setCards(response.data);
    return response.data;
  };

  return (
    <CardContext.Provider value={{ cards, addCard, getCards }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;
