import { useState } from "react";
import { RiQuillPenLine } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate,Link } from "react-router-dom";
import { useUserContext } from "../../../context/user.Context";

const Login = () => {
  const { loginUser, token, loggedInUser } = useUserContext();

  const initialFormDataValues = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormDataValues);

  let navigate = useNavigate();

  const formDataOnchangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log("token:", token);
  console.log("loggedIn:", loggedInUser);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("formData:", formData);
      await loginUser(formData);
      toast.success("Logged In Successful!");
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(loggedInUser));
      setTimeout(() => {
        navigate("/");
      }, 1000);
      setFormData(initialFormDataValues);
    } catch (error) {
      console.error("Something went wrong:", error);
      // Display the error message to the user
      toast.error(error || "Something went wrong!");
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <Toaster
        position="top-right"
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="logo-container flex justify-center">
          <RiQuillPenLine className="text-yellow-500 text-[50px]" />
          <p className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </p>
        </div>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={handleFormSubmit}
        >
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={formDataOnchangeHandler}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={formDataOnchangeHandler}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link
            to={"/signUp"}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2"
          >
            register now
          </Link>
        </p>
        <br />
        <div>
          <p className="flex justify-between flex-col gap-[1.025rem]">
            <span style={{ fontWeight: 600,color:"gold" }}>Blogger Credentials</span>
            <span><span className="block text-sm font-medium leading-6 text-gray-900">Username: Janarthanan</span></span>
            <span><span className="block text-sm font-medium leading-6 text-gray-900">Password: 12345678</span></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
