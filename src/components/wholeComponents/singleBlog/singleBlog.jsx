import { useParams } from "react-router-dom";
import { blogsData } from "../../../constants";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BiComment } from "react-icons/bi";
import { useState } from "react";

const SingleBlog = () => {
  const { id } = useParams();

  const [commentDialog, setCommentDialog] = useState(false);

  const commentDialogHandler = () => {
    console.log("hit");
    setCommentDialog(!commentDialog);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setCommentDialog(false);
  };

  const closeCommentDialog = () => {
    setCommentDialog(false);
  };

  const filteredBlog = blogsData.find((blog) => blog.id == id);

  return (
    <div className="flex justify-center">
      <div className="w-[70%] flex flex-col gap-3">
        {/* blog image */}
        <div className="rounded-3xl border border-gray-400 overflow-hidden">
          <img
            src={filteredBlog.image}
            alt="blog-img"
            className="rounded-3xl scale-100"
          />
        </div>

        {/* heading */}
        <h1 className="text-2xl text-center">{filteredBlog.title}</h1>

        {/* date & author*/}
        <div className="flex gap-2 justify-center items-center text-gray-400 mb-3">
          <img
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
            alt="user-img"
            className="w-[50px] h-[50px] rounded-full"
          />
          <p className="text-sm">{filteredBlog.author}</p>
          <p className="text-sm">{filteredBlog.datePublished}</p>
        </div>

        {/* content */}
        <div className="pb-5 mb-5 border-b border-gray-500">
          {filteredBlog.content}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odio,
          inventore vero quod molestias voluptatibus aspernatur dolore aut
          fugiat accusamus sed, nihil aliquam maxime nemo soluta! Nemo quibusdam
          magni, eos, id ducimus omnis doloremque reiciendis ratione deleniti
          sequi obcaecati. Dolorum dolore expedita unde quae sit sed? Aliquam
          dicta obcaecati, ab corporis odio possimus. Quibusdam, vel sint
          impedit exercitationem est molestiae voluptates, ratione nulla ut
          totam quidem, vitae neque. Assumenda, excepturi incidunt unde vel,
          earum eum praesentium beatae atque doloremque molestiae illum. Quia
          deserunt temporibus sint facilis fugiat accusantium, unde consectetur
          tenetur excepturi laborum provident pariatur. Porro, est enim nihil
          tempore iusto corporis ipsam quasi ea quae quos, pariatur perferendis
          ducimus dolorem distinctio fuga molestiae laborum dignissimos fugiat
          voluptates aliquid iure reprehenderit quam eum aperiam? Commodi
          dolores id dicta! Expedita aliquam laboriosam voluptatem distinctio
          autem tempore cupiditate. Harum ex excepturi quis unde quidem ad
          aspernatur ut perferendis id adipisci similique cum, reprehenderit
          accusantium aperiam odit ab voluptatibus tempore ipsam dolor, culpa
          sapiente odio error debitis autem. Totam, harum dolorum voluptatum
          reprehenderit incidunt beatae porro aspernatur eius nihil provident,
          et rem est qui modi ipsa quibusdam illo voluptatem consequuntur
          assumenda alias laboriosam repellat quaerat nesciunt. Magni eius id
          excepturi nulla nostrum. Reprehenderit? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Distinctio velit odit labore, molestiae
          nesciunt provident necessitatibus quidem quae ab esse fugit sint fuga
          enim? Alias beatae commodi magnam, itaque accusantium voluptas vel
          minima voluptatum quas, tempore vero illo soluta sequi. Rem assumenda
          nesciunt, dolor dicta nihil odit in voluptatem nobis sapiente mollitia
          reiciendis. Dolorum, explicabo ut non qui autem unde, cumque
          doloremque omnis porro neque, cupiditate dolores dicta iusto a
          reprehenderit illo voluptas. Totam, quos numquam labore vel cumque
          blanditiis. Dolores obcaecati maiores commodi aliquam natus nihil eos
          facilis porro quo eius laboriosam vero neque deleniti asperiores, esse
          dicta at distinctio veritatis nam molestias. Vitae commodi iste nihil,
          alias, et deleniti natus possimus fuga animi amet quibusdam molestiae
          suscipit quasi. Beatae esse odit quos repellat rem quaerat
          reprehenderit, veniam ex, laborum natus, recusandae asperiores dolore
          dignissimos. Tempore ab eveniet eligendi dignissimos illum architecto
          officia dolore non quae ipsa, nam provident repellendus iste,
          doloribus numquam rem ex nesciunt sed aut. Doloribus laborum
          laboriosam exercitationem velit quam. Eligendi incidunt hic saepe, ex
          aliquid natus facere quaerat animi sequi? Quas sequi quibusdam
          obcaecati incidunt, assumenda error nemo ab voluptas illum repellat
          aspernatur tempore saepe quasi hic ipsa consectetur vel, facere eaque
          fugit molestias cum amet facilis doloremque? Repellendus, dignissimos
          ut veritatis quam minima deleniti quaerat. Pariatur facilis soluta
          corrupti assumenda consequuntur, ipsum perspiciatis repellat non,
          iusto aspernatur molestias unde excepturi quaerat delectus officiis
          libero ut, rerum fugiat voluptatum veniam accusamus suscipit nostrum?
          Repellat laborum id nobis consequuntur, distinctio pariatur doloribus
          dolor explicabo, numquam sequi nam deleniti fugiat minus? Distinctio
          provident rem voluptatem minus suscipit dignissimos nobis dolores
          repellendus quo excepturi sint magnam iure reiciendis necessitatibus
          odit explicabo facere hic, ad porro ea pariatur omnis officiis
          accusamus? Nostrum aut iusto cum architecto officia, ex eaque mollitia
          earum autem rerum vero quam facere aperiam eius, omnis nesciunt
          veritatis. Suscipit sed temporibus dolor ipsa! Unde, minima! Pariatur,
          eos laboriosam. Ex nisi illum commodi cum laudantium nihil excepturi,
          qui, pariatur provident doloribus repudiandae nam at quis, ratione
          voluptatem accusamus maxime? Quam dolorem aliquam tempore ad voluptas
          quisquam unde voluptates nemo, repudiandae libero quasi voluptatem
          incidunt. Odio quasi assumenda, ratione quo sed delectus aliquid a,
          tempore neque quae necessitatibus ducimus quidem. Voluptate, autem
          modi odio voluptatum soluta porro veritatis nulla perferendis corrupti
          aliquid, rerum commodi nihil cumque minus molestiae ex! Expedita
          corrupti veritatis rem, qui architecto quis quos sint necessitatibus
          iste voluptatum totam in explicabo, ducimus debitis rerum mollitia
          error aperiam illum voluptatem. Nihil eos dignissimos officiis dolorum
          dolore at impedit corporis accusantium quos consequuntur, ut commodi
          voluptatem velit perspiciatis maiores beatae nulla mollitia eligendi
          aliquid saepe laboriosam optio. Perferendis sint dolor esse recusandae
          inventore, facilis porro vitae. Eum reprehenderit velit sint nemo
          error nisi quam laudantium blanditiis quod in quia perspiciatis beatae
          eligendi, nobis corporis sapiente. Magnam fuga molestias voluptas
          ipsum, repellat ad ut laudantium sit. Consequatur odit doloremque
          voluptates commodi, nobis asperiores facilis est nesciunt recusandae
          vitae a quaerat nulla hic placeat vero assumenda natus maxime quisquam
          ratione ipsa? Optio commodi hic quo, culpa quia nostrum?
        </div>

        {/* like and comments */}
        <div className="mb-5 flex justify-center">
          <div className="py-3 px-4 border border-gray-300 flex justify-center items-center gap-5 rounded-xl">
            <button className="flex items-center gap-1 hover:text-red-500">
              <FaHeart />
              {filteredBlog.likes}
            </button>
            <button
              className={`${
                commentDialog ? `text-sky-700 ` : ``
              }flex items-center gap-1 hover:text-sky-500`}
              onClick={commentDialogHandler}
            >
              <BiComment />
              {filteredBlog.comments.length}
            </button>

            {/* comment dialog box */}
            {commentDialog && (
              <div
                class="relative z-10"
                aria-labelledby="slide-over-title"
                role="dialog"
                aria-modal="true"
              >
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div class="fixed inset-0 overflow-hidden">
                  <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                      <div class="pointer-events-auto w-screen max-w-md">
                        <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                          <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                            <div class="flex items-start justify-between">
                              <h2
                                class="text-lg font-medium text-gray-900"
                                id="slide-over-title"
                              >
                                Comments Section
                              </h2>
                              <div class="ml-3 flex h-7 items-center">
                                <button
                                  type="button"
                                  class="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                  onClick={closeCommentDialog}
                                >
                                  <svg
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M6 18L18 6M6 6l12 12"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>

                            <div class="mt-8">
                              <div class="flow-root">
                                <ul
                                  role="list"
                                  class="-my-6 divide-y divide-gray-200"
                                >
                                  {/* every comments here */}
                                  {filteredBlog.comments.map((comment) => {
                                    return (
                                      <li>
                                        <div className="flex flex-col gap-2 py-4">
                                          <div className="flex gap-2">
                                            <img
                                              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1697035804037/d91ddbd6-f8f0-464e-b5dd-912e25ab8470.jpeg?w=500&h=500&fit=crop&crop=faces&auto=compress,format&format=webp"
                                              alt="user-img"
                                              className="w-[50px] h-[50px] rounded-full"
                                            />
                                            <div>
                                              <h3 className="text-base font-semibold">
                                                {comment.author}
                                              </h3>
                                              <span className="flex text-gray-400 gap-2">
                                                <p>Janarthanan@gmail.com</p>
                                                <p>{comment.date}</p>
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

                          <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                            <div class="flex justify-between text-base font-medium text-gray-900">
                              <input
                                type="text"
                                placeholder="Add Your comments here"
                                className="p-2 focus:outline-none"
                              />
                            </div>

                            <div class="mt-6">
                              <a
                                href="#"
                                class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                onClick={handleCommentSubmit}
                              >
                                Submit
                              </a>
                            </div>
                            <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                              <p>
                                <button
                                  type="button"
                                  class="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
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
  );
};

export default SingleBlog;
