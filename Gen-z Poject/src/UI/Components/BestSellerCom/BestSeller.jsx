import { useEffect, useState } from "react";
import Product from "../../../Utils/Products.json";
import CardCom from "../CardCom/CardCom";
import { Container } from "reactstrap";

function BestSeller() {
  let [data, setData] = useState([]);
  useEffect(() => {
    let filterData = Product?.sort?.((a, b) => {
      return b.bestseller - a.bestseller;
    });
    setData(filterData?.slice?.(0, 5));
  }, []);
  return (
    <>
      <Container>
        <div className="py-16">
          <div className="text-center pb-10">
            <h1>
              Our Best Seller Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Deserunt, labore natus at quidem aperiam reprehenderit dicta
              assumenda libero temporibus maxime, illum aspernatur impedit sed
              excepturi rerum sapiente facilis error nihil Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam doloribus aspernatur architecto impedit excepturi esse expedita maxime! At dolorem eius asperiores et reprehenderit autem repellat amet cupiditate, possimus distinctio iste.
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {data?.map?.((e, i) => {
              return <CardCom key={i} data={e} />;
            })}
          </div>
        </div>
      </Container>
    </>
  );
}

export default BestSeller;
