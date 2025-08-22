import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://55f39cedf1e9.ngrok-free.app",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if(token) {
        config.headers['Authorization'] = 'Bearer ${token}';
    }
    return config;
});

export default axiosInstance;