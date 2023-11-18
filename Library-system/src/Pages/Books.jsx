import NavBar from "../Components/Navbar";

import { Link } from "react-router-dom";
import Search from "../Components/Search";
import { FaPlusCircle } from "react-icons/fa";
import BookData from "../data/BookData";
import { useState } from "react";
import AddBook from "../Components/AddBook";

const Books = () => {
  const show = () =>{
    document.getElementById("bookadd").style.display="flex"
}
    const [bookdata, setBookdata] = useState(BookData);
    return ( 
            <div className="main">
              <AddBook/>
               <div className="flex justify-between mb-[3%]">
                <h1 className="text-[25px]">Books</h1>
                <button onClick={()=>{show()}} className="buttons flex items-center">Add Book <FaPlusCircle className="text-white ml-3"/></button>
               </div>
               <Search/>
                    <table className="w-[100%] mt-4">
                        <tr className="w-[100%]">
                            <th className="thead ttitle">Title</th>
                            <th className="thead tauthor">Author</th>
                            <th className="thead">Year</th>
                            <th className="thead">Category</th>
                            <th className="thead">Shelf</th>
                            <th className="thead">Copies</th>

                        </tr>
                   
    {bookdata.map((book,index)=>{
      return(
    
        <tr> 
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.year}</td>
            <td>{book.category}</td>
            <td>{book.Shelf}</td>
            <td>{book.Copies}</td>
        </tr>
      )
    })}
     </table>
            
            </div>
     );
}
 
export default Books;