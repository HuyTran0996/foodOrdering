import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />

        <Route path="/user-profile" element={<Layout>user-profile</Layout>} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
