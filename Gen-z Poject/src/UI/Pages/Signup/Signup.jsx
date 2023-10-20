import { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BE_URL } from "../../../Configue";
import { toast } from "react-toastify";

function Signup() {
  let [userdata, setUserData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    age: "",
    // address: [
    //   {
    //     add: "",
    //     city: "",
    //     state: "",
    //     pncode: "",
    //   },
    // ],
  });

  let [address, setAddress] = useState({
    add: "",
    city: "",
    state: "",
    pncode: "",
  });

  let nevigate = useNavigate();
  let dispatch = useDispatch();

  const submitHandler = () => {
    axios({
      method: "post",
      url: `${BE_URL}user/signUP`,
      data: {
        ...userdata,
        address: [address],
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `barer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((resData) => {
        dispatch(login(resData?.data));
        Navigate("/");
        toast.success("signup success");
      })
      .catch((err) => {
        toast.error(err?.message);
      });

    setUserData({
      name: "",
      number: "",
      email: "",
      password: "",
      age: "",
    });

    setAddress({
      add: "",
      city: "",
      state: "",
      pincode: "",
    });
  };
  return (
    <>
      {/* h-auto w-full  */}
      <div className="signup grid  place-content-center pt-24 py-14 px-14">
        <div className="signupform px-14 pb-10 pt-10 ps-10 rounded-md text-white ">
          <div>
            <h1 className="pb-6 font-mono text-white"> Sign up</h1>
          </div>
          <Form>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="first">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter Name"
                    type="text"
                    value={userdata?.name}
                    onChange={(e) =>
                      setUserData({ ...userdata, name: e?.target?.value })
                    }
                  />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label for="number">Number</Label>
                  <Input
                    id="number"
                    name="number"
                    placeholder="Enter number"
                    type="text"
                    value={userdata?.number}
                    onChange={(e) =>
                      setUserData({ ...userdata, number: e?.target?.value })
                    }
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="email"
                    value={userdata?.email}
                    onChange={(e) =>
                      setUserData({ ...userdata, email: e?.target?.value })
                    }
                  />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Password placeholder"
                    type="password"
                    value={userdata?.password}
                    onChange={(e) =>
                      setUserData({ ...userdata, password: e?.target?.value })
                    }
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="Plot No">Age</Label>
                  <Input
                    id="age"
                    name="age"
                    placeholder="Enter age"
                    type="number"
                    value={userdata?.age}
                    onChange={(e) =>
                      setUserData({ ...userdata, age: e?.target?.value })
                    }
                  />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label for="Landmark">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    value={address?.add}
                    // onChange={(e) =>
                    //   setUserData({
                    //     ...userdata,
                    //     address: [
                    //       {
                    //         ...address[0],
                    //         add: e?.target?.value,
                    //       },
                    //     ],
                    //   })
                    // }
                    onChange={(e) =>
                      setAddress({ ...address, add: e?.target?.value })
                    }
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col>
                <FormGroup>
                  <Label for="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    placeholder="Enter city"
                    type="text"
                    value={address?.city}
                    onChange={(e) =>
                      setAddress({ ...address, city: e?.target?.value })
                    }
                    // onChange={(e) =>
                    //   setUserData({
                    //     ...userdata,
                    //     address: [{ ...address[0], city: e?.target?.value }],
                    //   })
                    // }
                  />
                </FormGroup>
              </Col>

              <Col>
                <FormGroup>
                  <Label for="state">State</Label>
                  <Input
                    id="state"
                    name="state"
                    placeholder="Enter state"
                    type="text"
                    value={address?.state}
                    onChange={(e) =>
                      setAddress({ ...address, state: e?.target?.value })
                    }
                    // onChange={(e) =>
                    //   setUserData({
                    //     ...userdata,
                    //     address: [{ ...address[0], state: e?.target?.value }],
                    //   })
                    // }
                  />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label for="country">Pincode</Label>
                  <Input
                    id="pincode"
                    name="pincode"
                    type="text"
                    placeholder="Enter pincode"
                    value={address?.pincode}
                    onChange={(e) =>
                      setAddress({ ...address, pincode: e?.target?.value })
                    }
                    // onChange={(e) =>
                    //   setUserData({
                    //     ...userdata,
                    //     address: [
                    //       {
                    //         ...address[0],
                    //         pincode: e?.target?.value,
                    //       },
                    //     ],
                    //   })
                    // }
                  />
                </FormGroup>
              </Col>
            </Row>

            <div className="text-center">
              <Button color="warning">Signup</Button>
            </div>
          </Form>
          <p className="text-center pt-4">
            Already Login?{" "}
            <NavLink to={"/signin"}>
              <span className="text-red-600"> Login</span>
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
