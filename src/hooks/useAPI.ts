import axios, { AxiosResponse } from "axios";
import { CardType } from "components";

axios.defaults.baseURL = "http://localhost:3000/";

type TUseAPI = {
  getCards: () => Promise<AxiosResponse<CardType[], any>>;
  addCard: (card: CardType) => Promise<AxiosResponse<any, any>>;
};

const useAPI = (): TUseAPI => {
  const get = async (
    endpoint: string
  ): Promise<AxiosResponse<CardType[], any>> => {
    return axios
      .get(endpoint)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log({err})
        throw new Error(err);
      });
  };

  const post = async (
    endpoint: string,
    data: unknown
  ): Promise<AxiosResponse<any, any>> => {
    return axios
      .post(endpoint, data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  const getCards = async () => {
    return await get("cards/");
  };

  const addCard = async (card: CardType) => {
    return await post("cards/", card);
  };

  return { getCards, addCard };
};

export default useAPI;
