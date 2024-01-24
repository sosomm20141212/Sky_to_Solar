import React from "react";
import { Route, Routes } from "react-router-dom";
import Inputpicture from "./components/Inputpicture";
import Result from "./components/Result";
import Main from "./components/Main";

function App() {
  return (
    <Routes>
      <Route path ="/" element={<Main/>}/>
      <Route path="/Input" element={<Inputpicture/>}/>
      <Route path="/result" element={<Result/>}/>
    </Routes>
  );
}

export default App;
