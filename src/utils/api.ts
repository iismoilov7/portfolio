import { BackendURL } from "@src/config";
import axios from "axios";

export const apiServer = axios.create({
  baseURL: BackendURL,
  timeout: 10000
});
