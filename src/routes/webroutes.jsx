import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const WebRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<div>Home Page</div>} />
          <Route path="properties" element={<div>Property Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default WebRoutes;