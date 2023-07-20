import { IoMdArrowRoundBack } from "react-icons/io";
import {CgSearch} from "react-icons/cg"
import "../css/SearchPage.css"
import { useBooks } from "../context/BookDataContext";
import "../css/LandingPage.css";
import {MdArrowDropDownCircle} from "react-icons/md"
import {SiNike} from "react-icons/si"
import {useNavigate} from "react-router-dom"
export const SearchPage = () => {
  const navigate = useNavigate()
  const {state,dispatch,searchedData,optionPopupOpen,activeBookId,handlePopupOpen,categoryChangeHandler} = useBooks()
  const options = ["Read", "Want to Read", "Currently Reading","none"]
  console.log(state)
  return (
    <div className="search-page">
      <nav className="search-nav">
          <IoMdArrowRoundBack onClick={()=>navigate("/")} className="back" size="35"/>
     
        <h1>Search from BookShelf</h1>
      </nav>
      <div className="input">
        <input type="text" value={state.searchInput} onChange={(e)=>dispatch({type:"SET_SEARCH_INPUT",payload:e.target.value})}  placeholder="search book...."/>
        <CgSearch size={20} className="search-icon"/>
      </div>
              <div className="book-card">
              {state.searchInput ?searchedData?.length > 0 ? <ul>
                {searchedData?.map(({ id, name, writer, image, category }) =>
                    <li key={id}>
                      <img src={image} alt="name"/>
                      <div className="dropdown-icon">
                        <MdArrowDropDownCircle onClick={()=>handlePopupOpen(id)} className="icon" size= "40"/>
                        {optionPopupOpen && activeBookId === id ? <div className="options-dropdown">
                          <h5>move to..</h5>
                          {options.map((option)=><p onClick={()=>categoryChangeHandler(option)}><span>{category===option ?<SiNike /> : ""}</span> {option}</p>)}
                        </div> : ""}
                      </div>
                      <h3>{name}</h3>
                      <p>{writer}</p>
                    </li>
                )}
                </ul> : <div className="No-data-div"><h2> No Such Data</h2></div> : <div className="No-data-div"><h1>You have to search first</h1></div> }
              
              
              </div>
    </div>
  );
};
