import axios from "axios";

const customFetch = () => {
  const accessToken = JSON.parse(localStorage.getItem("user")).accessToken;
  return axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": `Bearer ${accessToken}`
    },
    withCredentials: true,
  });
}

export default customFetch;