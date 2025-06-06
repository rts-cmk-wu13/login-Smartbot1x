import { useEffect, useRef } from "react";
import { Link } from "react-router";
import "../style/error.css";

export default function NotFound() {
  const firstDigitRef = useRef(null);
  const secondDigitRef = useRef(null);
  const thirdDigitRef = useRef(null);

  useEffect(() => {
    function randomNum() {
      return Math.floor(Math.random() * 9) + 1;
    }

    let i1 = 0,
      i2 = 0,
      i3 = 0;
    const time = 30;

    const loop3 = setInterval(() => {
      if (i3 > 40) {
        clearInterval(loop3);
        if (thirdDigitRef.current) thirdDigitRef.current.textContent = 4;
      } else {
        if (thirdDigitRef.current)
          thirdDigitRef.current.textContent = randomNum();
        i3++;
      }
    }, time);

    const loop2 = setInterval(() => {
      if (i2 > 80) {
        clearInterval(loop2);
        if (secondDigitRef.current) secondDigitRef.current.textContent = 0;
      } else {
        if (secondDigitRef.current)
          secondDigitRef.current.textContent = randomNum();
        i2++;
      }
    }, time);

    const loop1 = setInterval(() => {
      if (i1 > 100) {
        clearInterval(loop1);
        if (firstDigitRef.current) firstDigitRef.current.textContent = 4;
      } else {
        if (firstDigitRef.current)
          firstDigitRef.current.textContent = randomNum();
        i1++;
      }
    }, time);

    return () => {
      clearInterval(loop1);
      clearInterval(loop2);
      clearInterval(loop3);
    };
  }, []);

  return (
    <>
      <div className="error">
        <div className="container-floud">
          <div className="col-xs-12 ground-color text-center">
            <div className="container-error-404">
              <div className="clip">
                <div className="shadow">
                  <span className="digit thirdDigit" ref={thirdDigitRef}></span>
                </div>
              </div>
              <div className="clip">
                <div className="shadow">
                  <span
                    className="digit secondDigit"
                    ref={secondDigitRef}
                  ></span>
                </div>
              </div>
              <div className="clip">
                <div className="shadow">
                  <span className="digit firstDigit" ref={firstDigitRef}></span>
                </div>
              </div>
              <div className="msg">
                OH!<span className="triangle"></span>
              </div>
            </div>
            <h2 className="h1">Sorry! Page not found</h2>
          </div>
        </div>
      </div>
      <button className="text-4xl color bg-sky-500 hover:bg-sky-700 transition ease-in-out duration-300 p-4 rounded-lg">
        <Link className="text-blue-950" to="/">
          Gå til forsiden
        </Link>
      </button>
    </>
  );
}
