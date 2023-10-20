import React from "react";
// import Headercom from "../../Components/HeaderCom/HeaderCom";
import { Layout } from "antd";
const { Content } = Layout;
import CarouselCom from "../../Components/Carousel/CarouselCom";
import BestSeller from "../../Components/BestSellerCom/BestSeller";
import AboutUS from "../AboutCom/AboutUS";

const HomePage = () => {
  return (
    <>
      <Layout className="layout">
        <Content>
          <CarouselCom />
          <BestSeller />

          {/* <AboutUS /> */}
        </Content>
      </Layout>
    </>
  );
};

export default HomePage;
