import {FaFilter, FaSearch} from "react-icons/fa"
const Search = () => {
    return ( 
        <div className="flex w-[100%]">
            <form action="" className="w-[40%]">
                <div className="border-[#cecece46] border-[2px] py-1 px-2 w-[100%] flex justify-between rounded-md bg-[#F6F6F6]">
                    <input type="text" placeholder="Search" className="outline-none w-[90%] bg-transparent"/>
                    <button type="submit" className="w-[30px] h-[30px] bg-[#10865C] flex justify-center items-center rounded-lg"><FaSearch className="  text-white flex text-md"/></button>
                </div>
            </form>
            <button className="buttons ml-[2%] flex items-center">Filter <FaFilter className="text-white ml-3"/></button>
        </div>
     );
}
 
export default Search;