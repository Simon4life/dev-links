import React, {useContext, useReducer, useEffect} from "react";
import customFetch from "../utils/customFetch"
import reducer from "../reducers/user_reducer";


const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoading: false,
  errorMessage: null,
};

const UserContext = React.createContext();

export const UserProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const registerUser = async (userData) => {
    try {
      const response = await customFetch.post(
        "/api/v1/auth/register",
        userData
      );
      
      // localStorage.setItem("user", JSON.stringify(data));
      // dispatch({ type: "LOGIN_USER", payload: data });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const updateUserProfile = async (userInfo) => {
    try {
      const response = await customFetch(state.user.accessToken).post(
        "/api/v1/profile",
        userInfo,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
   console.log(response)
    } catch (error) {
      console.log(error);
    }
  }

  const loginUser = async (userData) => {
    try {
      const response = await customFetch.post("/api/v1/auth/login", userData);
      const data = response.data.user;
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({type: "LOGIN_USER", payload: data})
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  return (
    <UserContext.Provider value={{ ...state, registerUser, loginUser, updateUserProfile}}>
      {children}
    </UserContext.Provider>
  );

}

export const useUserContext = () => {
  return useContext(UserContext);
};