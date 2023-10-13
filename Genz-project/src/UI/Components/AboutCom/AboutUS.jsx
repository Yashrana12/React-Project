import React from "react";
import "./AboutUS.css";

function AboutUS() {
  return (
    <>
      {" "}
      <div className="container-fluid py-6">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
              <img
                src="/Images/iced.jpg"
                className="img-fluid rounded d-flex"
                alt=""
              />
            </div>
            <div className="col-lg-7 wow bounceInUp" data-wow-delay="0.3s">
              <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                About Us
              </small>
              <h1 className="display-5 mb-4">
                Trusted By 200 + satisfied clients
              </h1>
              <p className="mb-4">
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore eit esdioilore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullaemco laboeeiris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor iesdein
                reprehendeerit in voluptate velit esse cillum dolore Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Illum nulla quasi
                voluptatibus enim iure, et deleniti facilis saepe, asperiores
                placeat, laborum molestiae dolor neque impedit sapiente nostrum
                voluptas qui dicta Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Possimus consequuntur ipsam earum tenetur ex,
                vel totam fugiat quibusdam velit quos magni natus pariatur
                provident illum ut molestiae rerum laudantium. Sapiente
              </p>
              <div className="row g-4 text-dark mb-5">
                <div className="col-sm-6">
                  <i className="fas fa-share text-primary me-2"></i>Fresh and
                  Fast food Delivery
                </div>
                <div className="col-sm-6">
                  <i className="fas fa-share text-primary me-2"></i>24/7
                  Customer Support
                </div>
                <div className="col-sm-6">
                  <i className="fas fa-share text-primary me-2"></i>Easy
                  Customization Options
                </div>
                <div className="col-sm-6">
                  <i className="fas fa-share text-primary me-2"></i>Delicious
                  Deals for Delicious Meals
                </div>
              </div>
              <a href="" className="btn btn-primary py-3 px-5 rounded-pill">
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
