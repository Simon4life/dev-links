import React, { useContext, useReducer, useEffect } from "react";
import customFetch from "../utils/customFetch"
import reducer from "../reducers/user_reducer";
import { redirect } from "react-router-dom";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoading: false,
  errorMessage: null,
};

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const registerUser = async (userInfo) => {
    try {
      const response = await customFetch().post(
        "/api/v1/auth/register",
        userInfo
      );
      console.log(userInfo)
      console.log(response);
      return redirect("/")

    } catch (error) {
      console.log(error);
    }

  }

  const authAction = async ({ request }) => {
    const formData = await request.formData();
    const mode = formData.get('mode')

    if (mode === 'login') {
      // login logic
      const email = userData.get("email")
      const password = userData.get("password")
      return loginUser({ email, password });
    } else if (mode === 'register') {
      const firstName = formData.get("firstName");
      const lastName = formData.get("lastName");
      const email = formData.get("email");
      const password = formData.get("password");
      return registerUser({ firstName, lastName, email, password });
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

  const loginUser = async ({ userInfo }) => {
    // try {
    //   const response = await customFetch().post("/api/v1/auth/login", userData);
    //   const data = response.data.user;
    //   localStorage.setItem("user", JSON.stringify(data));
    //   dispatch({type: "LOGIN_USER", payload: data})
    // } catch (error) {
    //   console.log(error);
    //   return null;
    // }
    try {
      const response = await customFetch().post("/api/v1/auth/login", { ...userInfo });
      const data = response.data.user;
      console.log(data)
      dispatch({ type: "LOGIN_USER", payload: { user: { name: "simon" } } })
      return redirect('/')
    } catch (error) {
      return error;
    }
  }

  return (
    <UserContext.Provider value={{ ...state, registerUser, authAction, loginUser, updateUserProfile }}>
      {children}
    </UserContext.Provider>
  );

}

export const useUserContext = () => {
  return useContext(UserContext);
};