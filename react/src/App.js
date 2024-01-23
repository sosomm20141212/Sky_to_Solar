import React from "react";
import { Route, Routes } from "react-router-dom";
import Inputpicture from "./components/Inputpicture";
import Result from "./components/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inputpicture/>}/>
      <Route path="/result" element={<Result/>}/>
    </Routes>
  );
}

export default App;
