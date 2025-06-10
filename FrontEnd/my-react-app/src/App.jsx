import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminProfile from "./components/adminProfile/AdminProfile";
import UserTable from "./components/userTable/UserTable";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTable />} />
        <Route path="/profile/:userId" element={<AdminProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
