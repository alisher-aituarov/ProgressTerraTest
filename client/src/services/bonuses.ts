import axios from "axios";
import { BONUSES_ROUTE } from "../constants";
import { GetBonusesResponse } from "./types";

export const getBonuses = async (token: string) => {
  const { data } = await axios.get<GetBonusesResponse>(
    `${process.env.REACT_APP_BONUS_URL}/${BONUSES_ROUTE}/${token}`,
    {
      headers: {
        AccessKey: process.env.REACT_APP_ACCESS_KEY,
      },
    }
  );
  return data.data;
};
