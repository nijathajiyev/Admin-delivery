import { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";
import {
  AddForm,
  AddFormRight,
  CancelButton,
  FormSubmitDiv,
  ImageDiv,
  MyOption,
  UploadDiv,
  UploadDivIcon,
} from "../../../../shared/buttons/addBtn.styled";
import uploadImg from "../../../../assets/Header/addproduct/upload.svg";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";
import "./addProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurants } from "../../../../store/slices/restaurants/restaurantsSlice";
import { restaurantsApi } from "../../../../api/restaurants";
import { setProduct } from "../../../../store/slices/products/productSlice";
import { productsPostApi } from "../../../../api/product";

function AddProductForm(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    getRestaurants();
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
  const [images, setImages] = useState("");
  const { t } = useTranslation();
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList);
    formik.values.imageUrl = imageList[0]?.data_url;
    setImages(imageList);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      restaurant: "",
      image: "",
    },
    onSubmit: (values) => {
      console.log(values, "vls");
      let obj = {
        id: Date.now(),
        ...values,
      };
      console.log(obj, "obj");
      let arr=[...state.productSlice.products,obj];
      formik.values = {
        name: "",
        description: "",
        price: "",
        restaurant: "",
        image: "",
      };
      productsPostApi(arr).then((res) => {
        dispatch(setProduct(arr));
      });


      console.log(formik.values,"val new");
    },
  });

  return (
    <>
      <h3>{t("add product")}</h3>

      <UploadDiv>
        <p>{t("form.upload title")}</p>
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <UploadDivIcon>
              <button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                <img src={uploadImg} alt={uploadImg} />
                <p>{t("form.upload")}</p>
              </button>
            </UploadDivIcon>
          )}
        </ImageUploading>
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({ imageList, onImageUpdate, onImageRemove }) => (
            // write your building UI
            <ImageDiv className="upload__image-wrapper">
              <div className="image-item">
                <img src={imageList[0]?.data_url} alt="" width="140" />
                <div className="image-item__btn-wrapper">
                  {imageList[0]?.data_url && (
                    <>
                      <button onClick={() => onImageUpdate(0)}>Update</button>
                      <button onClick={() => onImageRemove(0)}>Remove</button>
                    </>
                  )}
                </div>
              </div>
            </ImageDiv>
          )}
        </ImageUploading>
      </UploadDiv>
      <form onSubmit={formik.handleSubmit}>
        <AddForm>
          <p>{t("form.form title")}</p>
          <AddFormRight>
            <div className="form-group mt-4">
              <label htmlFor="name">{t("form.name")}</label>
              <input
                className="form-control"
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="description">{t("form.description")}</label>
              <textarea
                style={{ resize: "none" }}
                rows="6"
                cols="50"
                className="form-control"
                id="description"
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="price">{t("form.price")}</label>
              <input
                className="form-control"
                id="price"
                name="price"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.price}
              />
            </div>

            <div className="form-group mt-4">
              <label htmlFor="restaurant">{t("form.restaurants")}</label>
              <Form.Select
                id="restaurant"
                name="restaurant"
                onChange={formik.handleChange}
                value={formik.values.restaurant}
                aria-label="Default select example"
              >
                {state.restaurant.data?.map((item, index) => (
                  <option value={item.name} key={index}>
                    {item.name}
                  </option>
                ))}
              </Form.Select>
            </div>
          </AddFormRight>
        </AddForm>
        <FormSubmitDiv>
          <button type="button" onClick={() => props.handleClose()}>
            {t("cancel")}
          </button>
          <button type="submit">{t("create")}</button>
        </FormSubmitDiv>
      </form>
    </>
  );
}

export default AddProductForm;
