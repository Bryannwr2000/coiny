import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const newsApiHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "a2788d85b7msh0d7e7791008e6a4p15137ejsn1308a036f98b",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

// const searchParams = {
//   q: "crypto",
//   freshness: "Day",
//   textFormat: "Raw",
//   safeSearch: "Off",
// };

const baseUrl = "https://bing-news-search1.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: newsApiHeaders });

const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export default cryptoNewsApi;
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
