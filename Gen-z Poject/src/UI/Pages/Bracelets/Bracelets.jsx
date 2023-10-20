import React from "react";
import CardCom from "../../Components/CardCom/CardCom";
import { Container } from "reactstrap";
import Products from "../../../Utils/Products.json";
import { useState, useEffect } from "react";
import axios from "axios";
import { BE_URL } from "../../../Configue";
import { toast } from "react-toastify";

function Bracelets({ textsearch }) {
  let [data, setData] = useState([]);

  
  useEffect(() => {
    axios({
      method: "get",
      url: `${BE_URL}product/getAll`,
    })
    
    .then((resData) => {
        let newData = resData?.data?.data;
        let filterData = newData?.filter?.((e) => {
          return (
            e?.category?.some?.((e)=> e === "bracelets")   &&
            // eslint-disable-next-line no-undef
            e?.title?.toLowerCase?.()?.includes?.(textsearch?.toLowerCase?.())
          );
        });
        setData(filterData);
      })
      .catch((err)=>toast.error(err?.message))
  },[textsearch]);

  return (
    <>
      <Container className="py-24 text-center drop-shadow-md">
        <div>
          <h3 className="font-semibold pb-10 font-mono">
            Selection of Men’s Designer Bracelets
          </h3>
          <p className="w-2/5 m-auto text-justify pb-10 font-medium">
            Whether you go for something bold or subtle, GEN-Z's collection of
            men's designer bracelets has what you are looking for. Adopt the
            classic and unique look in a natural stone beaded design, or choose
            simplicity and coolness with a premium metal strap bracelet. The
            finest and the most popular men’s bracelets for 2023 are here to
            shop.
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

export default Bracelets;
