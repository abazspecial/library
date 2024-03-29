import uniuyo from "../img/uniuyo.png"
import user from "../img/User.png"
import { IoMdLogOut } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
const navData = [
   {
      href: "/",
      name: "Dashboard"
   },
   {
      href: "/books",
      name: "Books"
   },
   {
      href: "/users",
      name: "Users"
   },
   {
      href: "/recommend",
      name: "Recommend"
   },
   
]
const NavBar = () => {
    return ( 
        <div className="navBar w-[20%] h-[100vh]  bg-[#F6F6F6] p-[2%] box-border flex flex-col items-center justify-between">
         <Link  to="/" className="flex items-center flex-col">
            <img src={uniuyo} alt="" />
            <span> 
               Uniuyo Library
            </span>
            </Link>
         <div className="flex flex-col w-[15rem] h-[60%]">
         {navData.map((nav,index)=> {
            return (
               <NavLink key={index} to={nav.href} className={({isActive})=> isActive ? "linkss" : "links"}>
                  {nav.name}
               </NavLink>
            )
         })}
         </div>
         <div className="h-[40px] flex bg-white w-[100%] items-center justify-around rounded-md py-2 shadow-sm">
            <img src={user} alt="" className="h-[100%] rounded-full"/>
            <p>Abasiama Ime</p>
            <IoMdLogOut />
         </div>
         {/* <Link  to="/" className="flex items-center flex-col">
            <img src={uniuyo} alt="" />
            <span> 
               Uniuyo Library
            </span>
            </Link>
         <div className="flex flex-col w-[15rem] h-[60%]">
            <Link to='/' className="linkss links">Dashboard</Link>
            <Link to='/books' className="links">Books</Link>
            <Link className="links">Users</Link>
            <Link className="links">Profile</Link>     
         </div>
         <div className="h-[40px] flex bg-white w-[100%] items-center justify-around rounded-md py-2 shadow-sm">
            <img src={user} alt="" className="h-[100%] rounded-full"/>
            <p>Abasiama Ime</p>
            <IoMdLogOut />
         </div> */}
        </div>
     );
}
 
export default NavBar;