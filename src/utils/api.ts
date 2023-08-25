import axios from "axios";

axios.defaults.baseURL = "https://opentdb.com/api.php";

export const api = {
  questions: {
    default: () => {
      return axios.get<OtdbResponse>("/", { params: { amount: 10 } });
    },
    custom: (params: Record<string, string>) => {
      return axios.get<OtdbResponse>("/", { params });
    },
  },
};
