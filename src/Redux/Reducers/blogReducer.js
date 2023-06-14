const initialState = { posts: [], single: [] };

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL":
      return {
        ...state,
        posts: action.payload,
      };
    case "GET_SINGLE":
      return {
        ...state,
        single: [action.payload],
      };
    case "CREATE_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    default:
      return {
        ...state,
      };
  }
};

export default blogReducer;
