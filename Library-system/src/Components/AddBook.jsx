import { FaTimes } from "react-icons/fa";

const AddBook = () => {
    const Hide = () =>{
        console.log("Abas");
        document.getElementById("bookadd").style.display="none"
    }
    return ( 
        <div id="bookadd" className="w-[100%] h-[100vh] absolute top-0 z-50 left-0 justify-center items-center">
            <div onClick={()=>{Hide()}} className="bg-black opacity-80 absolute w-[100%] h-[100%]"></div>
            <div className="h-[500px] rounded-lg w-[400px] bg-white z-50 p-4">
                <div className="flex w-[100%] justify-between userbox mt-2 pb-2 items-center">
                    <h1 className="text[#4A4754]">Add Book</h1>
                    <button onClick={()=>{Hide()}} className="bg-red-800 p-2 rounded-full"><FaTimes className="text-[20px] text-white"/> </button>
                </div>
                <form action="" className="flex flex-col">
                    <input type="text" className="addin" placeholder="Title"/>
                    <input type="text" className="addin" placeholder="Author"/>
                    <input type="text" className="addin" placeholder="Year"/>
                    <input type="text" className="addin" placeholder="Copies"/>
                    <input type="text" className="addin" placeholder="Shelf"/>
                    <input type="text" className="addin" placeholder="Category"/>
                    <button className="buttons self-center w-[50%] mt-9">Add Book</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddBook;