import React, { useContext, useReducer, useEffect } from "react";
import customFetch from "../utils/customFetch"
import reducer from "../reducers/user_reducer";
import { redirect } from "react-router-dom";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoading: true,
  errorMessage: null,
};

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);



  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const res = await customFetch().get("/api/v1/auth/get-user")
  //       if (res.statusText === "OK") {
  //         dispatch({ type: "GET_USER", payload: res.data.user })
  //       } else {
  //         dispatch({ type: "GET_USER", payload: null })
  //       }
  //     } catch (err) {
  //       dispatch({ type: "GET_USER", payload: null })
  //     } finally {
  //       dispatch({ type: "TOGGLE_LOADING" });
  //     }

  //   }
  //   fetchUser();
  // }, [])

  const registerUser = async (userInfo) => {
    try {
      await customFetch().post(
        "/api/v1/auth/register",
        userInfo
      ).then((value) => {
        dispatch({ type: "REGISTER_USER", payload: value.data.user })
        
        localStorage.setItem("user", JSON.stringify(value.data.user))
      })
      return redirect("/");
    } catch (error) {
      console.log(error);
    }

  }

  const authAction = async ({ request }) => {
    console.log(initialState)
    const formData = await request.formData();
    const mode = formData.get('mode')
    if (mode === 'login') {
      // login logic
      const email = formData.get("email")
      const password = formData.get("password")
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

  const loginUser = async (userInfo) => {
    try {
      const response = await customFetch().post("/api/v1/auth/login", userInfo);
      dispatch({ type: "REGISTER_USER", payload: response.data.user })
      localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken))
      localStorage.setItem("user", JSON.stringify(response.data.user))
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