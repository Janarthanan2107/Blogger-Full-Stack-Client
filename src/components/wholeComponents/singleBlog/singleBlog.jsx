import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useBlogContext } from "../../../context/blog.Context";
import { MdDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BiComment } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";

const SingleBlog = () => {
  const { id } = useParams();

  const { getSingleBlog, singleBlog, deleteSingleBlog, updateBlog } =
    useBlogContext();

  let navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchSingleBlog = async (id) => {
    try {
      await getSingleBlog(id);
      setLoading(false); // Set loading to false after fetching data
    } catch (error) {
      console.error(error);
    }
  };

  // Retrieve the user object from localStorage
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const [commentText, setCommentText] = useState("");
  const [commentLoading, setCommentLoading] = useState();

  const handleChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Login before you add your idea's");
      return;
    }

    setCommentLoading(true);

    try {
      const newComment = {
        text: commentText,
        author: user.username,
        authorImage: user.image,
        date: new Date().toISOString(),
      };

      // Add the new comment to the existing comments array
      const updatedBlogData = {
        ...singleBlog,
        comments: [...singleBlog.comments, newComment],
      };

      // Clear the commentText state after submitting
      setCommentText("");

      // Make the API request (replace with your actual API call)
      await updateBlog(id, updatedBlogData);

      toast.success("Comment added successfully");
    } catch (error) {
      console.error("Error adding comment:", error);
      toast.error("Error adding comment. Please try again.");
    } finally {
      setCommentLoading(false);
    }
  };

  const [commentDialog, setCommentDialog] = useState(false);
  const commentDialogHandler = () => {
    setCommentDialog(!commentDialog);
  };

  const closeCommentDialog = () => {
    setCommentDialog(false);
  };

  const deleteHandler = async (id) => {
    try {
      await deleteSingleBlog(id);
      toast.success("Data Successfully deleted");
      // Redirect to another page after successful deletion
      setTimeout(() => {
        navigate("/"); // Replace "/blogs" with the path you want to redirect to
      }, 1000);
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const updateBlogHandler = (id) => {
    navigate(`/createBlog/${id}`);
  };

  const originalDateString = singleBlog.datePublished;
  const originalDate = new Date(originalDateString);

  // Format the date in a human-readable way
  const formattedDate = originalDate.toLocaleDateString(); // Change according to your requirements
  const formattedTime = originalDate.toLocaleTimeString(); // Change according to your requirements

  // The rest of your component logic goes here

  useEffect(() => {
    fetchSingleBlog(id);
  }, [id, commentLoading]);

  return (
    <>
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

      {loading ? (
        <>
          <div className="p-4 w-[850px] h-[200px] mx-auto">
            <div className="animate-pulse flex flex-col space-x-4">
              <div className="rounded-full bg-slate-700 h-10 w-10 my-3 mx-3"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : singleBlog ? (
        <>
          <div className="flex justify-center">
            <div className="w-[70%] flex flex-col gap-3">
              {/* blog image */}
              <div className="rounded-3xl overflow-hidden flex justify-center">
                <img
                  src={singleBlog.image}
                  alt="blog-img"
                  className="rounded-3xl scale-100 h-[500px]"
                />
              </div>

              {/* heading */}
              <div className="flex justify-center items-center p-5 gap-4">
                <div>
                  <h1 className="text-2xl text-center capitalize font-bold">
                    {singleBlog.title}
                  </h1>
                </div>
                <div className="text-3xl flex gap-3">
                  {user?.username === singleBlog?.author && (
                    <>
                      <button
                        type="button"
                        className="text-red-500"
                        onClick={() => deleteHandler(singleBlog._id)}
                      >
                        <MdDelete />
                      </button>
                      <button
                        type="button"
                        className="text-yellow-500"
                        onClick={() => updateBlogHandler(singleBlog._id)}
                      >
                        <TbEdit />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* date & author*/}
              <div className="flex gap-2 justify-center items-center text-gray-400 mb-3">
                <img
                  src={
                    singleBlog.authorImage
                      ? singleBlog.authorImage
                      : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  }
                  alt="user-img"
                  className="w-[40px] h-[40px] rounded-full border border-gray-400"
                />
                <p className="text-sm capitalize">{singleBlog.author}</p>
                <p className="text-sm">
                  {formattedDate} {formattedTime}
                </p>
              </div>

              {/* content */}
              <div className="pb-5 mb-5 border-b border-gray-500 text-[1.25rem]">
                {singleBlog.content}
              </div>

              {/* like and comments */}
              <div className="mb-5 flex justify-center">
                <div className="py-3 px-4 border border-gray-300 flex justify-center items-center gap-5 rounded-xl">
                  <button className="flex items-center gap-1 text-red-500">
                    <FaRegHeart />
                    {singleBlog.likes}
                  </button>
                  <button
                    className={`${
                      commentDialog ? `text-sky-700 ` : ``
                    }flex items-center gap-1 text-sky-500`}
                    onClick={commentDialogHandler}
                  >
                    <BiComment />
                    {singleBlog.comments?.length}
                  </button>

                  {/* comment dialog box */}
                  {commentDialog && (
                    <div
                      className="relative z-10"
                      aria-labelledby="slide-over-title"
                      role="dialog"
                      aria-modal="true"
                    >
                      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                      <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <div className="pointer-events-auto w-screen max-w-md">
                              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                  <div className="flex items-start justify-between">
                                    <h2
                                      className="text-lg font-medium text-gray-900"
                                      id="slide-over-title"
                                    >
                                      Comments Section
                                    </h2>
                                    <div className="ml-3 flex h-7 items-center">
                                      <button
                                        type="button"
                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                        onClick={closeCommentDialog}
                                      >
                                        <svg
                                          className="h-6 w-6"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>

                                  <div className="mt-8">
                                    <div className="flow-root">
                                      <ul
                                        role="list"
                                        className="-my-6 divide-y divide-gray-200"
                                      >
                                        {/* every comments here */}
                                        {singleBlog.comments.map((comment) => {
                                          const originalDateString =
                                            comment.date;
                                          const originalDate = new Date(
                                            originalDateString
                                          );

                                          // Format the date in a human-readable way
                                          const formattedDate =
                                            originalDate.toLocaleDateString(); // Change according to your requirements
                                          const formattedTime =
                                            originalDate.toLocaleTimeString(); // Change according to your requirements

                                          return (
                                            <li key={comment._id}>
                                              <div className="flex flex-col gap-2 py-4">
                                                <div className="flex gap-2">
                                                  <img
                                                    src={
                                                      comment.authorImage
                                                        ? comment.authorImage
                                                        : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                                                    }
                                                    alt="user-img"
                                                    className="w-[50px] h-[50px] rounded-full"
                                                  />
                                                  <div>
                                                    <h3 className="text-base font-semibold">
                                                      {comment.author}
                                                    </h3>
                                                    <span className="flex text-gray-400 text-[0.70rem] gap-2">
                                                      <p>
                                                        {" "}
                                                        {formattedDate}{" "}
                                                        {formattedTime}
                                                      </p>
                                                    </span>
                                                  </div>
                                                </div>
                                                <div>
                                                  <p>{comment.text}</p>
                                                </div>
                                              </div>
                                            </li>
                                          );
                                        })}
                                      </ul>
                                    </div>
                                  </div>
                                </div>

                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <input
                                      type="text"
                                      value={commentText}
                                      onChange={handleChange}
                                      placeholder="Add Your comments here"
                                      className="p-2 focus:outline-none w-full"
                                    />
                                  </div>

                                  <div className="mt-6">
                                    <button
                                      className="w-full flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                                      onClick={handleCommentSubmit}
                                      disabled={commentLoading}
                                    >
                                      {commentLoading
                                        ? "Submitting..."
                                        : "Submit"}
                                    </button>
                                  </div>
                                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                    <p>
                                      <button
                                        type="button"
                                        className="font-medium text-blue-600 hover:text-indigo-500 ml-1"
                                        onClick={closeCommentDialog}
                                      >
                                        Cancel
                                        <span aria-hidden="true"> &rarr;</span>
                                      </button>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* <div className="absolute right-[17rem] -mt-80 z-10 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <form onSubmit={handleCommentSubmit}>
          <label className="px-3 font-medium text-gray-400">
            Comments:
          </label>
          <div className="form-field">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write your valuable comments here!!.."
              className="mt-2 focus:outline-none p-3 w-full"
            ></textarea>
          </div>
          <div className="flex justify-end p-2 border-t border-gray-300">
            <button
              onClick={handleCommentSubmit}
              className="py-2 px-2 rounded-md bg-sky-500 text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div> */}
                </div>
              </div>

              {/* tags */}

              {/* suggestions */}
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default SingleBlog;
