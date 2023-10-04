import React from "react";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../Redux/Features/Auth/AuthSlice";

function Profile() {
  const AuthData = useSelector((state) => {
    return state?.Auth?.user?.email;
  });

  const dispatch = useDispatch();

  let navigate = useNavigate();

  function removeUser() {
    dispatch(logout());
    navigate("/signin");
  }
  return (
    <>
      <div className="w-full h-screen bg-orange-400 grid place-content-center text-center">
        <h1>{AuthData}</h1>
        <Button color="primary" onClick={() => removeUser()}>
          {" "}
          Logout
        </Button>
      </div>
    </>
  );
}

export default Profile;
