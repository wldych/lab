import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserContextProvider from "./components/UserContextProvider";
import Home from "./routers/Home";
import RequireAuth from "./components/RequireAuth";
import Notes from "./routers/Notes";
import Layout from "./routers/Layout";
import NewNote from "./routers/CreateNote";
import Error from "./routers/Error";
import EditNote from "./routers/EditNote";
import ViewNote from "./routers/ViewNote";
import SignUp from "./routers/SignUp";
import Login from "./routers/Login";
import { loader as noteLoader } from "../src/routers/ViewNote";
import { loader as notesLoader } from "../src/routers/Notes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <RequireAuth>
            <Home />
          </RequireAuth>
        ),
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/notes",
        loader: notesLoader,
        element: <Notes />,
      },
      {
        path: "/notes/create",
        element: <NewNote />,
      },
      {
        path: "/notes/edit/:id",
        element: <EditNote />,
      },
      {
        path: "/notes/view/:id",
        loader: noteLoader,
        element: <ViewNote />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
