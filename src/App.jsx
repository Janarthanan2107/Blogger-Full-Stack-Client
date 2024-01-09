import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Root, CreateBlog, NotFound, Login, SignUp } from "./routes";
import { SingleBlog } from "./components";

import "./App.css";

// providing routers with respective components
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // error element
    errorElement: <NotFound />,

    // childrens for the root
    children: [
      // blog
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/createBlog",
        element: <CreateBlog />,
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />,
      },
      {
        path: "/createBlog/:id",
        element: <CreateBlog />,
      },

      // user
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
