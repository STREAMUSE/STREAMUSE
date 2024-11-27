import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Survey from "./pages/Survey.jsx";
import App from "./pages/App.jsx";
import "./styles/main.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#A880D0",
            colorBgElevated: "#4e4e4e",
            colorText: "#ffffff",
          },
          components: {
            Button: {
              borderRadius: 10,
              colorPrimary: "#5100A1",
              colorLink: "#ffffff",
              colorLinkHover: "#A880D0",
              colorTextDisabled: "#999999",
              algorithm: true,
            },
          },
        }}
      >
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/survey" element={<Survey />} />
        </Routes>
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>
);
