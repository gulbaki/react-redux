const initState = {
  posts: [
    { id: 1, title: "delectus aut 1", body: "body1" },
    { id: 2, title: "delectus aut 2", body: "body2" },
    { id: 3, title: "delectus aut 3", body: "body3" },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
