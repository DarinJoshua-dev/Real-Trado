import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "32f3b3b5f6mshcb15d2fb43b04cfp19f014jsn389245b504b0",
    },
  });
  return data;
};
