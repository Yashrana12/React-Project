import { Container } from "reactstrap";
import { useEffect, useState } from "react";
import CardCom from "../../Components/CardCom/CardCom";
// import Product from "../../../Utils/Products.json";
import "./Accessories.css";
import axios from "axios";
import { BE_URL } from "../../../Configue";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../../Redux/Features/ProductSlice/ProductSlice";

function Accessories({ textsearch }) {
  let [productdata, setProductData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    window.scroll(0, 0);
  }, []);

  const { product, err } = useSelector((state) => {
    return state?.productReducer;
  });

  useEffect(() => {
    let data = product?.filter?.((e) => {
      return e?.category?.some?.((e) => e === "accessories");
    });
    setProductData(data);
  }, [product]);

  let navigate = useNavigate();

  const redirect = (id) => {
    navigate(`/singaleproduct/${id}`);
  };

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
              return <CardCom key={i} data={e} onclick={redirect} />;
            })}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Accessories;
