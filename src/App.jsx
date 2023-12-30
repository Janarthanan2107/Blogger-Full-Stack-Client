import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Root, CreateBlog } from "./routes";
import { SingleBlog } from "./components";

import "./App.css";

// providing routers with respective components
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // error element
    // errorElement: ,

    // childrens for the root
    children: [
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
