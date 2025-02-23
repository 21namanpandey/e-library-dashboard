import { useTokenStore } from "@/store";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = useTokenStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const login = async (data: { email: string; password: string }) => {
  return api.post("/api/users/login", data);
};

export const register = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return api.post("/api/users/register", data);
};

export const getBooks = async () => {
  return api.get("/api/books");
};

export const createBook = async (data: FormData) => {
  return api.post("/api/books", data, {
    headers: {
      "Content-Type": "multipart/fomr-data",
    },
  });
};
