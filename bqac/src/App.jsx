import {
  Route,
  Routes,
} from "react-router-dom";
import { Error } from "./components/error/Error";

import Login from "./components/login/Login";
import { Admin } from "./pages/admin/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
