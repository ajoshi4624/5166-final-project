import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { saveToken } from "../auth";

export default function Login() {
  const [username, setUsername] = useState("apoorva");
  const [password, setPassword] = useState("apoorva");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      const res = await api.post("/auth/login", { username, password });
      saveToken(res.data.token);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      console.error(err);
      setError("Invalid username or password.");
    }
  }

  return (
    <div className="login-page">
      <div className="login-card" role="main">
        <h1>Login to A02</h1>
        <p className="login-subtitle">
          Use the demo credentials to access the dashboard and charts.
        </p>

        <form onSubmit={handleSubmit} aria-label="Login form">
          <div className="form-field">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              aria-required="true"
            />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-required="true"
            />
          </div>

          <button type="submit">Log in</button>
          {error && (
            <p className="login-error" role="alert">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
