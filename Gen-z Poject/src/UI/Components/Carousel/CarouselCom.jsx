import React from "react";

function CarouselCom() {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide ">
        <div className="carousel-inner mt-lg-5">
          <div className="carousel-item active">
            <img
              src="https://www.swashaa.com/cdn/shop/files/leather_Bracelet_Banner_06-07-2023_-min_1512x.jpg?v=1688647134"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.swashaa.com/cdn/shop/files/Hiphop_Collection_Banner__-min_1512x.jpg?v=1690889038"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.swashaa.com/cdn/shop/collections/Hiphop_Collection_Banner__1_1600x.jpg?v=1690798373"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default CarouselCom;
