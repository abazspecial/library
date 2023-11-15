import NavBar from "../Components/Navbar";

import { Link } from "react-router-dom";
import Search from "../Components/Search";
import { FaPlusCircle } from "react-icons/fa";

const Books = () => {
    return ( 
        <div className="flex h-[100vh] bg-[#F6F6F6] items-center relative">
            <NavBar />
            <div className="main">
               <div className="flex justify-between mb-[3%]">
                <h1 className="text-[25px]">Books</h1>
                <button className="buttons flex items-center">Add Book <FaPlusCircle className="text-white ml-3"/></button>
               </div>
               <Search/>
               <div className="grid grid-cols-3 gap-4 w-[100%] mt-[3%]">
                <table>
                    <th></th>
                </table>
               </div>
            </div>
        </div>
     );
}
 
export default Books;