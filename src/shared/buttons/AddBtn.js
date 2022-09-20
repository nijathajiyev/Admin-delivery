import { useState } from "react";
import Button from "react-bootstrap/Button";
import plusIcon from "../../assets/plus.svg";
import close from "../../assets/Header/addproduct/close.svg";
import {
  RightSidebarAddProduct,
  RightSidebarAddProductHeader,
} from "./addBtn.styled";
import "./AddBtn.css";
import AddProductForm from "../components/Header/AddProduct/AddProductForm";
import AddRestaurantsForm from "../../feature/restuarants/addRestaurants/AddRestaurantsForm";
import AddCatagoryForm from "../../feature/category/addCategory/AddCatagoryForm";
import AddOffersForm from "../../feature/offers/addOffers/AddOffersForm";
function AddBtn(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showComponents = () => {
    switch (props.components) {
      case "product":
        return <AddProductForm handleClose={handleClose} />;
      case "category":
        return <AddCatagoryForm handleClose={handleClose} />;
      case "restaurants":
        return <AddRestaurantsForm handleClose={handleClose} />;
      case "offers":
        return <AddOffersForm handleClose={handleClose} />;
      default:
        break;
    }
  };
  
  return (
    <>
      <Button variant="primary" onClick={handleShow} className={`${props.components==="product"? "prodct":
        (props.components === "restaurants"?"restrnt":(props.components === "category"?"ctgry":"ofr"))} add-btn`}>
        <img src={plusIcon} alt="plus" />{" "}
        <span className={props.components === "product" && "mobile-add-btn"}>{props.name}</span>
      </Button>
      <RightSidebarAddProduct show={show} onHide={handleClose} {...props}>
        <RightSidebarAddProductHeader onClick={handleClose}>
          <img src={close} alt="" />
        </RightSidebarAddProductHeader>
        <RightSidebarAddProduct.Body>
          {showComponents()}
        </RightSidebarAddProduct.Body>
      </RightSidebarAddProduct>
    </>
  );
}

export default AddBtn;
