import CardCom from "../../Components/CardCom/CardCom";
import { Container } from "reactstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { BE_URL } from "../../../Configue";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../../Redux/Features/ProductSlice/ProductSlice";

function Bracelets({ textsearch }) {
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
      return e?.category?.some?.((e) => e === "bracelets");
    });
    setData(newdata);
  }, [product]);

  let fetch = (id) => {
    navigate(`/singleproduct/${id}`);
  };

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
            return <CardCom key={i} data={e} onclick={fetch} />;
          })}
        </div>
      </Container>
    </>
  );
}

export default Bracelets;
