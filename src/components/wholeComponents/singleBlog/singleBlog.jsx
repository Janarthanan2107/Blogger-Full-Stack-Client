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

  const handleChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

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

      console.log(updatedBlogData);
      // Clear the commentText state after submitting
      setCommentText("");

      // Optionally, you can call your updateBlog function here
      await updateBlog(id, updatedBlogData);

      toast.success("Comment added successfully");
      // setCommentDialog(false);
    } catch (error) {
      console.error("Error adding comment:", error);
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
  }, [id, updateBlog]);

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
          <p className="text-center font-semibold text-[1.25rem]">
            Blog has Loading...
          </p>
        </>
      ) : (
        <>
                  </>
      )}
    </>
  );
};

export default SingleBlog;
