import NavBar from "../Components/Navbar";
import AddBook from "../Components/AddBook";
import { Link } from "react-router-dom";
import Search from "../Components/Search";
import { FaPlusCircle } from "react-icons/fa";
import UserData from "../data/UserData";
import { useState } from "react";
import AddUser from "../Components/AddUser";

const User = () => {
    
    const [userdata, setBookdata] = useState(UserData);
    const show = () =>{
      document.getElementById("bookadd").style.display="flex"
  }
    return ( 
       
            <div className="main">
              <AddUser />
               <div className="flex justify-between mb-[3%]">
                <h1 className="text-[25px]">Users</h1>
                <button onClick={()=>{show()}}  className="buttons flex items-center">Add Users <FaPlusCircle className="text-white ml-3"/></button>
               </div>
               <Search/>
                    <table className="w-[100%] mt-4">
                        <tr className="w-[100%]">
                            <th className="thead ttitle">Name</th>
                            <th className="thead">Registration Number</th>
                            <th className="thead">Faculty</th>
                            <th className="thead">Department</th>
                            <th className="thead">Phone</th>
                            {/* <th className="thead">Sex</th> */}
                            <th className="thead  tauthor">Address</th>

                        </tr>
                   
    {userdata.map((user,index)=>{
      return(
    
        <tr> 
            <td>{user.name}</td>
            <td>{user.regno}</td>
            <td>{user.faculty}</td>
            <td>{user.dept}</td>
            <td>{user.phone}</td>
            {/* <td>{user.Sex}</td> */}
            <td>{user.Address}</td>
        </tr>
      )
    })}
     </table>
            
            </div>
     );
}
 
export default User;