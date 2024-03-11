import React, { Children } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Nav from "./Nav";
import Register from "./RegistrationPage";
import StudList from "./StudList";
import HomeLayout from "./HomeLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <HomeLayout /> },
        { path: "home", element: <HomeLayout /> },
        { path: "register", element: <Register /> },
        { path: "studs", element: <StudList /> },
        { path: "about", element: "" },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;

function Layout() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr]">
      <Nav />
      <div className="bg-white grid ">
        <Outlet />
      </div>
    </div>
  );
}
