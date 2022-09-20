import React from "react";
import { CategoryHead, Nav } from "./catagory.styled";
import AddBtn from "../../shared/buttons/AddBtn";
import { useTranslation } from "react-i18next";
export function CatagoryHeading(props) {
  const { t } = useTranslation();
  return (
    <>
      <Nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid categoryHead">
          <div style={{color: "#F2F2F2DE"}}>{t("menu.category")}</div>
          <div>
            <AddBtn
              components="category"
              placement="end"
              name={t("add category").toUpperCase()}
            />
          </div>
          </div>
      </Nav>
    </>
  );
}
