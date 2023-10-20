import React from "react";
import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import Products from "../../../Utils/Products.json";
import CardCom from "../../Components/CardCom/CardCom";
import axios from "axios";
import { BE_URL } from "../../../Configue";
import { toast } from "react-toastify";

function NewEdition({ textsearch }) {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${BE_URL}product/getAll`,
    })
      .then((resData) => {
        let newData = resData?.data?.data;
        let filterData = newData?.filterData?.((e) => {
          return (
            e?.category?.some?.((e) => e === "edition") &&
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
          <h3 className="font-semibold pb-10 font-mono">New Arrivals</h3>
          <p className="w-2/5 m-auto text-justify pb-10 font-medium">
            All products featured on GEN-Z are independently selected by our
            editors. However, we may earn affiliate revenue on this article and
            commission when you buy something. Much to our delight, the best
            men’s jewelry has been evolving. Husbands, boyfriends, friends,
            fathers, sons have so much more to pick from than a chain necklace
            or a leather wrap bracelet—and even those have gotten better if
            that’s still your fancy. Think stones, color, mixed materials, and
            sometimes a bit of sparkle for the more daring of the lot.
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

export default NewEdition;
