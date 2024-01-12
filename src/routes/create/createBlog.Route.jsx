import { useState, useRef, useEffect } from "react";
import { BiSolidImageAdd } from "react-icons/bi";
import { useBlogContext } from "../../context/blog.Context";
import FileBase64 from "react-file-base64";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../../context/user.Context";

const CreateBlog = () => {
  // context value
  const { id } = useParams();
  const { addBlog, updateBlog, getSingleBlog, singleBlog } = useBlogContext();
  const { fetchUsers, token, loggedInUser, users } = useUserContext();

  // Retrieve the user object from localStorage
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  console.log(user);

  const navigate = useNavigate();

  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    author: user.username,
    authorImage: user.image,
    tags: [],
    datePublished: new Date().toISOString(),
    comments: [],
    image: null,
    likes: 50,
  });

  const [isEditing, setIsEditing] = useState(false);

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTagChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevData) => ({
      ...prevData,
      tags: value.split(","),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Blog Data:", blogData);
    try {
      if (isEditing) {
        await updateBlog(id, blogData);
        toast.success("Data Successfully updated!");
        // You can perform additional actions here, such as sending data to the server.
        setBlogData({
          title: "",
          content: "",
          author: "Janarthanan",
          tags: [],
          datePublished: new Date().toISOString(),
          comments: [],
          image: null,
          likes: 50,
        });
        navigate(`/blog/${id}`);
      } else {
        await addBlog(blogData);
        toast.success("Data Successfully created!");
        // You can perform additional actions here, such as sending data to the server.
        setBlogData({
          title: "",
          content: "",
          author: "Janarthanan",
          tags: [],
          datePublished: new Date().toISOString(),
          comments: [],
          image: null,
          likes: 50,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getSingleBlog(id);
        setIsEditing(true);
        // console.log(singleBlog); // its undefined
        setBlogData(singleBlog);
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  console.log(isEditing);

  return (
    <div className="flex justify-center">
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
      <div className="w-[70%]">
        <div className="flex flex-col gap-2">
          <form className="mb-5" onSubmit={handleSubmit}>
            <div className="flex items-center gap-2 text-center justify-end mt-3">
              <button
                type="submit"
                className="bg-blue-500 text-white p-3 rounded-md cursor-pointer"
              >
                {isEditing ? "Update" : "Submit"}
              </button>
            </div>
            <div className="mb-2">
              {blogData.image && (
                <img
                  src={blogData.image}
                  alt="Preview"
                  className="mt-2 rounded-md mb-2 border border-gray-300"
                />
              )}
              <FileBase64
                type="file"
                name="image"
                id="image"
                accept="image/*"
                ref={fileInputRef}
                onDone={({ base64 }) => {
                  setBlogData({ ...blogData, image: base64 });
                }}
              />
              {/* <button
                type="button"
                onClick={handleButtonClick}
                className="bg-blue-500 text-white py-1 px-1 rounded-md cursor-pointer flex items-center gap-2"
              >
                <BiSolidImageAdd />
                Add cover image..
              </button> */}
            </div>
            <div>
              <input
                type="text"
                name="tags"
                value={blogData.tags.join(",")}
                onChange={handleTagChange}
                placeholder="Add tags (comma-separated)..."
                className="w-72 h-16 p-4 mt-3 rounded-lg border border-gray-300 focus:outline-none text-1xl font-semibold mb-7"
              />
            </div>
            <div>
              <input
                type="text"
                name="title"
                value={blogData.title}
                onChange={handleChange}
                placeholder="Add title..."
                className="w-full h-16 p-4 border-none focus:outline-none text-3xl font-semibold mb-7"
              />
            </div>
            <div>
              <textarea
                name="content"
                value={blogData.content}
                onChange={handleChange}
                placeholder="Add content..."
                className="w-full h-96 p-4 border-none focus:outline-none text-[1.25rem] font-semibold"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
