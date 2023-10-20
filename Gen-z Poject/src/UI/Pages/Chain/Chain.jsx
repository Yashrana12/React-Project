import { Container } from "reactstrap";
import CardCom from "../../Components/CardCom/CardCom";
import { useState } from "react";
import { useEffect } from "react";
import Products from "../../../Utils/Products.json";
import axios from "axios";
import { BE_URL } from "../../../Configue";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../Redux/Features/ProductSlice/ProductSlice";
import { useNavigate } from "react-router-dom";

function Chain({ textsearch }) {
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
      return e?.category?.some?.((e) => e === "chain");
    });
    setData(newdata);
  }, [product]);

  let fetch = (id) => {
    navigate(`/singleproduct/${id}`);
    window.scroll(0, 0);
  };
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
              return <CardCom key={i} data={e} onclick={fetch} />;
            })}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Chain;
