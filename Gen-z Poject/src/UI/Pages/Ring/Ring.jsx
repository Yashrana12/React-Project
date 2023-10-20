import React from "react";
import CardCom from "../../Components/CardCom/CardCom";
import { Container } from "reactstrap";
import { useState } from "react";
import { useEffect } from "react";
import Products from "../../../Utils/Products.json";
import { toast } from "react-toastify";
import { BE_URL } from "../../../Configue";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../../Redux/Features/ProductSlice/ProductSlice";

function Ring({ textsearch }) {
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
      return e?.category?.some?.((e) => e === "ring");
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
            return <CardCom key={i} data={e} onclick={fetch} />;
          })}
        </div>
      </Container>
    </>
  );
}

export default Ring;
