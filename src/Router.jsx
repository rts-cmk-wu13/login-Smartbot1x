import { createBrowserRouter } from "react-router";
import Layout from "./Layout";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import Sentences from "./pages/Sentences";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Login",
        element: <Login />,
      },

      {
        path: "Signup",
        element: <Signup />,
      },
      {
        path: "Sentences",
        element: <Sentences />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
