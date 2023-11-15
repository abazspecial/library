import NavBar from "../Components/Navbar";

import { Link } from "react-router-dom";
import Search from "../Components/Search";
import { FaPlusCircle } from "react-icons/fa";

const Agric = () => {
    return ( 
        <div className="flex h-[100vh] bg-[#F6F6F6] items-center relative">
            <NavBar />
            <div className="main">
               <div className="flex justify-between mb-[3%]">
                <h1 className="text-[25px]">Faculty of Agricultural Science</h1>
                <button className="buttons flex items-center">Add Book <FaPlusCircle className="text-white ml-3"/></button>
               </div>
               <Search/>
               <div className="grid grid-cols-3 gap-4 w-[100%] mt-[3%]">
                    <Link to='' className="faculty">Agricultural Economics And Extension</Link>
                    <Link to='' className="faculty">Home Economics</Link>
                    <Link to='' className="faculty">Fisheries And Aquaculture</Link>
                    <Link to='' className="faculty">Environmental Health Management</Link>
                    <Link to='' className="faculty">Agronomy</Link>
                    <Link to='' className="faculty">Animal Science</Link>
                    <Link to='' className="faculty">Soil Science</Link>
                    <Link to='' className="faculty">Forestry And Wildlife</Link>
                    <Link to='' className="faculty">Food Science And Technology</Link>
                    <Link to='' className="faculty">Crop Science</Link>
                    <Link to='' className="faculty">Agro Forestry</Link>
               </div>
            </div>
        </div>
     );
}
 
export default Agric;