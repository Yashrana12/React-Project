import React from "react";
import "./Carousel.css";

function CarouselCom() {
  return (
    <>
      {/* h-screen w-full bg-cover bg-center relative bg-fixed */}
      <div className="hero">
        <img src="/Images/j.jpg" alt="" />
        {/* absolute top-0 z-10 drop-shadow-md */}
        <div className="innerhero ">
          <img src="/Images/bling.jpg" alt="" />
        </div>
        {/* <div
          className="absolute top-40 left-0 text-yellow-900 w-full"
          style={{ fontSize: "200px" }}
        >
          <marquee
            // eslint-disable-next-line react/no-unknown-property
            behavior="alternate"
            direction="left"
            // eslint-disable-next-line react/no-unknown-property
            scrollamount="50"
            className="font-mono"
          >
            Let the chocolate melt your worries away..
          </marquee>
        </div> */}
      </div>
      {/* <div
        className="absolute left-0 text-yellow-500 w-full"
        style={{ fontSize: "200px", top: "550px" }}
      >
        <marquee
          // eslint-disable-next-line react/no-unknown-property
          behavior="scroll"
          direction="right"
          // eslint-disable-next-line react/no-unknown-property
          scrollamount="45"
          className="font-mono"
        >
          ..heaven little our to welcome
        </marquee>
      </div> */}
    </>
  );
}

export default CarouselCom;
