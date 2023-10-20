import React from "react";
import "./AboutUS.css";
import { FaShare } from "react-icons/fa";
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia" />;
import "./AboutUs.css";

function AboutUS() {
  return (
    <>
      {" "}
      <div className="container-fluid py-5 aboutus">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-12 ">
              {/* <img
                src="/Images/iced.jpg"
                className="img-fluid  "
                style={{ height: "90vh", width: "100vw", borderRadius: "20px" }}
                alt=""
              /> */}
            </div>
            <div className="col-lg-12 wow bounceInUp" data-wow-delay="0.3s">
              <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-black rounded-pill px-4 py-1 mb-3">
                About Us
              </small>
              <h1 className="display-5 mb-4">
                Trusted By 200 + satisfied clients
              </h1>
              <p className="mb-4 fw-bold">
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore eit esdioilore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullaemco laboeeiris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor iesdein
                reprehendeerit in voluptate velit esse cillum dolore.
              </p>
              <div className="row g-4 text-dark mb-5 ">
                <div className="col-sm-6 flex flex-wrap ">
                  <span className=" d-inline  m-1 h-100 t-bold w-5">
                    <FaShare />
                  </span>
                  Accurate and Fast Delivery
                </div>
                <div className="col-sm-6 flex flex-wrap">
                  <span className=" d-inline  m-1 h-100 t-bold w-5">
                    <FaShare />
                  </span>
                  24/7 Customer Support
                </div>
                <div className="col-sm-6 flex flex-wrap">
                  <span className=" d-inline  m-1 h-100 t-bold w-5">
                    <FaShare />
                  </span>
                  Easy Customization Options
                </div>
                <div className="col-sm-6 flex flex-wrap">
                  <span className=" d-inline  m-1 h-100 t-bold w-5">
                    <FaShare />
                  </span>
                  Exotic Deals For Premium Products
                </div>
              </div>
              <a href="" className="btn btn-dark py-3 px-5 rounded-pill">
                About Us<i className="fas fa-arrow-right ps-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUS;
