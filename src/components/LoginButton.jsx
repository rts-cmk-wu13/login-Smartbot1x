import { Link } from "react-router";
import { IoArrowForward } from "react-icons/io5";

export default function LoginButton() {
  return (
    <Link to="/Login" className="Button__link">
      <button className="second_button flex justify-center items-center  bg-white hover:bg-gray-300 hover:text-black text-black font-bold py-2 px-4 rounded">
        Login{" "}
        <span>
          <IoArrowForward />
        </span>
      </button>
    </Link>
  );
}
