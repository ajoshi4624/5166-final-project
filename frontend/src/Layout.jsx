import { Link, Outlet, useNavigate } from "react-router-dom";
import { clearToken, isLoggedIn } from "./auth";

export default function Layout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearToken();
    navigate("/login", { replace: true });
  };

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header role="banner" className="top-nav">
        <nav aria-label="Main menu">
          <div className="nav-inner">
            <span className="brand">A02</span>
            <ul>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/summary">Summary</Link>
              </li>
              <li>
                <Link to="/reports">Reports</Link>
              </li>
              {isLoggedIn() && (
                <li>
                  <button onClick={handleLogout} aria-label="Log out">
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>

      <main id="main-content" tabIndex="-1" className="main-container">
        <Outlet />
      </main>
    </div>
  );
}
