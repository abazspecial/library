import { Link } from "react-router-dom";
const NavBar = () => {
    return ( 
        <div className="navBar flex justify-between items-center p-[2rem] bg-green-100">
         <Link to="/search"><strong>Uniuyo</strong>Library</Link>
         <div className="flex justify-around w-[15rem]">
            <Link>Home</Link>
            <Link>Books</Link>
            <Link>Help</Link>
            <Link>Profile</Link>     
         </div>
           
        </div>
     );
}
 
export default NavBar;