import axios from "axios";

export const apiUri: string = import.meta.env.VITE_BACKEND_URL;

export const apiServer = axios.create({
  baseURL: apiUri,
  timeout: 10000
});
