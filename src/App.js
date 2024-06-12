import React , {useEffect} from "react";
import Home from "./components/pages/home/home";

import NavbarMain from "./components/commons/table/navbar/navbar";
import { useAppState } from "./context/storeContextProvider";
import { useSearchParams } from "react-router-dom";

const App = () => {
const {...state } = useAppState();
useEffect(() => {
  state.setNome('Rafael Chiareli');
},[])
  return (
    <>
    <Home></Home>
    </>
  )
}
export default App;
