import React from "react";
import { Container } from "reactstrap";
import CardCom from "../../Components/CardCom/CardCom";
import { useState } from "react";
import { useEffect } from "react";
import Products from "../../../Utils/Products.json";
import axios from "axios";
import { BE_URL } from "../../../Configue";
import { toast } from "react-toastify";

function Chain({ textsearch }) {
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
            e?.category?.some?.((e) => e === "chain") &&
            // eslint-disable-next-line no-undef
            e?.title?.toLowerCase?.()?.includes?.(textsearch?.toLowerCase?.())
          );
        });
        setData(filterData);
      })
      .catch((err) => toast.error(err?.message));
  }, [textsearch]);
  return (
    <>
      <div className="accessories">
        <Container className=" py-24 text-center drop-shadow-md">
          <div>
            <h2 className="font-semibold pb-10 font-mono text-capitalize">
              Chain Men's Jewelry Will Make You Stay In Style
            </h2>
            <p className="w-2/5 m-auto text-justify pb-10 font-medium">
              Explore our GEN-Z collection and discover men's fashion neck
              chains that redefine style. Elevate your look with our
              meticulously curated range of men's stylish chains, designed to
              add a touch of sophistication to your ensemble. Our selection
              encompasses a variety of options, from subtle elegance to bold
              statements, ensuring you find the perfect style chain for men.
              Embrace the blend of craftsmanship and trendiness as our
              collection sets new standards in men's jewelry fashion. Upgrade
              your accessory game today with our exquisite men's chains that
              exude timeless appeal and contemporary charm.
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

export default Chain;
