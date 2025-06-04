import { Link } from "react-router";
import { IoArrowForward } from "react-icons/io5";

export default function LoginButton() {
  return (
    <Link to="/Login" className="Button__link">
      <button className="second_button">
        Login{" "}
        <span>
          <IoArrowForward />
        </span>
      </button>
    </Link>
  );
}
