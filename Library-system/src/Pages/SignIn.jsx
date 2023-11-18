import { Link } from "react-router-dom";
const Signin = () => {
    return ( 
        <div className="w-[100%]">
            <div><img src="" alt="" /></div>
            <div className="h-[400px] w-[95%] bg-[red] flex ">
                <div className="w-[50%] h-[100%] bg-slate-500"></div>
                <div className="bg-[#D9D9D9] w-[50%] h-[100%] p-4">
                    <form action="" className="flex flex-col h-[100%] justify-center ">
                        <input type="text" placeholder="Registration Number" name="" id="" className="h-[40px] mt-4 pl-3"/>
                        <input type="text" placeholder="Password" name="" id="" className="h-[40px] mt-4 pl-3"/>
                        <Link to="" className="text-[#333333] mt-1 self-end">Forgot Password?</Link>
                        <button className="buttons w-[150px] h-[40px] mt-3 self-center">Login</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Signin;