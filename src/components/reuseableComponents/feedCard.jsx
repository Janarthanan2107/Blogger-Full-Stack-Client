import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BiComment } from "react-icons/bi";

const FeedCard = ({ blog }) => {
  const {
    title,
    content,
    author,
    authorImage,
    tags,
    datePublished,
    comments,
    image,
    likes,
  } = blog;

  const getFirstTag = tags?.filter((tag, index) => index < 1);

  const originalDateString = datePublished;
  const originalDate = new Date(originalDateString);

  // Format the date in a human-readable way
  const formattedDate = originalDate.toLocaleDateString(); // Change according to your requirements
  const formattedTime = originalDate.toLocaleTimeString(); // Change according to your requirements

  return (
    <div className="p-4 rounded-2xl border-gray-300 border flex justify-between items-center gap-5 mb-5 cursor-pointer hover:shadow-lg">
      {/* details */}
      <div className="flex flex-col gap-2">
        {/* user details */}
        <div className="flex gap-2 items-center">
          <img
            src={
              authorImage
                ? authorImage
                : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
            }
            alt="user-img"
            className="w-[50px] h-[50px] rounded-full border border-gray-400"
          />
          <div>
            <h3 className="text-base font-semibold capitalize">{author}</h3>
            <span className="flex text-gray-400 gap-2 text-[0.70rem]">
              <p>
                {formattedDate} {formattedTime}
              </p>
            </span>
          </div>
        </div>

        {/* blog details */}
        <div className="w-[500px] flex flex-col gap-1 mt-3">
          <p className="text-[1.1rem] font-semibold line-clamp-1">
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </p>
          <p className="line-clamp-2 text-gray-400 text-sm mt-3">
            {content.charAt(0).toUpperCase() + content.slice(1)}
          </p>
          <span className="flex gap-2 items-center mt-2">
            <BiComment />
            <p className="text-gray-400 text-sm">{comments.length}</p>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {/* images */}
        <img
          src={image}
          alt="blog-img"
          className="object-cover rounded-xl max-w-52 max-h-40"
        />
        {/* tags */}
        <div className="flex justify-end items-center gap-5">
          <span className="capitalize text-white text-xs bg-sky-500 w-auto px-3 py-1 rounded-2xl">
            {getFirstTag}
          </span>
          <span className="flex items-center gap-[2px] text-sm">
            <FaHeart className="text-red-400" />
            <p className="text-gray-400">{likes}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
