import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default AdminRoutes;
