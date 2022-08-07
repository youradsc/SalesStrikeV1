
import MainStore from "./components/MainStore"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
//import SignUp from "./components/Login";
import { CreateAccount } from "./components/CreateAccount";
import Login from "./components/Login";
import Home from "./components/Home"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/signup" element={<CreateAccount/>} />
      <Route path="/login" element = {<Login/>}/>
      <Route path="/store" element = {<MainStore/>} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
