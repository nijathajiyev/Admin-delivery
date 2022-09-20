import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import papaJohn from "../../assets/images/papaJohn.svg";
import trashIcon from "../../assets/images/deleteImg.svg";
import burger from "../../assets/images/burger.svg";

import {
  ImageDiv,
  MainDiv,
  Title,
  TitleDiv,
  ImageDiv2,
  Content,
  ContentDiv,
  BurgerP,
  ParentBox,
  ChildBox,
} from "./restaurant.styled";
import { restaurantsApi } from "../../api/restaurants";
import { setRestaurants } from "../../store/slices/restaurants/restaurantsSlice";
import { Pagination } from "@mui/material";
export function RestaurantsCard(props) {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    if (state.restaurant.data < 1) {
      getRestaurants();
    }
  }, []);

  const getRestaurants = () => {
    restaurantsApi
      .then((res) => {
        dispatch(setRestaurants(res.data.restaurants));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <ChildBox>
        {state.restaurant.data?.map((item, index) => (
          <MainDiv key={index}>
            <ImageDiv>
              <img src={item.photo} width={50} alt=".." />
            </ImageDiv>
            <div>
              <TitleDiv>
                <Title>{item.name}</Title>
              </TitleDiv>
              <Content>{item.type}</Content>
            </div>
            <div>
              <img
                src={trashIcon}
                style={{ marginRight: 2.64, marginTop: 4 }}
              />
            </div>
          </MainDiv>
        ))}
      </ChildBox>
        <div>
          <Pagination
            count={3}
            sx={{
              ".MuiPagination-ul": {
                display: "flex !important",
                justifyContent: "center !important",
              },
              ".Mui-selected": {
                backgroundColor: "#EC5CF8 !important",
                color: "white !important",
              },
              ".MuiButtonBase-root": {
                color: "#EC5CF8",
                borderColor: "#EC5CF8",
                textAlign: "center",
                marginRight: 1,
              },
            }}
            variant="outlined"
            color="secondary"
          />
        </div>
    </>
  );
}
