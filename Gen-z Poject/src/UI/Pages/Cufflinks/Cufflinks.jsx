import React from "react";
import CardCom from "../../Components/CardCom/CardCom";
import { Container } from "reactstrap";
import { useEffect } from "react";
import { useState } from "react";
import Products from "../../../Utils/Products.json";
import { BE_URL } from "../../../Configue";
import axios from "axios";
import { toast } from "react-toastify";
import { fetchData } from "../../../Redux/Features/ProductSlice/ProductSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Cufflinks({ textsearch }) {
  let [data, setData] = useState([]);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchData());
    window.scroll(0, 0);
  }, []);

  const { product, err } = useSelector((state) => {
    return state.productReducer;
  });

  useEffect(() => {
    let newdata = product?.filter?.((e) => {
      return e?.category?.some?.((e) => e === "cufflinks");
    });
    setData(newdata);
  }, [product]);

  let fetch = (id) => {
    navigate(`/singleproduct/${id}`);
    window.scroll(0, 0);
  };
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
            return <CardCom key={i} data={e} onclick={fetch} />;
          })}
        </div>
      </Container>
    </>
  );
}

export default Cufflinks;
