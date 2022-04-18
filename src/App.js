import Employees from "./component/Employees";
import Add from "./component/Add";
import Update from "./component/Update";
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Employees />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
