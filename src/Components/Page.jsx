import React from "react";
import About from "./About";
import Partners from "./Partners";
import Services from "./Services";

const Page = () => {
  return (
    <div>
      <div className="jsp1">
        <div className="lefta1">
          <div className="jsp2">
            <div className="lefta11"></div>
            <div className="righta11">
              Best Business Platform - World Record 2021
            </div>
          </div>
          <div className="jsp3">
            <h2>Reach Your Business Goals in Record Time</h2>
          </div>
          <div className="jsp3">
            <p>
              Support small business and join the nationwide movement to
              encourage commercial support for the millions of minority owned
              businesses helping world economy.
            </p>
          </div>
          <div className="jsp4">
            <div className="lefta12">Get Started</div>
            <div className="righta12">
              <div className="lefta121"></div>
              <div className="righta121">Book a 30 Min Quick Meeting</div>
            </div>
          </div>
        </div>
        <div className="righta1"></div>
      </div>
      <Partners />
      <Services />
      <About />
    </div>
  );
};

export default Page;
