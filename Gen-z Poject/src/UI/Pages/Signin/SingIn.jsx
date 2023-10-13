import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../../../Redux/Features/AuthSlice/AuthSlice";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import "./SignIn.css";
import { BE_URL } from "../../../Configue";
import { toast } from "react-toastify";

function SingIn() {
  let [userdata, setUserData] = useState({
    email: "",
    password: "",
  });

  let dispatch = useDispatch();

  let navigate = useNavigate();

  function addData() {
    // console.log("userdata", userdata);
    axios
      .post(`${BE_URL}user/signin`, userdata)
      .then((resData) => {
        console.log("resData", resData);
        toast.success("Login Successfully");
        dispatch(login(resData?.data));
        if (resData?.data?.data?.userType === "admin") {
          navigate("/dashboard");
        } else navigate("/");
      })
      .catch((err) => {
        console.log("err", err);
        toast.error(err?.message);
      });
  }

  return (
    <>
      <div className=" signin h-screen w-full  grid place-content-center">
        <div className="w-100 p-3 form">
          <div className="flex align-items-center justify-content-center flex-column gap-2 pb-5">
            <h3>Welcome</h3>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRofgC_kbdLAEOqR2LbmxunJXz_kHSXUaKG6g&usqp=CAU"
              alt=""
              width={"70px"}
              height={"70px"}
            />
          </div>
          <Form className="mb-5">
            <FormGroup floating>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
                onChange={(e) =>
                  setUserData({ ...userdata, email: e?.target?.value })
                }
                value={userdata?.email}
              />
              <Label for="exampleEmail">Email</Label>
            </FormGroup>{" "}
            <FormGroup floating>
              <Input
                id="examplePassword"
                name="email"
                placeholder="Password"
                type="password"
                onChange={(e) =>
                  setUserData({ ...userdata, password: e?.target?.value })
                }
                value={userdata?.password}
              />
              <Label for="examplePassword">Password</Label>
            </FormGroup>
            <Button color="success" onClick={() => addData()}>
              Submit
            </Button>
          </Form>{" "}
          <p className="text-center fw-bold">
            New On Our Platform?{" "}
            <NavLink to={"/signup"}>
              <span className="text-red-600">Create an account</span>
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default SingIn;
