// src/api/auth/signup.js
import axiosInstance from "@/lib/axiosInstance";

export async function register({ name, phone, email, password, pinCode, role = "user" }) {
  const { data } = await axiosInstance.post("/auth/register", {
    name, phone, email, password, pinCode, role
  });
  return data;
}
