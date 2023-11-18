import Search from "./Components/Search";
import { Link, Route, RouterProvider } from "react-router-dom";
import React from "react";
import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import Layout from "./Pages/Layout";
import User from "./Pages/User";
import Recommend from "./Pages/Recommend";
import Signin from "./Pages/SignIn";

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
   
    <Route element={<Layout/>}>
               
      <Route path="/">
        <Route index element={<Home />}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/users" element={<User/>}/>
        <Route path="/recommend" element={<Recommend/>}/>
      </Route>
    </Route>
  ))
  return (
    <RouterProvider router={router}/>

   );
}
 
export default App;