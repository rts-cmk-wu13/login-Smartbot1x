import { IoArrowForward } from "react-icons/io5";

export default function Signupbttn({ onClick }) {
  return (
    <button className="first_button" onClick={onClick}>
      Sign Up
      <span>
        {" "}
        <IoArrowForward />
      </span>
    </button>
  );
}
