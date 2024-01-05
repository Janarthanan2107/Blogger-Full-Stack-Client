// basic functions for context
import { createContext, useReducer, useContext, useEffect } from "react";
import axios from "axios";
import blogReducer from "../reducer/reducer";
import { config } from "../constants/config";

// create the context
const BlogContext = createContext();

// initial values
const initialValues = {
  blogs: [],
  singleBlog: "",
  loading: false,
  error: null,
};

// create the context provider
const BlogContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, initialValues);

  const fetchBlogs = async (url) => {
    try {
      const response = await axios.get(url);
      console.log("Fetched Data:", response.data.data); // Log the fetched data
      dispatch({ type: "FETCH_BLOGS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_BLOGS_ERROR", payload: error.message });
    }
  };

  useEffect(() => {
    fetchBlogs(config.url);
  }, []);

  const addBlog = async (newBlog) => {
    try {
      const response = await axios.post(config.url, newBlog);
      dispatch({ type: "ADD_BLOG", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  const getSingleBlog = async (blogId) => {
    try {
      const response = await axios.get(`${config.url}/${blogId}`);
      // console.log(response);
      dispatch({ type: "GET_SINGLE_BLOG", payload: response.data.data });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSingleBlog = async (blogId) => {
    console.log(blogId);
    try {
      const response = await axios.delete(`${config.url}/${blogId}`);
      console.log(response);
      dispatch({ type: "DELETE", payload: response.data.data });
    } catch (error) {
      console.log(error);
    }
  };

  //   assign the values
  const values = {
    ...state,
    fetchBlogs,
    addBlog,
    getSingleBlog,
    deleteSingleBlog,
  };

  return (
    // pass the values
    <BlogContext.Provider value={values}>{children}</BlogContext.Provider>
  );
};

// custom hooks
const useBlogContext = () => {
  // note: custom hook is a function so we need to return the useContext
  return useContext(BlogContext);
};

export { BlogContextProvider, useBlogContext };
