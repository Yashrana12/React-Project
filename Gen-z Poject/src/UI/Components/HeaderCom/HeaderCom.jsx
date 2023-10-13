import { useState } from "react";
import {
  Collapse,
  Input,
  InputGroup,
  InputGroupText,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import { CgSearch } from "react-icons/cg";
import { GiShoppingCart } from "react-icons/gi";
import { LuUserCircle2 } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import "./HeaderCom.css";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
function HeaderCom({ setTextSearch }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const auth = useSelector((state) => {
    return state.AUTH.user;
  });

  const adminAuth = useSelector((state) => {
    return state?.AUTH?.user?.userType === "admin";
  });

  return (
    <>
      <div>
        <Navbar
          expand={"lg"}
          container={"sm"}
          className="flex gap-2 bg-black  "
          fixed="top"
        >
          <NavbarBrand href="">
            <NavLink to={"/"}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRofgC_kbdLAEOqR2LbmxunJXz_kHSXUaKG6g&usqp=CAU"
                alt=""
                width={"50px"}
                height={"50px"}
              />
            </NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav
              className="me-auto text-sm font-bold justify-center gap-4 navbar "
              navbar
              style={{ flex: 1.8 }}
            >
              {adminAuth ? (
                <>
                  <NavItem>
                    <NavLink to={"/dashboard"}>Dashboard</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to={"/dashboard/products"}>Products</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to={"/dashboard/users"}>Users</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to={"/dashboard/orders"}>Orders</NavLink>
                  </NavItem>
                </>
              ) : (
                <>
                  <NavItem>
                    <NavLink to={"/accessories"}>Accessories</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to={"/ring"}>Ring</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to={"/chain"}>Chain</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to={"/cufflinks"}>Cufflinks</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to={"/bracelets"}>Bracelets</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink to={"/edition"}>New Editions</NavLink>
                  </NavItem>
                </>
              )}
            </Nav>
            <Nav
              style={{ flex: 1.6 }}
              className=" scont flex items-center gap-4 text-3xl justify-center"
            >
              <div className="w-60">
                <InputGroup>
                  <Input
                    placeholder="Username"
                    onChange={(e) => setTextSearch(e?.target?.value)}
                  />
                  <InputGroupText className="bg-black text-white">
                    <CgSearch />
                  </InputGroupText>
                </InputGroup>
              </div>
              <NavItem>
                <NavLink to={"/cart"}>
                  <GiShoppingCart />
                </NavLink>
              </NavItem>

              {JSON.stringify(auth) !== "{}" ? (
                <NavItem>
                  <NavLink to={"/profile"}>
                    <LuUserCircle2 />
                  </NavLink>
                </NavItem>
              ) : (
                <NavItem>
                  <NavLink to={"/signin"}>
                    <span className="text-sm font-bold flex items-center">
                      Sign In
                    </span>
                  </NavLink>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default HeaderCom;
