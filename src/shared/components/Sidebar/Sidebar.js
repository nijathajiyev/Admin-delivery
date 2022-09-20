import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import "./sidebar.css";
import dashboardIcon from "../../../assets/SidebarIcons/dashboard.svg";
import productIcon from "../../../assets/SidebarIcons/products.svg";
import restaurantIcon from "../../../assets/SidebarIcons/restuarants.svg";
import offerIcon from "../../../assets/SidebarIcons/offers.svg";
import orderIcon from "../../../assets/SidebarIcons/orders.svg";
import categoryIcon from "../../../assets/SidebarIcons/category.svg";
import logoutIcon from "../../../assets/SidebarIcons/logout.svg";
import sidebarBack from "../../../assets/SidebarIcons/sidebarBack.svg";
import logo from "../../../assets/logo.svg";
import eacamp from "../../../assets/eacamp.svg";
import { useDispatch } from "react-redux";
import { setUserAccepted } from "../../../store/slices/login/loginSlice";
const SideBar = ({ isOpen, toggle }) => {

  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      {window.screen.width > 768 ? (
        <>
          <div className="sidebar-header">
            <span color="info" onClick={toggle} style={{ color: "#fff" }}>
              &times;
            </span>
          </div>
          <div className="sidebar-logo">
            <img src={logo} alt="logo" />
          </div>
        </>
      ) : (
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <span color="info" onClick={toggle} style={{ color: "#fff" }}>
              <img src={sidebarBack} alt="sidebarBack" />
            </span>

            <img src={logo} alt="logo" />
          </div>
        </div>
      )}
      <div className="side-menu">
        <Link to="/dashboard" className="font-sdbar">
          <img src={dashboardIcon} alt={t("menu.dashboard")} />{" "}
          {t("menu.dashboard")}
        </Link>
        <Link to="/products" className="font-sdbar">
          <img src={productIcon} alt={t("menu.products")} />{" "}
          {t("menu.products")}
        </Link>
        <Link to="/restaurants" className="font-sdbar">
          <img src={restaurantIcon} alt={t("menu.restaurants")} />{" "}
          {t("menu.restaurants")}
        </Link>
        <Link to="/category" className="font-sdbar">
          <img src={categoryIcon} alt={t("menu.category")} />{" "}
          {t("menu.category")}
        </Link>
        <Link to="/orders" className="font-sdbar">
          <img src={orderIcon} alt={t("menu.orders")} /> {t("menu.orders")}
        </Link>
        <Link to="/offer" className="font-sdbar">
          <img src={offerIcon} alt={t("menu.offers")} /> {t("menu.offers")}
        </Link>
        <Link
          to="/login"
          className="lg-out"
          onClick={() => {
            dispatch(setUserAccepted(false));
            localStorage.setItem("userAccepted", false);
          }}
        >
          <img src={logoutIcon} alt={t("menu.logout")}  /> {t("menu.logout")}
        </Link>
      </div>
      <div className="side-footer">
        <img src={eacamp} alt="eacamp" />
        <p>Version: 1.0.</p>
        <p className="year">{new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default SideBar;
