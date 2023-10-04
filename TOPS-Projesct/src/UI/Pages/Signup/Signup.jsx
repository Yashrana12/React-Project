import { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { NavLink } from "react-router-dom";

function Signup() {
  let [userdata, setUserData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    age: "",
    address: [
      {
        add: "",
        city: "",
        state: "",
        pncode: "",
      },
    ],
  });
  return (
    <>
      <div className="grid h-auto w-full signup place-content-center pt-24 py-14 px-14">
        <div className="signupform px-14 pb-10 rounded-md">
          <div>
            <h1 className="pb-6 font-mono"> Sign up</h1>
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
                    placeholder="Enter email"
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
                  <Label for="examplePassword">Number</Label>
                  <Input
                    id="examplePassword"
                    name="number"
                    placeholder="password placeholder"
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
                    type="text"
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
                    value={userdata?.address?.[0]?.add}
                    onChange={(e) =>
                      setUserData({
                        ...userdata,
                        address: [
                          {
                            ...address[0],
                            add: e?.target?.value,
                          },
                        ],
                      })
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
                    value={userdata?.address?.[0]?.city}
                    onChange={(e) =>
                      setUserData({
                        ...userdata,
                        adress: [{ ...address[0], city: e?.target?.value }],
                      })
                    }
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
                    value={userdata?.address?.[0]?.state}
                    onChange={(e) =>
                      setUserData({
                        ...userdata,
                        adress: [{ ...address[0], state: e?.target?.value }],
                      })
                    }
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
                    placeholder="enter pincode"
                    value={userdata?.address?.[0]?.pincode}
                    onChange={(e) =>
                      setUserData({
                        ...userdata,
                        address: [
                          {
                            ...address[0],
                            pincode: e?.target?.value,
                          },
                        ],
                      })
                    }
                  />
                </FormGroup>
              </Col>
            </Row>

            <div className="text-center">
              <Button color="warning">Signup</Button>
            </div>
          </Form>
          <p className="text-center pt-4">
            Already Loging
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
