import Logo from "/assets/emojione_bird.svg";
import "../style/Homepage.css";
import { Link } from "react-router";
import { IoArrowForward } from "react-icons/io5";
import LoginButton from "../components/LoginButton";

function Home() {
  return (
    <>
      <section className="home__container">
        <img src={Logo} alt="Logo" className="Logo" />
        <h1>early bird.</h1>
        <p>Your local discount mate</p>
      </section>

      <article className="Button__container">
        <Link to="/signup" className="Button__link">
          <button className="first_button">Sign Up</button>
        </Link>
        <Link to="/Login" className="Button__link">
          <LoginButton />
        </Link>
      </article>
    </>
  );
}

export default Home;
