import axios, { AxiosRequestConfig } from "axios";

export const HttpClient = axios.create({
  timeout: 90000,
  headers: {
    "Cache-Control": "no-store",
    responseType: "application/json",
  },
  baseURL: "https://soal.staging.id",
});

export const getDataImage = async <T = any>(
  url: string,
  config: AxiosRequestConfig = {}
) => {
  return await HttpClient.get<T>(`${url}`, { ...config })
    .then((response) => response)
    .catch((err) => {
      throw err;
    });
};

export const postData = async <T = any>(
  url: string,
  data = {},
  config: AxiosRequestConfig = {}
) => {
  return await HttpClient.post<T>(`${url}`, data, { ...config })
    .then((response) => response)
    .catch((err) => {
      throw err;
    });
};
