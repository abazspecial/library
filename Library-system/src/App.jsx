import Search from "./Components/Search";
import { Link, Route, RouterProvider } from "react-router-dom";
import React from "react";
import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./Pages/Home";
import Agric from "./faculties/Agric";
import Books from "./Pages/Books";

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route >path="/" 
      <Route index element={<Home />}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/agric" element={<Agric/>}/>
      <Route path="/books" element={<Books/>}/>
    </Route>
  ))
  return (
    <RouterProvider router={router}/>

   );
}
 
export default App;