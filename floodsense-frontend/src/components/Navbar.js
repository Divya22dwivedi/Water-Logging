import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    // clear login flag
    localStorage.removeItem("loggedIn");

    // clear auth context (if exists)
    if (logout) logout();

    // redirect to login
    navigate("/login", { replace: true });
  };

  return (
    <>
      <style>
        {`
          .nav-bar {
            background: #ffffff;
            padding: 14px 28px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #e5e7eb;
            box-shadow: 0 4px 20px rgba(0,0,0,0.06);
            position: sticky;
            top: 0;
            z-index: 100;
          }

          .nav-title {
            font-size: 18px;
            font-weight: 600;
            color: #0f172a;
            cursor: pointer;
            letter-spacing: 0.4px;
          }

          .nav-links {
            display: flex;
            gap: 10px;
          }

          .nav-links button {
            background: transparent;
            border: none;
            padding: 8px 14px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 500;
            color: #334155;
            cursor: pointer;
            transition: all 0.25s ease;
          }

          .nav-links button:hover {
            background: #f1f5f9;
            color: #0f172a;
          }

          .logout-btn {
            background: #fee2e2 !important;
            color: #991b1b !important;
            border-radius: 10px;
            font-weight: 600;
          }

          .logout-btn:hover {
            background: #fecaca !important;
          }
        `}
      </style>

      <div className="nav-bar">
        <h3
          className="nav-title"
          onClick={() => navigate("/dashboard")}
        >
          FloodSense – Govt System
        </h3>

        <div className="nav-links">
          {[
            "dashboard",
            "map",
            "complaints",
            "alerts",
            "actions",
            "analytics",
            "settings",
            "about",
          ].map((p) => (
            <button key={p} onClick={() => navigate(`/${p}`)}>
              {p.toUpperCase()}
            </button>
          ))}

          {/*  LOGOUT */}
          <button className="logout-btn" onClick={handleLogout}>
            LOGOUT
          </button>
        </div>
      </div>
    </>
  );
}
