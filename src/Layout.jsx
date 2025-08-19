import { Outlet } from "react-router-dom";


export default function Layout() {
  return (
    <div className="app-container">
      <div className="mobile-frame">
        <Outlet />
      </div>
    </div>
  );
}
