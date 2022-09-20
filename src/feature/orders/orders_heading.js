import React from "react";

import { Nav } from "./orders.styled";
import {useTranslation} from "react-i18next";
import styles  from '../orders/order.module.css'

export function OrdersHeading(props) {
  const { t } = useTranslation();

  return (
    <>
      <Nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid d-flex justifyContent-between ">
          <div style={{ color: "#F2F2F2DE" }}>{t("menu.orders")}</div>
        </div>
      </Nav>
    </>
  );
}
