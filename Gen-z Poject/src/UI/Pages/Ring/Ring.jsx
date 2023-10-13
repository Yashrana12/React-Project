import React from "react";
import CardCom from "../../Components/CardCom/CardCom";
import { Container } from "reactstrap";
import { useState } from "react";
import { useEffect } from "react";
import Products from "../../../Utils/Products.json";

function Ring({ textsearch }) {
  let [data, setData] = useState([]);
  useEffect(() => {
    let filterData = Products?.filter?.((e) => {
      return (
        e?.category === "ring" &&
        // eslint-disable-next-line no-undef
        e?.title?.toLowerCase?.()?.includes?.(textsearch?.toLowerCase?.())
      );
    });
    setData(filterData);
  }, [textsearch]);
  return (
    <>
      <Container className="py-24 text-center drop-shadow-md">
        <div>
          <h3 className="font-semibold pb-10 font-mono ">
            MEN'S RINGS COLLECTIONS
          </h3>
          <p className="w-2/5 m-auto text-justify pb-10 font-medium">
            With our wide variety of rings, it can be hard to decide exactly
            which ring is the best choice for you. Choose the materials or
            qualities you desire in a ring, and explore your options.Stay
            current with the newest styles in men's accessories with our latest
            arrivals of men's clothing, and designer jewelry by GEN-Z.Shop our
            newest bracelets, necklaces, and more! Keep up with the latest
            styles and trends as they appear
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {data?.map?.((e, i) => {
            return <CardCom key={i} data={e} />;
          })}
        </div>
      </Container>
    </>
  );
}

export default Ring;
