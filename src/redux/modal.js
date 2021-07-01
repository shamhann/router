const initialState = {
  modalImage: {},
  items: {},
  comments: [],
  loading: false,
};
const modal = (state = initialState, action) => {
  switch (action.type) {
    case 'modal/load/start':
      return {
        ...state,
        loading: true,
      };
    case 'modal/load/success':
      return {
        ...state,
        items: {
          url: action.payload.url,
        },
        loading: false,
      };

    case 'comments/load/start':
      return {
        ...state,
        loading: true,
      };
    case 'comments/load/success':
      return {
        ...state,
        comments: [...state.comments, action.payload],
        loading: false,
      };
    default:
      return state;
  }
};
export default modal;
