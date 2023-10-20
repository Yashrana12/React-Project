import {  Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import "./CardCom.css";

// eslint-disable-next-line react/prop-types
function CardCom({ data,onclick }) {
  return (
    <>
      <Card
        style={{
          width: "12rem",
        }}
        className="card overflow-hidden"
        role="button"
        onClick={() => onclick(data?._id)}
      >
        <div className="overflow-hidden">
          <img
            alt="Sample"
            // eslint-disable-next-line react/prop-types
            src={data?.thumbnail}
            className="cardimg bg-gray-200"
          />
        </div>
        <CardBody className="overflow-hidden">
          {/*  eslint-disable-next-line react/prop-types */}
          <CardTitle tag="h6">{data?.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {/* eslint-disable-next-line react/prop-types */}
            {data?.price}
          </CardSubtitle>
          
        </CardBody>
      </Card>
    </>
  );
}

export default CardCom;
