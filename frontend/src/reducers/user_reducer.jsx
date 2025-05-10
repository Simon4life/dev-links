const user_reducer = (state, action) => {
  if (action.type === "REGISTER_USER") {

    return { ...state, user: action.payload, isLoading: false };
  }
  if (action.type === "LOGIN_USER") {
    return { ...state, user: action.payload, isLoading: false };
  }
  if (action.type === "GET_USER") {
    return { ...state, user: action.payload, isLoading: false };
  }
  if (action.type === "TOGGLE_LOADING") {
    return { ...state, IsLoading: !state.IsLoading };
  }
  if (action.type === "UPDATE_ERROR_MSG") {
    return { ...state, errorMessage: action.payload };
  }
};

export default user_reducer;