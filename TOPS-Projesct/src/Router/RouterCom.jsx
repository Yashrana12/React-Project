import React from "react";
import { authStore } from "../Redux/App/Store";
import { Provider } from "react-redux";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderCom from "../UI/Components/HeaderCom/HeaderCom";
import HomePage from "../UI/Pages/Home/HomePage";
import Accessories from "../UI/Pages/Accessories/Acessories";
import Ring from "../UI/Pages/Ring/Ring";
import Chain from "../UI/Pages/Chain/Chain";
import Cufflinks from "../UI/Pages/Cufflinks/Cufflinks";
import Bracelets from "../UI/Pages/Bracelets/Bracelets";
import NewEdition from "../UI/Pages/NewEdition/NewEdition";
import Cart from "../UI/Pages/Cart/Cart";
import SingIn from "../UI/Pages/Signin/SingIn";
import Profile from "../UI/Pages/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function RouterCom() {
  return (
    <>
      <Provider store={authStore}>
        <BrowserRouter>
          <HeaderCom />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/ring" element={<Ring />} />
            <Route path="/chain" element={<Chain />} />
            <Route path="/cufflinks" element={<Cufflinks />} />
            <Route path="/bracelets" element={<Bracelets />} />
            <Route path="/edition" element={<NewEdition />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<SingIn />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default RouterCom;
