import React from "react";
import { Content } from "antd/es/layout/layout";
import { Container } from "reactstrap";
// import HeaderCom from "../../Components/HeaderCom/HeaderCom";

function Acessories() {
  return (
    <>
      <Content
        style={{
          backgroundColor: "red",
          display: "grid",
          placeContent: "center",
          height: "100vh",
          width: "100%",
          fontSize: "200px",
        }}
      >
        <Container style={{}}>
          <div>Acessories</div>
        </Container>
      </Content>
    </>
  );
}

export default Acessories;
