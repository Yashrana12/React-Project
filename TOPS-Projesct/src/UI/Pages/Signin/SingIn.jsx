import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { login } from "../../../Redux/Features/Auth/AuthSlice";

function SingIn() {
  let [userdata, setUserData] = useState({
    eamil: "admin@admin.com",
    password: "123456",
  });

  let dispatch = useDispatch();

  let navigate = useNavigate();

  function addData() {
    
    dispatch(login(userdata));
    navigate("/");
  }

  return (
    <>
      <div className="h-screen w-full bg-gray-400 grid place-content-center">
        <div className="w-100">
          <Form>
            <FormGroup>
              <Label for="exampleEmail" className=" d-flex ">
                {" "}
                Email
              </Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
                onChange={(e) =>
                  setUserData({ ...userdata, email: e?.target?.value })
                }
              />
            </FormGroup>{" "}
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="email"
                placeholder="Password"
                type="password"
                onChange={(e) =>
                  setUserData({ ...userdata, password: e?.target?.value })
                }
              />
            </FormGroup>
            <Button color="success" onClick={() => addData()}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default SingIn;
