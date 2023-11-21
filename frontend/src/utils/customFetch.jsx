import axios from "axios";


const customFetch = (token = null) => {
 
  return axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    "Authorization": `Bearer ${token}`,
  },
  withCredentials: true,
});
}

export default customFetch;