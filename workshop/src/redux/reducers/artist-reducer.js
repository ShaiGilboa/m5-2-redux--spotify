const initialState = {
  artist: null,
}

export default function artistReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  };
};