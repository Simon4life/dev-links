import React, { useState, useEffect } from "react";
import { Root, ErrorPage, AddNewLink, ProfilePage, PreviewPage, Auth, HomePage } from "./routes";
import { RouterProvider, createBrowserRouter, redirect, Navigate } from "react-router-dom";
import { useUserContext } from "./context/user_context";

const App = () => {
  const { authAction, user, } = useUserContext()

  const authLoader = () => {
    if (!user) {
      return redirect("/auth");
    }
    return null
  }


  const ProtectedRoute = ({ children }) => {
    // const { user, loading } = useAuth();
    const loading = false;
    // const user = {
    //   name: "simon"
    // }
    if (loading) return <p>Loading...</p>;
    return user ? children : <Navigate to="/auth" />;
  };

  let router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Root /></ProtectedRoute>,
      // errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          // loader: async () => {
          //   if (!user) {
          //     return redirect("/auth");
          //   }

          //   return null;
          // },
          element: <AddNewLink />,
        },
        {
          path: "profile",
          // loader: authLoader,
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