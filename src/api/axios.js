import axios from "axios";

const api = axios.create({
  baseURL: "https://68aac5aa909a5835049cf59a.mockapi.io/rbac",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;