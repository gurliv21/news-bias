import axios from "axios"


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
    "Content-Type": "application/json",
  },
})

export const apiClient = {
  get: async <T>(url: string) => {
    const res = await api.get<T>(url);
    return res.data;
  },

  post: async <T>(url: string, data: unknown) => {
    const res = await api.post<T>(url, data);
    return res.data;
  },

  put: async <T>(url: string, data: unknown) => {
    const res = await api.put<T>(url, data);
    return res.data;
  },

  delete: async <T>(url: string) => {
    const res = await api.delete<T>(url);
    return res.data;
  },
};