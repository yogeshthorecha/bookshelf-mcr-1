import { NavLink } from "react-router-dom";
import { useBooks } from "../context/BookDataContext";
import "../css/LandingPage.css";
import {MdArrowDropDownCircle} from "react-icons/md"
import {GiClick} from "react-icons/gi"
import {SiNike} from "react-icons/si"
export const LandingPage = () => {
  const { state,categoryChangeHandler,handlePopupOpen,optionPopupOpen,activeBookId} = useBooks();


  const categories = ["Read", "Want to Read", "Currently Reading"];
  const options = [...categories,"none"]
  console.log(state);
  return (
    <div>
      <nav className="landing-nav">
        <h1>BookShelf</h1>
        <NavLink to="/search" ><GiClick size={20}/>{" "}Want to Search Book{" "}<GiClick size={20}/></NavLink>
      </nav>
      <div className="books-page">
        <ul>
          {categories.map((bookCategory) => (
            <li>
              <h1>{bookCategory}</h1>
              <div className="book-card">
                {state.books.map(({ id, name, writer, image, category }) =>
                  category === bookCategory ? (
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
                  ) : (
                    ""
                  )
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
