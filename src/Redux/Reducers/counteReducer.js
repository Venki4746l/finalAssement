
const counterReducer = (state = {count:0}, action) => {
  switch (action.type) {
    case "INC":
        console.log(state)
        return {
            ...state,
            count: (state.count+1)
          };

    case "DEC":
      return {
        count: state.state.count - 1,
      };

    default:
      return {
        state,
      };
  }
};
export default counterReducer;
