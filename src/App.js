import Cards from "./components/Cards";
import Header from "./components/Header";
import { Routes,Route } from "react-router-dom";
import AddMovie from "./components/AddMovie";
import Details from "./components/Details";
import { createContext, useContext, useEffect,useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup"; 
const Appstate = createContext();


function App() {

  const [login, setLogin] = useState(false);
const [userName, setUserName] = useState("");


useEffect(() => {



}, [])


  return (
    <Appstate.Provider value={{login,userName, setLogin, setUserName}}>
    <div className="App relative">
      <Header/>
    <Routes >
    
      <Route path="/" element={<Cards/>}></Route>
      <Route path="/AddMovie" element={<AddMovie/>}></Route>
      <Route path="/Details/:id" element={<Details/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
    </Routes>
    
    
    </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate}
