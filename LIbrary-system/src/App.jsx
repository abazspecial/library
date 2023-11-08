import FooterDiv from "./Components/FooterDiv/FooterDiv";
import Job from "./Components/JobDiv/JobDiv";
import NavBar from "./Components/NavBar/Navbar";
import Search from "./Components/SearchDv/Search";
import { Link, Route, RouterProvider } from "react-router-dom";
import React from "react";
import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./Home";

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route >path="/" 
      <Route index element={<Home />}/>
      <Route path="/search" element={<Search/>}/>
    </Route>
  ))
  return (
    <RouterProvider router={router}/>
    // <div className="w-[85%] m-auto bg-white">
    //   <Link>hi</Link>
    //   <NavBar/>
    //   <Search/>
    //   <Job/>
    //   <FooterDiv/>
    // </div>
   );
}
 
export default App;