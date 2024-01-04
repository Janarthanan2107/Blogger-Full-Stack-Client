import { useState, useRef } from "react";
import { BiSolidImageAdd } from "react-icons/bi";
import { useBlogContext } from "../../context/blog.Context";
import FileBase64 from "react-file-base64";

const CreateBlog = () => {
  // context value
  const { addBlog } = useBlogContext();

  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    author: "Janarthanan",
    tags: [],
    datePublished: new Date().toISOString(),
    comments: [],
    image: null,
    likes: 50,
  });
  const fileInputRef = useRef(null);

  // const handleImageChange = (e) => {
  //   const selectedImage = e.target.files[0];

  //   if (selectedImage) {
  //     setBlogData((prevData) => ({
  //       ...prevData,
  //       image: URL.createObjectURL(selectedImage),
  //     }));
  //   }
  // };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

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
    // You can perform additional actions here, such as sending data to the server.
    await addBlog(blogData);
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
  };

  return (
    <div className="flex justify-center">
      <div className="w-[70%]">
        <div className="flex flex-col gap-2">
          <form className="mb-5" onSubmit={handleSubmit}>
            <div className="flex items-center gap-2 text-center justify-end mt-3">
              <button
                type="submit"
                className="bg-blue-500 text-white p-3 rounded-md cursor-pointer"
              >
                Submit
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
                className="file"
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
                className="w-full h-96 p-4 border-none focus:outline-none text-3xl font-semibold"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
