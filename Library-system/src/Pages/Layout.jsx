import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar";

const Layout = () => {
    return (  
        <div className="flex gap-2 bg-[#F6F6F6] pr-[4%] h-[100vh]  items-center w-[100%]">
            <NavBar/>
            <Outlet/>
        </div>
    );
}
 
export default Layout;