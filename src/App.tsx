import { ConfigProvider } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";

function App() {
  return (
    <ConfigProvider // ANT design configurations
      theme={{
        token: {
          colorPrimary: "#ff7300",
          colorInfo: "#ff7300",
          borderRadius: 8,
        },
        components: {
          Pagination: {
            itemActiveBg: "",
          },
        },
      }}
    >
      <Router>
        <Routes>
          {/* <Route path="/" element={<SignInPage />} /> */}
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
