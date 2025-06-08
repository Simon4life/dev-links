import axios from "axios";


const customFetch = (token = null) => {
  const accessToken = JSON.parse(localStorage.getItem("accessToken"))
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