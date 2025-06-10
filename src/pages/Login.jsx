import "../style/Login.sass";
import Logo from "/assets/emojione_bird.svg";
import { Link } from "react-router";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

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
        <button className="login-btn flex justify-center items-center  bg-white hover:bg-gray-300 hover:text-black text-black font-bold py-2 px-4 rounded">
          Login{" "}
          <span>
            <IoArrowForward />
          </span>
        </button>
        <button
          type="button"
          class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
        >
          <p class="flex items-center justify-center gap-2 rounded-3xl">
            Log in with{" "}
            <span>
              <FcGoogle />
            </span>
          </p>
        </button>
      </div>
    </>
  );
}
