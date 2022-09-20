import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classNames from "classnames";
import { Container } from "reactstrap";
import Dashboard from "./dashboard/dashboard";
import Products from "./products/product";
import Restaurants from "./restuarants/restuarants";
import Category from "./category/category";
import Orders from "./orders/orders";
import Offer from "./offers/offers";
import Header from "../shared/components/Header/Header";
import SideBar from "../shared/components/Sidebar/Sidebar";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "./login/login";
import { useAuth } from "../context/AuthContext";
import { useSelector } from "react-redux";
const Pages = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  const auth = useAuth();
  const state = useSelector((state) => state);

  return (
   <>
      {state.loginSlice.userAccepted || auth.user === "true" ? (
        <>
          <Redirect from="/login" to="/dashboard" />
          <div className="d-flex container-fluid">
            <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
            <Container
              fluid
              className={classNames("content", { "is-open": sidebarIsOpen })}
            >
              <Header toggleSidebar={toggleSidebar} />
              <Switch>
                <Route exact path="/dashboard">
                  <Dashboard />
                </Route>
                <Route  path="/products">
                  <Products />
                </Route>
                <Route  path="/restaurants">
                  <Restaurants />
                </Route>
                <Route  path="/category">
                  <Category />
                </Route>
                <Route  path="/orders">
                  <Orders />
                </Route>
                <Route  path="/offer">
                  <Offer />
                </Route>
              </Switch>
            </Container>
          </div>
        </>
      ) : (
        <>
          <Redirect from="*" to="/login" />
          <Route  path="/login">
            <Login />
          </Route>
        </>
      )}
    </>
  );
};

export default Pages;
