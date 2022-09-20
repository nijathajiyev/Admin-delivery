import React, {useEffect, useState} from "react";
import { Nav, ButtonGrey, CategoryTypeDiv, RestHead } from "./restaurant.styled";
import { useTranslation } from "react-i18next";
import AddBtn from "../../shared/buttons/AddBtn";
import { Input } from "reactstrap";
export function RestaurantHead(props) {
  const { t } = useTranslation();
  const [testPro, setTestPro] = useState(false);

  let mql = window.matchMedia("(max-width: 320px)");

  useEffect(() => {
    if (mql.matches) {
      setTestPro(true);
    }
  }, [testPro]);
  return (
    <>
      <Nav className="navbar navbar-expand-lg mb-4">
        <div className="container-fluid restHead">
          <div
            style={{
              color: "#F2F2F2DE",
              "font-weight": 500,
              "font-size": 20,
              "line-height": 21,
              "letter-spacing": 0.1,
            }}
          >
            {t("menu.restaurants")}
          </div>
          <div className="d-flex">
            {!testPro && (
              <CategoryTypeDiv row>
                <Input
                  id="exampleSelects"
                  style={{ padding: 0 }}
                  name="select"
                  type="select"
                >
                  <option selected>Category Type</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </CategoryTypeDiv>
            )}
            <AddBtn
              components="restaurants"
              placement="end"
              name={t("add restaurant").toUpperCase()}
            />
          </div>
        </div>
      </Nav>
    </>
  );
}
