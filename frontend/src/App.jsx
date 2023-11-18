import React, {useState, useEffect} from "react";
import { Root, ErrorPage, AddNewLink, ProfilePage, PreviewPage, Auth, HomePage, VerifyEmail} from "./routes";
import { RouterProvider, createBrowserRouter, redirect, } from "react-router-dom";
import { useUserContext } from "./context/user_context";

const App = () => {
  const {loginUser, user, registerUser} = useUserContext()

  const authLoader = () => {
    if(!user) {
      return redirect("/auth");
    }
    return null
  }
  

  let router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          loader: async () => {
            if (!user) {
              return redirect("/auth");
            }
            
            return null;
          },
          element: <AddNewLink />,
        },
        {
          path: "profile",
          loader: authLoader,
          element: <ProfilePage />,
        },
      ],
    },
    {
      path: "/landing",
      element: <HomePage />,
    },
    {
      path: "/preview/:userId",
      element: <PreviewPage />,
    },
    {
      path: "/auth",
      element: <Auth />,
    },
    {
      path: "/verify",
      action: async ({ params, request }) => {
        let formData = await request.formData();
        const intent = formData.get("intent");
        if (intent === "login") {
          const email = formData.get("email");
          const password = formData.get("password");
          loginUser({ email, password });
          return redirect("/");
        } else if (intent === "register") {
          const email = formData.get("email");
          const password = formData.get("password");
          const firstName = formData.get("firstName");
          const lastName = formData.get("lastName");
          console.log(email, password, firstName, lastName);
          registerUser({email, password, firstName, lastName});
        }
        return null;
      },
      element: <VerifyEmail/>,
    },
  ]);
  return <RouterProvider router={router} />;
}


export default App