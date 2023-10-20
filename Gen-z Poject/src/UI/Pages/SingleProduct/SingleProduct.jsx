import { Content } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbTruckReturn, TbReplace } from "react-icons/tb";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Container } from "reactstrap";
import { BE_URL } from "../../../Configue";
import { toast } from "react-toastify";
import "./SingleProduct.css";
import { addCart } from "../../../Redux/Features/CardSlice/CartSlice";

function SingleProduct() {
  let [displayimg, setDisplayImg] = useState(null);
  let [productData, setProductData] = useState({});
  let [count, setCount] = useState(0);
  if (count < 0) {
    return setCount(0);
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let { id } = useParams();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios({
      method: "get",
      url: `${BE_URL}product/getProductById/${id}`,
    })
      .then((resData) => {
        setProductData(resData?.data?.data);
      })
      .catch((err) => toast.error(err));
    window.scroll(0, 0);
  }, []);

  const addToCart = () => {
    dispatch(addCart(productData));
  };
  return (
    <>
      <Content>
        <Container>
          <div className="flex sp my-28">
            <div className=" left flex-1 flex gap-2 align-items-center">
              <div className="imges flex flex-column gap-2 cursor-pointer flex-wrap">
                {productData?.images?.map((e, i) => (
                  <img
                    src={e}
                    key={i}
                    alt=""
                    onClick={() => setDisplayImg(e)}
                  />
                ))}
              </div>
              <div className="singleImg flex align-items-center justify-content-center ">
                <img
                  src={displayimg || productData?.thumbnail}
                  alt=""
                  height={"400px"}
                  width={"400px"}
                />
              </div>
            </div>
            <div className="right flex-1 align-items-start">
              <p className="text-4xl">{productData?.title}</p>
              <p className="font-medium">
                <span>MRP</span>
                <span>
                  {productData?.discountPercentage === 0 || null ? (
                    <>
                      <span>{productData?.price} </span>
                    </>
                  ) : (
                    <>
                      <span
                        style={{
                          textDecoration: productData?.discountPercentage
                            ? "line-through"
                            : null,
                        }}
                        className="px-1"
                      >
                        {productData?.price}
                      </span>
                      <span>
                        {productData?.price -
                          (productData?.price *
                            productData?.discountPercentage) /
                            100}
                      </span>
                    </>
                  )}
                </span>
              </p>

              <p className="text-justify"> {productData?.description}</p>

              <div className="symbols flex justify-content-evenly gap-10 py-1 text-base align-items-center">
                <div>
                  <CiDeliveryTruck className="text-2xl m-auto" />
                  Free Delivery
                </div>
                <div>
                  <TbReplace className="text-2xl m-auto" />7 Day Replacement
                  Policy
                </div>
                <div>
                  <TbTruckReturn className="text-2xl m-auto" />
                  Easy Return
                </div>
              </div>

              <hr />

              <div className="availabel">
                <p>
                  Availabl : <b className="text-green-500 ps-1">In Stoke</b>
                </p>
                <p>
                  Category : <b className="ps-1">{productData?.category}</b>
                </p>
              </div>

              <hr style={{ border: "2px solid balck" }} />

              <div className="addtocart flex align-itmes-denter gap-3">
                <Button color="danger" onClick={() => setCount(count - 1)}>
                  <FiMinusCircle className="text-lg cursor-pointer" />
                </Button>

                <div className="w-10 text-center text-lg " type="text">
                  {count}
                </div>

                <Button color="success" onClick={() => setCount(count + 1)}>
                  <FiPlusCircle className=" text-center text-lg " />
                </Button>
              </div>

              <Button
                className="uppercase mt-6"
                color="info "
                onClick={() => addToCart()}
              >
                Add TO Cart
              </Button>
            </div>
          </div>
        </Container>
      </Content>
    </>
  );
}

export default SingleProduct;
