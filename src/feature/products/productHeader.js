import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Navs, CategoryTypeDiv, Mydiv } from "../products/products.styled";
import { Input } from "reactstrap";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "4px",
  backgroundColor: "#C035A2",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  // width: '50%',
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft:56,
  color: "#fff",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#fff",
  marginLeft:56,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1,1,1,0),
    
    // paddingTop: "13px",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "50%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
export function ProductHeader(props) {
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
      <Navs>
        <h3 style={{ color: "#F2F2F2DE" }}>{t("menu.products")}</h3>
        <Mydiv>
          <CategoryTypeDiv row>
            <Input id="exampleSelect" name="select" type="select">
              <option selected>Category Type</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </CategoryTypeDiv>
          <div>
            {testPro && (
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            )}
          </div>
        </Mydiv>
      </Navs>
    </>
  );
}
