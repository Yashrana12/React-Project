import React from "react";
import "./CategoryCom.css";
import { Container } from "reactstrap";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

function CategoryCom() {
  return (
    <>
      <div className="category mb-5">
        <Container>
          <div className="category-head text-center pb-5">
            <h6 className="text-xl font-bold drop-shadow-sm">New Jewelry</h6>
            <h1 className="text-6xl drop-shadow-sm">Shop by category</h1>
          </div>
          <hr style={{ width: "5%", margin: "auto" }} className="pb-5" />
          <div>
            <Row className="gap-5 flexible">
              <Col className="flex-1">
                <div className="category-img1 rounded-3xl"></div>
                <Link to="/chain" className="text-black">
                  <div className="category-absolute rounded-lg">
                    <h5 className="text-base text-center mb-0">Chain</h5>
                    <h6 className="text-center text-xs">10 products</h6>
                  </div>
                </Link>
              </Col>
              <Col className="flex-1">
                <div className="category-img2 rounded-3xl"></div>
                <Link to="/cufflinks" className="text-black">
                  <div className="category-absolute rounded-lg">
                    <h5 className="text-base text-center mb-0">Cufflinks</h5>
                    <h6 className="text-center  text-xs">10 Products</h6>
                  </div>
                </Link>
              </Col>
              <Col className="flex-1">
                <div className="category-img3 rounded-3xl"></div>
                <Link to="/bracelets" className="text-black">
                  <div className="category-absolute rounded-lg">
                    <h5 className="text-base text-center mb-0">Bracelets</h5>
                    <h6 className="text-center  text-xs">10 products</h6>
                  </div>
                </Link>
              </Col>
              <Col className="flex-1">
                <div className="category-img4 rounded-3xl"></div>
                <Link to="/ring" className="text-black">
                  <div className="category-absolute rounded-lg">
                    <h5 className="text-base text-center mb-0">Ring</h5>
                    <h6 className="text-center text-xs">10 products</h6>
                  </div>
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default CategoryCom;
