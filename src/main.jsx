import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BlogContextProvider } from "./context/blog.Context.jsx";
import { UserContextProvider } from "./context/user.Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <BlogContextProvider>
      <App />
    </BlogContextProvider>
  </UserContextProvider>
);
