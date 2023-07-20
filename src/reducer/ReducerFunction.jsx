export const ReducerFunc = (state, action) => {
  switch (action.type) {
    case "CHANGE_CATEGORY":
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.bookId
            ? { ...book, category: action.payload.category }
            : book
        ),
      };
     case "SET_SEARCH_INPUT":
      return {
        ...state,
        searchInput : action.payload
      } 
    default:
      break;
  }
};
