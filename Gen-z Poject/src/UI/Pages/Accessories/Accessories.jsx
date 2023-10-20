import { Container } from "reactstrap";
import { useEffect, useState } from "react";
import CardCom from "../../Components/CardCom/CardCom";
// import Product from "../../../Utils/Products.json";
import "./Accessories.css";
import axios from "axios";
import { BE_URL } from "../../../Configue";
import { toast } from "react-toastify";

function Accessories({ textsearch }) {
  let [productdata, setProductData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${BE_URL}product/getAll`,
    })
      .then((resData) => {
        let newData = resData?.data?.data;
        let filterdata = newData?.filter?.((e) => {
          return (
            e?.category?.some?.((e) => e === "accessories") &&
            e?.title?.toLowerCase?.()?.includes?.(textsearch?.toLowerCase?.())
          );
        });
        setProductData(filterdata);
      })
      .catch((err) => toast.error(err?.message));
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
            {productdata?.map?.((e, i) => {
              return <CardCom key={i} data={e} />;
            })}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Accessories;
