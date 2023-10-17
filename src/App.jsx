import { Route, Routes } from "react-router-dom";
import Meals from "./Meals";
import Detail from "./Detail";
import Nav from "./Nav";
import "./index.css";

const App = () => {
  return (
    <div className=" w-10/12 mx-auto ">
    <Nav/>
    <Routes>
      <Route path="/" element={<Meals/>}></Route>
      <Route path="/detail/:id" element={<Detail/>}></Route>
    </Routes>
    </div>
  );
};

export default App;
