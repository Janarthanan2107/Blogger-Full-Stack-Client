// basic functions for context
import { createContext, useReducer, useContext, useEffect } from "react";
import axios from "axios";
import { userReducer } from "../reducer/reducer";
import { config } from "../constants/config";

// create the context
const UserContext = createContext();

// initial values
const initialValues = {
  users: [],
  singleUser: "",
};

// create the context provider
const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialValues);

  //   get all users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(config.url + "user");
      console.log("Fetched Data:", response.data.data);
      dispatch({ type: "FETCH_USERS", payload: response.data });
    } catch (error) {
      console.error("Error fetching users:", error.response.data);
    }
  };

  const addUser = async (newUser) => {
    try {
      const response = await axios.post(config.url + "user", newUser);
      console.log("Added Data:", response.data.data);
      dispatch({ type: "ADD_USER", payload: response.data });
    } catch (error) {
      console.error("Error fetching users:", error.response.data);
    }
  };

  //   assign the values
  const values = {
    ...state,
    fetchUsers,
    addUser,
  };

  return (
    // pass the values
    <UserContext.Provider value={values}>{children}</UserContext.Provider>
  );
};

// custom hooks
const useUserContext = () => {
  // note: custom hook is a function so we need to return the useContext
  return useContext(UserContext);
};

export { UserContextProvider, useUserContext };
