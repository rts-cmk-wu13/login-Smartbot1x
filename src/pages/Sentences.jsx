import { Link } from "react-router";
export default function Sentences() {
  return (
    <section>
      <Link to="/">
        {" "}
        <button className="logud-btn  text-white">Log out</button>
      </Link>
      <br />
      <h1>Statements</h1>
      <p>
        These socks do not match.
        <br />
        This coffee shop is cozy.
        <br />
        It is never too late to learn.
      </p>
    </section>
  );
}
