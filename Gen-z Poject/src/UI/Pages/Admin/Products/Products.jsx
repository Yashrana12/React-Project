import { useState, useEffect } from "react";
import { Button, Container } from "reactstrap";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";
import { useDispatch } from "react-redux";
import { fetchData } from "../../../../Redux/Features/ProductSlice/ProductSlice";

function Products() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  let [productdata, setProductData] = useState({});

  let dispath = useDispatch();
  useEffect(() => {
    dispath(fetchData());
  }, []);

  return (
    <>
      <Container className="my-5">
        <hr />
        <div className="flex justify-content-end">
          <div className="">
            <Button color="danger" className=" " onClick={toggle}>
              Add Product
            </Button>
          </div>
        </div>
        <hr />
        <ProductForm
          modal={modal}
          toggle={toggle}
          productdata={productdata}
          setProductData={setProductData}
        />
        <ProductTable setProductData={setProductData} toggle={toggle} />
      </Container>
    </>
  );
}

export default Products;
