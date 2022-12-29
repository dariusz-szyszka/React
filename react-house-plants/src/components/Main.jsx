import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import AllPlants from "../pages/all-plants/AllPlants";
import FatedPlant from "../pages/fated-plant/FatedPlant";

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/fated-plant" element={<FatedPlant />} />
      <Route exact path="/all-plants" element={<AllPlants />} />
    </Routes>
  );
};

export default Main;
