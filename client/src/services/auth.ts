import axios from "axios";
import { OBTAIN_TOKEN_ROUTE } from "../constants";
import { ObtainTokenResponse } from "./types";

export const obtainToken = async () => {
  const response = await axios.post<ObtainTokenResponse>(
    `${process.env.REACT_APP_AUTH_URL}/${OBTAIN_TOKEN_ROUTE}`,
    {
      idClient: process.env.REACT_APP_CLIENT_ID,
      accessToken: "",
      paramName: "device",
      paramValue: process.env.REACT_APP_DEVICE_ID,
      latitude: 0,
      longitude: 0,
      sourceQuery: 0,
    },
    {
      headers: {
        AccessKey: process.env.REACT_APP_ACCESS_KEY,
      },
    }
  );
  return response.data;
};
