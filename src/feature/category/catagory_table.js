import React from "react";
import { MyTd, TableTitle, TableStyled, Span, MyTd2, MyTd3, TableTitle2, TblMain } from "./catagory.styled";
import deleteIcon2 from "../../assets/images/deleteIcon2.svg";
import { catagoryApi } from "../../api/catagory";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCatagory } from "../../store/slices/catagorys/catagorySlice";
export function CatagoryTable(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  useEffect(() => {
    if (state.catagorySlice.data < 1) {
      getCatagory();
    }
  }, []);
  const getCatagory = () => {
    catagoryApi
      .then((res) => {
        dispatch(setCatagory(res.data.catagory));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <TblMain>
        <TableStyled>
          <thead>
            <tr>
              <TableTitle>ID</TableTitle>
              <TableTitle>Image</TableTitle>
              <TableTitle2>Name</TableTitle2>
              <TableTitle>Slug</TableTitle>
              <TableTitle></TableTitle>
            </tr>
          </thead>
          <tbody>
            {state.catagorySlice.data?.map((item, key) => (
              <tr>
                <MyTd>
                  <Span>{item.id}</Span>
                </MyTd>
                <MyTd2>
                  <img width={50} height={50} src={item.photo} alt="" />
                </MyTd2>
                <MyTd2>{item.name}</MyTd2>
                <MyTd2>{item.slug}</MyTd2>
                <MyTd>
                  <img src={deleteIcon2} alt="" />
                </MyTd>
              </tr>
            ))}
          </tbody>
        </TableStyled>
      </TblMain>
    </>
  );
}
