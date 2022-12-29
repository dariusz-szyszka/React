import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Counter from "./components/Counter/Counter";
import Diary from "./components/Diary/Diary";
import Store from "./components/Store/Store";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route
            path="counter"
            element={
              <>
                <Counter incrementBy={1} />
                <Counter incrementBy={4} />
                <Counter incrementBy={9} />
              </>
            }
          />
          <Route path="diary" element={<Diary />} />
          <Route path="store" element={<Store />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
