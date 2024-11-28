import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate";

function App() {
  return (
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
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
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  );
}

export default App;
