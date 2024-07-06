import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (data: { email: string; password: string }) => {
  return api.post("/api/users/login", data);
};
