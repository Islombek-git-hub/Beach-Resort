import React from "react";
import Rooms from "./pages/Rooms/Rooms";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Room from "./pages/Room/Room";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/:room" element={<Room />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
