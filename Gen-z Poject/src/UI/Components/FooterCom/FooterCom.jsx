import { Footer } from "antd/es/layout/layout";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide";
import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

function FooterCom() {
  return (
    <>
      {/* <Footer>
        <div className="container bg-black text-center">
          <div className="row">
            <div className="col-lg-3">
              <div className="first-item">
                <div className="logo">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRofgC_kbdLAEOqR2LbmxunJXz_kHSXUaKG6g&usqp=CAU"
                    alt=""
                    width={"70px"}
                    height={"70px"}
                  />
                </div>
                <ul>
                  <li>
                    <a href="#">
                      16501 Collins Ave, Sunny Isles Beach, FL 33160, United
                      States
                    </a>
                  </li>
                  <li>
                    <a href="#">GEN-Z@company.com</a>
                  </li>
                  <li>
                    <a href="#">010-020-0340</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <h4>Shopping &amp; Categories</h4>
              <ul>
                <li>
                  <a href="/chain">Chians</a>
                </li>
                <li>
                  <a href="/ring">Rings</a>
                </li>
                <li>
                  <a href="/bracelets">Bracelets</a>
                </li>
                <li>
                  <a href="/cufflinks">Cufflinks</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Homepage</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-3
            "
            >
              <h4>Help &amp; Information</h4>
              <ul>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">FAQ's</a>
                </li>
                <li>
                  <a href="#">Shipping</a>
                </li>
                <li>
                  <a href="#">Tracking ID</a>
                </li>
              </ul>
            </div>
            <hr className="" />
            <div className="col-lg-12 text-center justify-content-center text-white">
              <div className="under-footer">
                <p>
                  Copyright © 2022 Rolex Co., Ltd. All Rights Reserved.
                  <br />
                  Design:{" "}
                  <a
                    href="https://templatemo.com"
                    target="_parent"
                    title="free css templates"
                  >
                    TemplateMo
                  </a>
                  <br />
                  Distributed By:{" "}
                  <a
                    target="_blank"
                    title="free & premium responsive templates"
                    className=""
                  >
                    ThemeWagon
                  </a>
                </p>
                <ul>
                  <li>
                    <a href="#">
                      <Facebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Twitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Linkedin />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Instagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Footer> */}

      <Footer
        style={{
          textAlign: "center",
          background: "black",
          padding: "30px",
          color: "#fff",
        }}
      >
        <Container>
          <Row className="gap-10 pb-10 text-white">
            <Col className="flex-1 text-left">
              <Link to="/" className="text-white no-underline">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRofgC_kbdLAEOqR2LbmxunJXz_kHSXUaKG6g&usqp=CAU"
                  alt=""
                  width={"50px"}
                  height={"50px"}
                />
                <p className="text-xs font-medium tracking-widest uppercase pb-3">
                  GEN-Z
                </p>
              </Link>
              <p className="text-justify font-normal tracking-wide">
                These are some of the more recognizable names in jewelry and
                design, the sort that even a guy who doesn't own any jewelry has
                probably heard of. These brands skew on the pricey side but tend
                to make investment pieces that last a lifetime and can be passed
                on to family members from generation to generation...{" "}
              </p>
            </Col>
            <Col className="flex-1 text-left tracking-wide">
              <p className="uppercase text-base font-medium pb-3 ">
                Customer care
              </p>
              <p className=" pb-3 font-normal">
                Need help? We're always here for you and ready to help.
              </p>
              <p className="font-normal m-0 ">
                Email :{" "}
                <a href="" className="no-underline text-white">
                  GEN-ZInfo@example.com
                </a>
              </p>
              <p className="ffont-normal m-0">
                Mobile :{" "}
                <a href="" className="no-underline text-white">
                  1234567890
                </a>
              </p>
              <p className="font-normal m-0">
                Address :{" "}
                <a href="" className="no-underline text-white">
                  16501 Collins Ave, Sunny Isles Beach, FL 33160, United
                  States...
                </a>
              </p>
            </Col>
            <Col className="text-left tracking-wide" style={{ flex: "0.5" }}>
              <p className="uppercase text-base font-medium pb-3 ">Follow Us</p>
              <ol className="font-normal p-0 ">
                <li>
                  <a href="#" className="no-underline text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="no-underline text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="no-underline text-white">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="#" className="no-underline text-white">
                    Pinterest
                  </a>
                </li>
                <li>
                  <a href="#" className="no-underline text-white">
                    Twitter
                  </a>
                </li>
              </ol>
            </Col>
            <Col className="text-left tracking-wide" style={{ flex: "0.5" }}>
              <p className="uppercase text-base font-medium pb-3 ">
                useful links
              </p>
              <ol className="p-0 font-normal">
                <li>
                  <Link to="/accessories" className="no-underline text-white">
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link to="/edition" className="no-underline text-white">
                    NewEdition
                  </Link>
                </li>
                <li>
                  <Link to="/ring" className="text-white no-underline">
                    Rings
                  </Link>
                </li>
                <li>
                  <Link to="/cufflinks" className="text-white no-underline">
                    Cufflinks
                  </Link>
                </li>
                <li>
                  <Link to="/bracelets" className="text-white no-underline">
                    Bracelets
                  </Link>
                </li>
                <li>
                  <Link to="/chain" className="text-white no-underline">
                    Chain
                  </Link>
                </li>
              </ol>
            </Col>
            <hr />
            <p className="text-center text-white m-0">
              Copyright © 2023 GEN-Z JEWEl | Powered by GEN-Z JEWELLERY
            </p>
          </Row>
        </Container>
      </Footer>
    </>
  );
}

export default FooterCom;
