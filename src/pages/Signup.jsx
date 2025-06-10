import { Link } from "react-router";
import { IoArrowBackSharp } from "react-icons/io5";
import "../style/signup.css";
import Signupbttn from "../components/Signupbttn";
import Logo from "/assets/emojione_bird.svg";
import { useState, useEffect } from "react";
import { valider } from "../components/validation";
import { FcGoogle } from "react-icons/fc";
import { URL, apiKey } from "../api/authconfig";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(URL, apiKey);

export default function Signup() {
  const [errors, setErrors] = useState({});
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

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

  const signUp = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  if (session) {
    return (
      <div className="Signup-container">
        <p>Signed in as {session.user.email}</p>
        <button onClick={signOut}>Sign out</button>
      </div>
    );
  }

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
        <div className="Button__Wrapper flex flex-col justify-center items-center gap-25">
          <Signupbttn onClick={handleSignupClick} />

          <button
            type="button"
            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            onClick={signUp}
          >
            <p className="flex items-center justify-center gap-2 rounded-3xl">
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
