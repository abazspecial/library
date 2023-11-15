import NavBar from "../Library-system/src/Components/Navbar";
import {Outlet} from "react-router-dom";

const DefaultLayout = () => {
    return ( 
        <>    
        <NavBar />
        <Outlet />
        </>
        
        
     );
}
 
export default DefaultLayout;