import NavBar from "./Components/NavBar/Navbar";
import Welcome from "./Welcome";
import { Link } from "react-router-dom";
const Home = () => {
    return ( 
        <div>
            <NavBar />
            <div className="welcome relative">
                <div className="bg-green-600 w-[100%] h-[100%] opacity-40 "></div>
                <div className="flex flex-col justify-center items-center h-[100%] absolute top-0 w-[100%]">
                    <h1 className="sm:text-[2rem] md:text-[4rem] text-white bold"><strong>Welcome To Library portal</strong></h1>
                    <Link to="/" className="p-[2%] bg-green-100 rounded-lg text-green-900 mt-6"><strong>Browse Books</strong></Link>
                </div>
            </div>
            <div className="p-[9%] bg-green-100">
                <div></div>
                <h1>Uniuyo Library</h1>
                <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae commodi et adipisci, ipsa provident deleniti doloremque porro magnam animi autem? Perferendis est eos temporibus eum. In labore vel necessitatibus earum.</p>
            </div>
            <div className="flex p-[8%] footer">
                <h1 className="text-[30px] mr-[4%]">Contact Us </h1>
                <div>
                    <h1>University of Uyo, Main Campus</h1>
                    <h1>email: uniuyolibrary@gmail.com</h1>
                    <h1>08123456789</h1>
                </div>
            </div>
            
        </div>
     );
}
 
export default Home;