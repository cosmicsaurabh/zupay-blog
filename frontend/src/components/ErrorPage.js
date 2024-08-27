import { NavLink } from "react-router-dom";
import "./ErrorPage.css"; 
const ErrorPage = () => {
  return (
    <>
      <section id="error-page">
        <div className=" content">
          <h2 className="header">404</h2>
          <h4>Sorry! Page not found</h4>
          <p>
            Oops! It seems like the page you're trying to access doesn't exist.
            Please check the URL and try again.
          </p>
          <div className="btns">
            <NavLink to="/">Home Coming...</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;

