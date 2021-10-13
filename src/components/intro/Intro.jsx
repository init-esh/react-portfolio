import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Developer", "Designer", "Content Creator"]
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/man.png"
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There I'm</h2>
          <h1>Nitesh Soni</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img
            src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/down.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
