import { FaTimes } from "react-icons/fa";

const AddUser = () => {
    const Hide = () =>{
        console.log("Abas");
        document.getElementById("bookadd").style.display="none"
    }
    return ( 
        <div id="bookadd" className="w-[100%] h-[100vh] absolute top-0 z-50 left-0 justify-center items-center">
            <div onClick={()=>{Hide()}} className="bg-black opacity-80 absolute w-[100%] h-[100%]"></div>
            <div className="h-[500px] rounded-lg w-[400px] bg-white z-50 p-4">
                <div className="flex w-[100%] justify-between userbox mt-2 pb-2 items-center">
                    <h1 className="text[#4A4754]">Add User</h1>
                    <button onClick={()=>{Hide()}} className="bg-red-800 p-2 rounded-full"><FaTimes className="text-[20px] text-white"/> </button>
                </div>
                <form action="" className="flex flex-col">
                    <input type="text" className="addin" placeholder="Name"/>
                    <input type="text" className="addin" placeholder="Registration Number"/>
                    <input type="text" className="addin" placeholder="Faculty"/>
                    <input type="text" className="addin" placeholder="Department"/>
                    <input type="text" className="addin" placeholder="Phone Number"/>
                    <input type="text" className="addin" placeholder="Address"/>
                    <div className="mt-2">
                    <label htmlFor="Sex" className="text-[#3a3939] mr-2">Sex:</label>
                    <select name="Sex" id="">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    </div>
                    <button className="buttons self-center w-[50%] mt-9">Add User</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddUser;