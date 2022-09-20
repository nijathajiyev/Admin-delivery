import React from "react";
import productPizza from "../../assets/images/productPizza.svg";
import {
  Div,
  Title,
  Content,
  Price,
  MainContent,
  TrashIcon,
  ImageDiv,
  DivMain,
} from "./products.styled";
import trashIcon from "../../assets/images/deleteImg.svg";
import { useEffect } from "react";
import { productsApi, productsDeleteApi } from "../../api/product";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../../store/slices/products/productSlice";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {Pagination} from "@mui/material";

const MySwal = withReactContent(Swal);

export default function ProductsCards(props) {
  const { t } = useTranslation();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const notify = () =>
    toast.success(t("success_message"), {
      theme: "colored",
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  useEffect(() => {
    if (state.productSlice.products.length < 1) {
      productsApi.then((res) => {
        dispatch(setProduct(res.data.Products));
      });
    }
  }, []);

  const deleteProduct = (id) => {
    Swal.fire({
      title: t("title delete"),
      text: t("subtitle product delete"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#BDBDBD',
      confirmButtonBackgroundColor: '#fff',
      cancelButtonColor: '#d33',

      cancelButtonText: t("cancel"),
      confirmButtonText: t("delete"),
    }).then((result) => {
      if (result.isConfirmed) {
        notify();
        productsDeleteApi(id).then((res) => {
          let newArr = state.productSlice.products.filter(
            (product) => product.id !== id
          );
          dispatch(setProduct(newArr));
        });
      }
    });
  };
  return (
    <>
      <DivMain>
        {state.productSlice.products?.map((item) => (
          <Div key={item.id}>
            <ImageDiv>
              <img src={item.image} style={{ height:158 }} />
            </ImageDiv>
            <MainContent>
              <Title>{item.name}</Title>
              <Content>{item.restaurant}</Content>
              <Price>${item.price}</Price>
              <TrashIcon>
                <img src={trashIcon} onClick={() => deleteProduct(item.id)} />
              </TrashIcon>
            </MainContent>
          </Div>
        ))}
      </DivMain>
      <div>
        <Pagination count={3}
          sx={{
            ".MuiPagination-ul": {
              display: "flex",
              justifyContent: "center",
            },
            ".Mui-selected": {
              backgroundColor: "#EC5CF8 !important",
              color: "white !important"
            },
            ".MuiButtonBase-root": {
              color: "#EC5CF8",
              borderColor: "#EC5CF8",
              textAlign: "center",
              marginRight:1
            }
          }}
          variant="outlined" color="secondary" />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
