import {
  Route,
  Routes,
} from "react-router-dom";
import  Login  from './components/login/Login'
import { Error } from "./components/error/Error";
import { Admin } from "./pages/admin/Admin";
import { Chef } from "./pages/chef/Chef";
import { Waiter } from "./pages/waiter/Waiter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/chef" element={<Chef/>}></Route>
        <Route path="/waiter" element={<Waiter/>}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
