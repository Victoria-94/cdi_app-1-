import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // cambia a tu URL de backend si es distinta
  headers: {
    "Content-Type": "application/json",
  },
});

const apiService = {
  getAll: async <T>(endpoint: string): Promise<T> => {
    const response = await api.get<T>(endpoint);
    return response.data;
  },

  getById: async <T>(endpoint: string, id: string): Promise<T> => {
    const response = await api.get<T>(`${endpoint}/${id}`);
    return response.data;
  },

  create: async <T>(endpoint: string, data: T): Promise<T> => {
    const response = await api.post<T>(endpoint, data);
    return response.data;
  },

  update: async <T>(endpoint: string, id: string, data?: T): Promise<T> => {
    const response = await api.put<T>(`${endpoint}/${id}`, data);
    return response.data;
  },

  delete: async (endpoint: string, id: string): Promise<void> => {
    await api.delete(`${endpoint}/${id}`);
  },
};

export default apiService;
