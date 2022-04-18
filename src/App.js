import Employees from "./component/Employees";
import Add from "./component/Add";
import Update from "./component/Update";
import { Route, Routes, Navigate} from "react-router-dom";

function App() {
 
  return (
    <div className="App">
      <Routes>
       
      <Route path="/" element={<Navigate replace to="/employees" />}/>
        <Route  path="/employees" element={<Employees />} />
        <Route path="/employees/add" element={<Add />} />
        <Route path="/employees/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
}
