// src/api/auth/login.js
import axiosInstance from "@/lib/axiosInstance";

export async function login({ email, password, role = "user" }) {
  const { data } = await axiosInstance.post("/auth/login", { email, password, role });
  return data; // expected: { accessToken, refreshToken, email, role, ... }
}
