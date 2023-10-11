import axios from 'axios';

axios.defaults.baseURL = 'https://opentdb.com/api.php';

export const api = {
  questions: {
    default: async () => {
      const response = await axios.get<OtdbResponse>('/', { params: { amount: 10 } });
      return response.data.results;
    },
    custom: async (params: IQuizParams) => {
      const response = await axios.get<OtdbResponse>('/', { params });
      return response.data.results;
    },
  },
};
