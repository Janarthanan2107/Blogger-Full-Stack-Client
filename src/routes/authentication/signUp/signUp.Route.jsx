import { useState } from "react";
import { RiQuillPenLine } from "react-icons/ri";
import FileBase64 from "react-file-base64";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate,Link } from "react-router-dom";
import { useUserContext } from "../../../context/user.Context";

const SignUp = () => {
  // context functions
  const { addUser } = useUserContext();

  const initialFormDataValues = {
    username: "",
    email: "",
    phNumber: 0,
    image: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialFormDataValues);
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  let navigate = useNavigate();

  const formDataOnchangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Check for password match when updating either password or confirmPassword
    if (name === "password" || name === "confirmPassword") {
      setPasswordMatchError(
        (prevData) => prevData.password !== prevData.confirmPassword
      );
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError(true);
      return;
    }
    try {
      console.log("formData:", formData);
      await addUser(formData);
      toast.success("Registration Successful!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
      setFormData(initialFormDataValues);
    } catch (error) {
      console.error("Something went wrong:", error);
      // Display the error message to the user
      toast.error(error || "Something went wrong!");
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-1 lg:px-8">
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
            Sign up your account
          </p>
        </div>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
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
                required
                onChange={formDataOnchangeHandler}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Image
              </label>
              <div className="mt-2">
                <FileBase64
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  //   value={formData.image}
                  //   required
                  onChange={formDataOnchangeHandler}
                  onDone={({ base64 }) => {
                    setFormData({ ...formData, image: base64 });
                  }}
                  className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-500 file:text-white"
                />
              </div>
            </div>

            <div>
              {!formData.image ? (
                <svg
                  className="h-16 w-16 text-gray-300"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <img
                  src={formData.image}
                  alt=""
                  className="h-16 w-16 rounded-full"
                />
              )}
            </div>
          </div>

          <div className="flex justify-between items-center gap-3">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  required
                  onChange={formDataOnchangeHandler}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phNumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  id="phNumber"
                  name="phNumber"
                  value={formData.phNumber}
                  required
                  onChange={formDataOnchangeHandler}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>
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
                required
                onChange={formDataOnchangeHandler}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                required
                onChange={formDataOnchangeHandler}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
              />
              {passwordMatchError && (
                <p className="mt-1 text-sm text-red-500">
                  Passwords do not match.
                </p>
              )}
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

        <p className="mt-6 text-center text-sm text-gray-500">
          already a blogger?
         <Link
            to={"/login"}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2"
          >
            login now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
