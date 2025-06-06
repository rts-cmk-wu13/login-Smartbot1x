import { Link } from "react-router";
import { IoArrowBackSharp } from "react-icons/io5";
import "../style/signup.css";
import Signupbttn from "../components/Signupbttn";
import Logo from "/assets/emojione_bird.svg";
import { useState } from "react";
import { valider } from "../components/validation";
import { FcGoogle } from "react-icons/fc";

export default function Signup() {
  const [errors, setErrors] = useState({});

  const handleSignupClick = (e) => {
    e.preventDefault();
    const form = document.querySelector(".form__container form");
    if (!form) {
      console.error("Form not found in DOM");
      return;
    }
    const { isValid, errors } = valider(e);
    setErrors(errors);
    if (isValid) {
      console.log("Form submitted successfully");
    }
  };

  return (
    <>
      <div className="Signup-container">
        <Link to="/">
          <button className="back-btn">
            <IoArrowBackSharp />
          </button>
        </Link>
        <div className="logo">
          <img src={Logo} alt="Logo" className="Logo" />
        </div>
        <article className="form__container">
          <form>
            <div className="input-container">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="input-field"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="input-container">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="input-field"
              />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>
            <div className="input-container">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input-field"
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="input-container">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="input-field"
              />
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>
          </form>
        </article>
        <div className="Button__Wrapper flex flex-col justify-center items-center gap-4">
          <Signupbttn onClick={handleSignupClick} />

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
      </div>
    </>
  );
}
