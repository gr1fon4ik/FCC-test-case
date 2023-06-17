import React from "react"
import {Routes,Route} from "react-router-dom"

import ProfilePage from "./pages/profile/index.tsx";
import BigForm from "./pages/form/index.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />}></Route>
      <Route path="/create" element={<BigForm />}></Route>
    </Routes>
  );
}

export default App;
