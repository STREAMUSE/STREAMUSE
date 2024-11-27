import axios from "axios";

export const api = axios.create({
  baseURL: "survey/api/",
  headers: { "Content-Type": "application/json" },
});
