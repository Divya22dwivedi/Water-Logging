import React, { useState } from "react";

export default function Login() {
  const [id, setId] = useState("");
  const [otp, setOtp] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (id !== "" && otp === "123456") {
      localStorage.setItem("loggedIn", "true");
      window.location.replace("/dashboard");
    } else {
      alert("Use OTP: 123456");
    }
  };

  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            font-family: "Inter", "Segoe UI", Arial, sans-serif;
          }

          /* Page with background image */
          .login-page {
            min-height: 100vh;
            background-image: url("https://instasize.com/api/image/01f04ab0b82070e598ab6e241b36ec2bf2e2acbfaded939dcddb3a25d1bf26c2.jpeg");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }

          /* Dark overlay */
          .login-page::before {
            content: "";
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.45);
          }

          /* Login card (glass effect) */
          .login-card {
            position: relative;
            z-index: 2;
            width: 380px;
            padding: 42px;
            background: rgba(255, 255, 255, 0.82);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            box-shadow: 0 25px 60px rgba(0,0,0,0.35);
            animation: fadeUp 0.8s ease;
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .login-card h2 {
            margin-bottom: 28px;
            text-align: center;
            color: #0f172a;
            font-weight: 600;
            letter-spacing: 0.4px;
          }

          .login-card form {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .login-card input {
            padding: 14px 18px;
            border-radius: 14px;
            border: 1px solid #cbd5e1;
            font-size: 14px;
            background: rgba(255,255,255,0.95);
            transition: all 0.3s ease;
          }

          .login-card input:focus {
            outline: none;
            border-color: #0891b2;
            box-shadow: 0 0 0 3px rgba(8,145,178,0.25);
          }

          .login-card button {
            margin-top: 10px;
            padding: 14px;
            border-radius: 16px;
            border: none;
            background: linear-gradient(135deg, #0ea5a4, #0369a1);
            color: white;
            font-size: 15px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.25s ease;
          }

          .login-card button:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 28px rgba(3,105,161,0.45);
          }
        `}
      </style>

      <div className="login-page">
        <div className="login-card">
          <h2>Government Login</h2>

          <form onSubmit={handleLogin}>
            <input
              placeholder="Govt ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />

            <input
              placeholder="OTP (123456)"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button type="submit">LOGIN</button>
          </form>
        </div>
      </div>
    </>
  );
}
