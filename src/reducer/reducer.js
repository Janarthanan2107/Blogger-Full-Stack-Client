export const blogReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_BLOGS":
            return {
                ...state,
                loading: true,
                blogs: action.payload,
            };

        case "ADD_BLOG":
            return {
                ...state,
                blogs: [state.blogs, action.payload],
            }

        case "GET_SINGLE_BLOG":
            console.log("state", state.blogs)
            console.log(action.payload)

            return {
                ...state,
                singleBlog: action.payload
            }

        case "UPDATE_BLOG":
            // Ensure that state.blogs is an array before using map
            if (Array.isArray(state.blogs.data)) {
                // Assuming you want to update a specific blog in the array
                const updatedBlogs = state.blogs.data.map((blog) =>
                    blog.id === action.payload.id ? action.payload : blog
                );

                return {
                    ...state,
                    blogs: {
                        ...state.blogs,
                        data: updatedBlogs,
                    },
                };
            } else {
                console.error("state.blogs is not an array:", state.blogs);
                return state; // or return an appropriate default state
            }

        case "DELETE":
            return {
                ...state
            }

        default:
            return state;
    }
};

export const userReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_USER":

            return {
                ...state,
                users: action.payload,
            };

        case "ADD_USER":
            return {
                ...state,
                users: [state.users, action.payload],
            }

        case "GET_SINGLE_USER":
            return {
                ...state,
                singleUser: action.payload
            }

        case "UPDATE_USER":
            return {
                ...state
            }

        case "DELETE_USER":
            return {
                ...state
            }

        default:
            return state;
    }
}