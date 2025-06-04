import "../style/Login.sass";
import Logo from "/assets/emojione_bird.svg";
import { Link } from "react-router";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";

export default function Login() {
  return (
    <>
      <div className="login-container">
        <Link to="/">
          <button className="back-btn">
            <IoArrowBackSharp />
          </button>
        </Link>
        <h1>Login</h1>
        <div className="logo">
          <img src={Logo} alt="Logo" className="Logo" />
        </div>
        <input
          type="email"
          placeholder="Email address"
          className="input-field"
        />
        <input type="password" placeholder="Password" className="input-field" />
        <button className="login-btn">
          Login{" "}
          <span>
            <IoArrowForward />
          </span>
        </button>
      </div>
    </>
  );
}
