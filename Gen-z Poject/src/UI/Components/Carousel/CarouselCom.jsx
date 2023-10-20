import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

function CarouselCom() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        autoplay
        autoplayDelay={2000}
        itemsToShow={1}
        itemsToScroll={1}
        // forwardBtnProps={{
        //   //here you can also pass className, or any other button element attributes
        //   style: {
        //     alignSelf: "center",
        //     background: "black",
        //     border: "none",
        //     borderRadius: "50%",
        //     color: "white",
        //     cursor: "pointer",
        //     fontSize: "20px",
        //     height: 30,
        //     lineHeight: 1,
        //     textAlign: "center",
        //     width: 30,
        //   },
        //   children: <span>{`>`}</span>,
        // }}
        // backwardBtnProps={{
        //   //here you can also pass className, or any other button element attributes
        //   style: {
        //     alignSelf: "center",
        //     background: "black",
        //     border: "none",
        //     borderRadius: "50%",
        //     color: "white",
        //     cursor: "pointer",
        //     fontSize: "20px",
        //     height: 30,
        //     lineHeight: 1,
        //     textAlign: "center",
        //     width: 30,
        //   },
        //   children: <span>{`<`}</span>,
        // }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            // minWidth: 768,
          },
        ]}
        speed={2000}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div style={{ width: "100vw", height: "" }}>
          <img
            src="https://www.swashaa.com/cdn/shop/files/leather_Bracelet_Banner_06-07-2023_-min_1512x.jpg?v=1688647134"
            alt=""
          />
        </div>
        <div style={{ width: "100vw", height: 300, background: "#065535" }}>
          <img
            src="https://www.swashaa.com/cdn/shop/files/Hiphop_Collection_Banner__-min_1512x.jpg?v=1690889038"
            alt=""
          />
        </div>
        <div style={{ width: "100vw", height: 300, background: "#000000" }}>
          <img
            src="https://www.swashaa.com/cdn/shop/collections/Hiphop_Collection_Banner__1_1600x.jpg?v=1690798373"
            alt=""
          />
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default CarouselCom;
