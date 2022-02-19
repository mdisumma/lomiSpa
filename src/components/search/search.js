import "./search.css"
import {BiCaretDown} from "react-icons/bi"

function DropDown() {
   return(
      <ul className="dropDown">
      <li>service one</li>
      <li>service two</li>
      <li>service three</li>
      </ul>
   )
}
function Search() {
   return(
      <div id="searchBar">
				<label htmlFor="query"/>
				<input type="text" name="query" id="query"  />
				<button>service  <BiCaretDown /> </button>
            <DropDown />
			</div>
   )
}
export default Search;