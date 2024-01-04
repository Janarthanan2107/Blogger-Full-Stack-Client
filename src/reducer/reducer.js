const blogReducer = (state, action) => {
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
            return {
                ...state
            }

        case "DELETE":
            return {
                ...state
            }

        default:
            return state;
    }
};

export default blogReducer;