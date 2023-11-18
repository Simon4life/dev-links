import axios from "axios";

const getUserToken = () => {
  let user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(localStorage.getItem("user")).accessToken;
  }
  return null;
};

const token = getUserToken()

const CustomFetch = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    "Authorization": `Bearer ${token}`,
  },
  withCredentials: true,
});

export default CustomFetch;