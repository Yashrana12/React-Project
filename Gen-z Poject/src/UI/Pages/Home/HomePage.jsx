import React from "react";
// import Headercom from "../../Components/HeaderCom/HeaderCom";
import { Layout } from "antd";
const { Content } = Layout;
import CarouselCom from "../../Components/Carousel/CarouselCom";
import BestSeller from "../../Components/BestSellerCom/BestSeller";
import AboutUS from "../AboutCom/AboutUS";
import CategoryCom from "../../Components/CategoryCom/CategoryCom";

const HomePage = () => {
  window.scroll(0, 0);
  return (
    <>
      <Layout className="layout">
        <Content>
          <CarouselCom />
          <BestSeller />

          {/* <AboutUS /> */}
          <CategoryCom />
        </Content>
      </Layout>
    </>
  );
};

export default HomePage;
