// App.jsx
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import {
  LandingPage,
  LoginPage,
  ProfilePage,
  SignupPage,
} from "./pages/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LandingPage />}>
      <Route index element={<LandingPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="profile" element={<ProfilePage />} />
    </Route>
  )
);

function App() {
  return (
    <div className="app-container">
      <div className="mobile-frame">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
