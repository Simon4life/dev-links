import React, { useState, useEffect } from "react";
import { Root, ErrorPage, AddNewLink, ProfilePage, PreviewPage, Auth, HomePage } from "./routes";
import { RouterProvider, createBrowserRouter, redirect, } from "react-router-dom";
import { useUserContext } from "./context/user_context";

const App = () => {
  const { authAction, user, } = useUserContext()

  const authLoader = () => {
    if (!user) {
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
      action: authAction
    },
  ]);
  return <RouterProvider router={router} />;
}


export default App