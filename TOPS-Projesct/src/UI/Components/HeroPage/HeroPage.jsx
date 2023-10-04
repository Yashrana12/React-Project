import React from "react";

function HeroPage() {
  return (
    <>
      <div className="h-100 w-100 bg-cover bg-center relative bg-fixed">
        <img src="/Images/j.jpg" alt="" />
        <div className="absolute top-0 z-10 drop-shadow-md">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS1EykB-iB1mLaNRbRe8BRI8_W2pJo3gtEiw&usqp=CAU"
            alt=""
          />
        </div>
        <div
          className="absolute top-30 left-0 text-yellow-900 w-full"
          style={{ fontSize: "200px" }}
        >
          <marquee
            // eslint-disable-next-line react/no-unknown-property
            behavior="alternate"
            direction="left"
            // eslint-disable-next-line react/no-unknown-property
            scrollamount="40"
            className="font-mono"
          >
            Let the chocolate melt your worries away..
          </marquee>
        </div>
      </div>
      <div
        className="absolute left-0 text-yellow-500 w-full"
        style={{ fontSize: "200px", top: "550px" }}
      >
        <marquee
          // eslint-disable-next-line react/no-unknown-property
          behavior=""
          direction="up"
          // eslint-disable-next-line react/no-unknown-property
          scrollamount="45"
          className="font-mono"
        >
          ..heaven little our to welcome
        </marquee>
      </div>
    </>
  );
}

export default HeroPage;
