import NavBar from "../Components/Navbar";

import { Link } from "react-router-dom";
import Search from "../Components/Search";
import { FaPlusCircle } from "react-icons/fa";

const Home = () => {
    return ( 
        <div className="flex h-[100vh] bg-[#F6F6F6] items-center relative">
            <NavBar />
            <div className="main">
               <div className="flex justify-between mb-[3%]">
                <h1 className="text-[25px]">Admin</h1>
               </div>

               <div className="grid grid-cols-3 gap-4 w-[100%] mt-[3%]">
               <Link to='' className="dash">
                <div className="op"></div>
                <div className="dash-group">
                    <h1 className="dash-h">Add User</h1>
                </div>
         
               </Link>
               <Link to='/books' className="dash"> 
               <div className="op"></div>
               <div className="dash-group">
                    <h1 className="dash-h">300</h1>
                    <p className="dash-p">Books</p>
               </div>
              
               </Link>
               <Link to='' className="dash">
                <div className="op"></div>
                <div className="dash-group">
                    <h1 className="dash-h">10</h1>
                    <p className="dash-p">Users</p>
                </div>
                
               </Link>
               <Link to='' className="return">
                <div className="op"></div>
                <div className="dash-sub">
                    <h1 className="dash-h">Issued</h1>
                    <p className="dash-p">0</p>
                </div>         
               </Link>
               <Link to='' className="return">
                <div className="op"></div>
                <div className="dash-sub">
                    <h1 className="dash-h">Returned</h1>
                    <p className="dash-p">0</p>
                </div>
               
               </Link>
               <Link to='' className="return">
                <div className="op"></div>
                <div className="dash-sub">
                    <h1 className="dash-h">Not Returned</h1>
                    <p className="dash-p">0</p>
                </div>
                
               </Link>
               
               
               

               </div>
            </div>
        </div>
     );
}
 
export default Home;