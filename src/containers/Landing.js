import "./Landing.css";
import "../images/codeScreen.jpg";
import { useEffect } from "react";

function Landing() {
  useEffect(() => {
    document.title = "Vignesh Ramachandran";
  }, []);
  return (
    <div className="wrapper">
      <div className="body">
        <div className="divider absDivider">
          <div className="leftHeader leftHeaderFixed">
            <div className="name">Vignesh Ramachandran</div>
            <div>Web Developer 2 at Media.net</div>
            <div>I like to build sustainable,reliable and fun software.</div>
            {/* <div>Here is my mini resume.</div> */}
          </div>

          <div className="icons">
            {" "}
            <img
              src="../LinkedIN.png"
              alt="LinkedIN"
              onClick={() => {
                window.open("https://www.linkedin.com/in/vig/", "_blank");
              }}
            ></img>
            <a href="mailto:vigneshklr7@gmail.com">
              <img src="../Mail.png" alt="mail"></img>
            </a>
            <img
              src="../LeetCode.png"
              alt="LeetCode"
              onClick={() => {
                window.open("https://leetcode.com/vig7/", "_blank");
              }}
            ></img>
          </div>
        </div>
        <div className="divider">
          <div className="leftHeader">
            <div className="desc">
              I started my journey in tech in 2019 with <b>Media.net</b> still
              being there currently.I had privilege to build from scratch few
              microservices and UI dashboards.Over my time here I have also
              worked in monolothic applications collabrating with team all to
              deliver data in a clean, reliable and intutive way.
            </div>{" "}
            <div className="desc1">
              When not at work I like to read books, play games,run and love
              (and hate) watching{" "}
              <b className="manchester">Manchester United</b>.
            </div>
            <div className="desc1">
              Below are a few things I have worked on and my responsibilities in
              brief.
            </div>{" "}
            <div className="desc1">
              Tech Stack - SpringBoot, Java, React, Nextjs, Redux, etc
            </div>
            <div className="desc">
              <div>
                <span className="timeframe">2022 - Present</span>
                <b>Web Developer 2</b>
              </div>
            </div>{" "}
            <div className="desc1">
              <ul>
                <li>
                  Ownership of couple of microservices that help user understand
                  and deduce data and its patterns.
                </li>{" "}
                <li>
                  Created a service that delivers data on demand based on
                  timeframe provided by user.
                </li>
                <li>
                  Worked on a service that alerts users on any data irregularity
                  across mutiple datastores.
                </li>
              </ul>
            </div>{" "}
            <div className="desc">
              <div>
                <span className="timeframe">2020 - 2021</span>
                <b>Web Developer</b>
              </div>
            </div>{" "}
            <div className="desc1">
              <ul>
                <li>
                  Worked in collabration with a small team to deveoped mutiple
                  UI dashboards that contained more than 10 vizualisation to
                  help users view data in desired format.
                </li>
                <li>
                  Worked on a application that is built on top of datastores
                  like Druid and Hive to provide funtions and modifications on
                  top of data stored.
                </li>
              </ul>
            </div>{" "}
            <div className="desc">
              <div>
                <span className="timeframe">2019 - 2020</span>
                <b>Associate Web Developer</b>
              </div>
            </div>{" "}
            <div className="desc1 desc2">
              <ul>
                <li>
                  Built from scratch UI dashboards that let users personlize
                  that they want to view data and offers custom modifications
                  based on user formula's.
                </li>
                <li>
                  Implemented multi-level tabular and visual formatsfor analysis
                  of multidimensional data formats. .
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
