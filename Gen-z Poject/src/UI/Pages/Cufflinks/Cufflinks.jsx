import React from "react";
import CardCom from "../../Components/CardCom/CardCom";
import { Container } from "reactstrap";
import { useEffect } from "react";
import { useState } from "react";
import Products from "../../../Utils/Products.json";
import { BE_URL } from "../../../Configue";
import axios from "axios";
import { toast } from "react-toastify";

function Cufflinks({ textsearch }) {
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
            e?.category?.some?.((e) => e === "cufflinks") &&
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
      <Container className="py-24 text-center drop-shadow-md">
        <div>
          <h3 className="font-semibold pb-10 font-mono ">
            MEN'S DESIGNER PREMIUM CUFFLINKS
          </h3>
          <p className="w-2/5 m-auto text-justify pb-10 font-medium">
            Add this beautiful pair of Estoile Premium Cufflinks to your
            wardrobe and make a style statement. Not only this, this youthful
            color combination will add freshness to your whole attire in no
            time!
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

export default Cufflinks;
