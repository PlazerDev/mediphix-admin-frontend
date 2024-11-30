import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DoctorVerifyPage from "../pages/DoctorVerifyPage";
import MedicalCenterVerifyPage from "../pages/MedicalCenterVerifyPage";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/verifyDoctors" element={<DoctorVerifyPage />} />
      <Route
        path="/verifyMedicalCenters"
        element={<MedicalCenterVerifyPage />}
      />
    </Routes>
  );
}

export default AdminRoutes;
