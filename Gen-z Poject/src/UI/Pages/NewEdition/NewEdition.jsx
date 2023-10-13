import React from "react";
import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import Products from "../../../Utils/Products.json";
import CardCom from "../../Components/CardCom/CardCom";

function NewEdition({ textsearch }) {
  let [data, setData] = useState([]);
  useEffect(() => {
    let productHandler = Products?.sort((a, b) => {
      return b.price - a.price;
    });
    let filterData = productHandler?.filter?.((e) => {
      return (
        e?.category === "edition" &&
        // eslint-disable-next-line no-undef
        e?.title?.toLowerCase?.()?.includes?.(textsearch?.toLowerCase?.())
      );
    });
    setData(filterData.slice(0, 20));
  }, [textsearch]);
  return (
    <>
      <Container className="py-24 text-center drop-shadow-md">
        <div>
          <h3 className="font-semibold pb-10 font-mono">New Arrivals</h3>
          <p className="w-2/5 m-auto text-justify pb-10 font-medium">
            All products featured on GEN-Z are independently selected by our
            editors. However, we may earn affiliate revenue on this article and
            commission when you buy something. Much to our delight, the best
            men’s jewelry has been evolving. Husbands, boyfriends, friends,
            fathers, sons have so much more to pick from than a chain necklace
            or a leather wrap bracelet—and even those have gotten better if
            that’s still your fancy. Think stones, color, mixed materials, and
            sometimes a bit of sparkle for the more daring of the lot.
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

export default NewEdition;
