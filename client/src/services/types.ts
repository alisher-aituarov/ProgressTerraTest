export type ObtainTokenResponse = {
  accessToken: string;
  result: {
    codeResult: number;
    duration: number;
    idLog: string;
    message: string;
    messageDev: string | null;
    status: number;
  };
};

export type GetBonusesResponse = {
  resultOperation: {
    status: number;
    message: string;
    messageDev: string | null;
    codeResult: number;
    duration: number;
    idLog: string;
  };
  data: {
    typeBonusName: string;
    currentQuantity: number;
    forBurningQuantity: number;
    dateBurning: string;
  };
};
