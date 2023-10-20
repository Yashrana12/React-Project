import { authStore } from "../Redux/App/Store";
import { Provider } from "react-redux";
import HeaderCom from "../UI/Components/HeaderCom/HeaderCom";
import HomePage from "../UI/Pages/Home/HomePage";
import Ring from "../UI/Pages/Ring/Ring";
import Chain from "../UI/Pages/Chain/Chain";
import Cufflinks from "../UI/Pages/Cufflinks/Cufflinks";
import Bracelets from "../UI/Pages/Bracelets/Bracelets";
import NewEdition from "../UI/Pages/NewEdition/NewEdition";
import Cart from "../UI/Pages/Cart/Cart";
import SingIn from "../UI/Pages/Signin/SingIn";
import Profile from "../UI/Pages/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../UI/Pages/Signup/Signup";
import Dashboard from "../UI/Pages/Admin/Dashboard/Dashboard";
import Accessories from "../UI/Pages/Accessories/Accessories";
import { useState } from "react";
import Products from "../UI/Pages/Admin/Products/Products";
import Users from "../UI/Pages/Admin/Users/Users";
import Orders from "../UI/Pages/Admin/Orders/Orders";
import FooterCom from "../UI/Components/FooterCom/FooterCom";
import AboutUS from "../UI/Pages/AboutCom/AboutUS";
import Analytics from "../UI/Pages/Admin/Analytics/Analytics";
import SingleProduct from "../UI/Pages/SingleProduct/SingleProduct";
import CategoryCom from "../UI/Components/CategoryCom/CategoryCom";
import Contact from "../UI/Pages/Contact/Contact";

function RouterCom() {
  let [textsearch, setTextSearch] = useState("");
  return (
    <>
      <Provider store={authStore}>
        <BrowserRouter>
          <HeaderCom setTextSearch={setTextSearch} />

          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route
              path="/accessories"
              element={<Accessories textsearch={textsearch} />}
            />
            <Route
              path="/edition"
              element={<NewEdition textsearch={textsearch} />}
            />
            <Route path="/ring" element={<Ring textsearch={textsearch} />} />
            <Route path="/chain" element={<Chain textsearch={textsearch} />} />
            <Route
              path="/cufflinks"
              element={<Cufflinks textsearch={textsearch} />}
            />
            <Route
              path="/bracelets"
              element={<Bracelets textsearch={textsearch} />}
            />
            <Route path="/about" element={<AboutUS />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<SingIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="products" element={<Products />} />
              <Route path="users" element={<Users />} />
              <Route path="orders" element={<Orders />} />
              <Route path="analytics" element={<Analytics />} />
            </Route>
            <Route path="/profile" element={<Profile />} />
            <Route path="/category" element={<CategoryCom />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
          </Routes>
          {/* <RegisterForm /> */}
          <FooterCom />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default RouterCom;
