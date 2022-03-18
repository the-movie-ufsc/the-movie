import axios from "axios";

export function getLocal() {
  return localStorage.getItem("userMovie");
}

export async function getAuthUser() {
  try {
    let userLocal = JSON.parse(getLocal());
    const response = await axios.get(`http://localhost:8000/api/user/${userLocal.email}`);
    return response?.data;
  } catch (e) {
    return null;
  }
}
