import { Nav } from "../offers/offers.styled";
import React from "react";
import AddBtn from "../../shared/buttons/AddBtn";
import { useTranslation } from "react-i18next";
export function OffersHeading(props) {
  const { t } = useTranslation();
  return (
    <>
      <Nav className="navbar navbar-expand-lg offers-nv navbar-light ">
        <div className="container-fluid offers-main d-flex justifyContent-between ">
          <div className="offersName" style={{ color: "#F2F2F2DE" }}>{t("menu.offers")}</div>
            <AddBtn
              components="offers"
              placement="end"
              name={t("add offer").toUpperCase()}
            />
        </div>
      </Nav>
    </>
  );
}
