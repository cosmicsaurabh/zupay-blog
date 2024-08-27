import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useAuth } from "./store/auth";
import { Navbar } from "./Navbar";


const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const { isLoggedIn, saveTokenInLocalStr, saveCurrentUserIdInLocalStr } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };
  // console.log(`${process.env.REACT_APP_BASE_BACKEND_URL}/api/auth/login`);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      if (response.ok) {
        const responseData = await response.json();
        saveTokenInLocalStr(responseData.token);
        saveCurrentUserIdInLocalStr(responseData.userkiid);
        navigate("/");
      } else if (response.status === 400) {
        const responseData = await response.json();
        setErrorMsg(responseData.msg);
      } else {
        setErrorMsg("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setErrorMsg("Service is down....try again later");
    }
  };

  return (
    <>
    <Navbar/>
      {isLoggedIn ? (
        navigate("/")
      ) : (
        <div className="full-page">
          <div className="login-container">
            <div className="form-header">
              <h1>Login</h1>
            </div>
            <form onSubmit={handleFormSubmit} className="login-form">
              <div className="form-group">
                
                <input
                  type="text"
                  name="email"
                  value={credentials.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required 
                />
              </div>
              <div className="form-group">
                
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  placeholder="Password "
                  required 
                />
              </div>
              {errorMsg && <p className="error-message">{errorMsg}</p>}
              <button type="submit" className="submit-button">
                Login Now
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
