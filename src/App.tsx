import React, { Dispatch, SetStateAction, useState } from "react";
import { Routes, Route } from "react-router-dom"

import ProfilePage from "./pages/profile/index.tsx";
import BigForm from "./pages/form/index.tsx";

enum Gender {
  man = "man",
  woman = "woman"

}

export type StateType = {
  mainPage: {
    phoneNumber: string;
    email: string;
  };
  step1: {
    nickname: string;
    name: string;
    surname: string;
    sex: Gender;
  };
  step2: {
    text: any;
    checkbox1: boolean;
    checkbox2: boolean;
    checkbox3: boolean;
    radio: string;
  };
  step3: {
    about: string;
  };
  modal: {
    active: boolean;
    error: number;
  }
};

type ContextType = {
  state: StateType;
  setState: Dispatch<SetStateAction<StateType>>;
}
export const StateContext = React.createContext<ContextType>({} as ContextType);

function App() {


  const [state, setState] = useState<StateType>({ step2: { text: [{ value: '' }] }, modal: { active: false } } as StateType);

  return (
    <StateContext.Provider value={{ state, setState }}>
        <Routes>
          <Route path="/" element={<ProfilePage />}></Route>
          <Route path="/create" element={<BigForm />}></Route>
        </Routes>
    </StateContext.Provider>
  );
}

export default App;
//for commit