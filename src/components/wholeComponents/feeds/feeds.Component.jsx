import FeedCard from "../../reuseableComponents/feedCard";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

// constants
import { blogsData } from "../../../constants";
import { useState } from "react";

const Feeds = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);

    const filteredBlogs = blogsData.filter((blog) => {
      const lowerCaseTitle = blog.title.toLowerCase();
      const lowerCaseAuthor = blog.author.toLowerCase();

      return (
        lowerCaseTitle.includes(query) ||
        blog.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        lowerCaseAuthor.includes(query)
      );
    });

    setSearchResults(filteredBlogs);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-[75%]">
        {/* head section */}
        <div>
          <h3 className="font-semibold text-sm text-gray-500">
            Embark on a journey of words and wisdom. Explore stories that
            inspire, ideas that resonate, and a community that connects. Your
            thoughts, our canvas – let the blogging adventure begin. Unleash
            your creativity, one post at a time.
          </h3>
          <div className="border-gray-300 border-b mb-5 py-5">
            <input
              type="text"
              placeholder="Search.."
              className="py-[0.8rem] px-3 text-gray-400 border-gray-300 border rounded-lg w-full"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="flex items-start justify-start gap-5">
          <div>
            <h4 className="font-semibold text-base mb-4 text-gray-700 underline underline-offset-8">
              Top blogs :
            </h4>
            {/* feeds */}
            {(searchTerm === "" ? blogsData : searchResults).map((blog) => (
              <a href={`/blog/${blog.id}`} key={blog.id}>
                <FeedCard blog={blog} />
              </a>
            ))}
          </div>

          {/* side bar content*/}
          <div className="flex flex-col gap-3">
            <div className="text-black py-5 rounded-md flex flex-col border border-gray-300">
              <h4 className="font-semibold text-base mb-4 text-gray-700 underline underline-offset-8 px-4">
                Top Commentator's :
              </h4>
              {blogsData.map((blog) => {
                return (
                  <div
                    key={blog.id}
                    className="flex justify-between items-center text-sm hover:bg-gray-100"
                  >
                    <p className="text-gray-700 font-medium block px-4 py-2 mb-1">
                      {blog.author}
                    </p>
                    <IoMdContact className="mr-3 text-lg" />
                  </div>
                );
              })}
            </div>
            <div className="bg-gray-500 text-white p-5 rounded-md flex flex-col gap-3">
              <div>
                <h4 className="text-lg font-semibold">External links</h4>
                <p>
                  Feature requests and Changelog Blogger APIs The Commit
                  Podcast.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Company</h4>
                <p>
                  About Service status Official blog Press kit Townhall blog
                  Careers OSS ACK Support.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Social Media</h4>
                <span className="flex gap-2 mt-3">
                  <BsTwitterX />
                  <FaLinkedin />
                  <FaInstagram />
                  <FaDiscord />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
