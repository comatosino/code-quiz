/**
 * React-specific entry point that automatically generates
 * hooks corresponding to the defined endpoints
 */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quizApi = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://opentdb.com",
  }),
  endpoints: (builder) => ({
    getQuestions: builder.query<OtdbResponse, IQuizParams>({
      query: (params) => ({ url: "/api.php", params }),
    }),
  }),
});

export const { useGetQuestionsQuery } = quizApi;
