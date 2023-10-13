import { Container } from "reactstrap";
import { useEffect, useState } from "react";
import CardCom from "../../Components/CardCom/CardCom";
import Product from "../../../Utils/Products.json";
import "./Accessories.css";

function Accessories({ textsearch }) {
  let [data, setData] = useState([]);
  useEffect(() => {
    let filterdata = Product?.filter?.((e) => {
      return (
        e?.category === "accessories" &&
        e?.title?.toLowerCase?.()?.includes?.(textsearch?.toLowerCase?.())
      );
    });
    setData(filterdata);
  }, [textsearch]);
  return (
    <>
      <div className="accessories">
        <Container className=" py-24 text-center drop-shadow-md">
          <div>
            <h2 className="font-semibold pb-10 font-mono">
              PREMIUM COLLECTION HERE
            </h2>
            <p className="w-2/5 m-auto text-justify pb-10 font-medium">
              Traditionally, these were simple chain bracelets in precious or
              semi-precious metals, and these are still going to be the styles
              that are the most versatile and classically elegant. Bracelets
              worn by most men today are typically going to be made from other
              materials, though, such as fabric, leather, or beads.
            </p>
          </div>
          <div
            className="flex flex-wrap justify-center gap-3 pro
          "
          >
            {data?.map?.((e, i) => {
              return <CardCom key={i} data={e} />;
            })}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Accessories;
