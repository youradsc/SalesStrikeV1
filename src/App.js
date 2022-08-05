
import MainStore from "./components/MainStore"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
//import SignUp from "./components/Login";
import { CreateAccount } from "./components/CreateAccount";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<MainStore />}/>
      <Route path="/signup" element={<CreateAccount/>} />
      <Route path="/login" element = {<Login/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
