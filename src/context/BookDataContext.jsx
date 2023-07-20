import { createContext, useContext, useReducer,useState } from "react";

import { ReducerFunc } from "../reducer/ReducerFunction";
import { Books } from "../database/BooksDb";
const BookDataContext = createContext()

export const BookDataContextProvider = ({children}) => {
    const [state , dispatch ] = useReducer(ReducerFunc,{books : [...Books], searchInput :null})
    const [optionPopupOpen,setOptionPopupOpen] = useState(false)
    const [activeBookId,setActiveBookId] = useState()
    const categoryChangeHandler = (newCategory) => {
        dispatch({type:"CHANGE_CATEGORY",payload:{category:newCategory,bookId : activeBookId
       }})
       setOptionPopupOpen(false)
   }
   const handlePopupOpen = (bookId) => {
     setActiveBookId(bookId)
     setOptionPopupOpen(!optionPopupOpen)
   }
   const searchedData = state.searchInput ? state.books.filter((book)=>book.name.toUpperCase().includes(state.searchInput.toUpperCase())) : null;
    return(
        <BookDataContext.Provider value={{state,dispatch,searchedData,categoryChangeHandler,handlePopupOpen,optionPopupOpen,activeBookId}}>
            {children}
        </BookDataContext.Provider>
    )
}
export const useBooks = () => useContext(BookDataContext)