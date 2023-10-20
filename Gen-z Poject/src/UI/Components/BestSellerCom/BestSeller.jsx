// import { useState } from "react";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import { Container } from "reactstrap";
import { useEffect } from "react";
import Product from "../../../Utils/Products.json";
import CardCom from "../CardCom/CardCom";

function BestSeller() {
  let [data, setData] = useState([]);
  useEffect(() => {
    let filterData = Product?.sort?.((a, b) => {
      return b.bestseller - a.bestseller;
    });
    setData(filterData?.slice?.(0, 5));
  }, []);
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
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 2,
            itemsToScroll: 2,
            // minWidth: 768,
          },
        ]}
        speed={2000}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <Container>
          <div style={{ width: "100vw", height: "" }}>
            <div className="py-16">
              <div className="text-center pb-10">
                <h1>Our Best Seller</h1>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {data?.map?.((e, i) => {
                  return <CardCom key={i} data={e} />;
                })}
              </div>
            </div>
          </div>
        </Container>
      </ReactSimplyCarousel>
    </div>
  );
}

export default BestSeller;
