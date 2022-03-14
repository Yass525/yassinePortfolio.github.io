import "./about.css";
import Award from "../../img/award.png";
import Me from "../../img/me2.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Sub Title here 
        </p>
        <p className="a-desc">
          A paragraph here
        </p>
        {/* <div className="a-award">
          <img src="" alt="we can put image here" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">title image</h4>
            <p className="a-award-desc">
              text image
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;