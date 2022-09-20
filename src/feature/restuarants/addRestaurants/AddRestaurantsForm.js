import { useState } from "react";
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
} from "../../../shared/buttons/addBtn.styled";
import uploadImg from "../../../assets/Header/addproduct/upload.svg";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";

import { useSelector, useDispatch } from "react-redux";
import { restaurantsPostApi } from "../../../api/restaurants";
import { setRestaurants } from "../../../store/slices/restaurants/restaurantsSlice";



function AddRestaurantsForm(props) {
  const state = useSelector(state=>state)
  
  const dispatch = useDispatch()
  const [images, setImages] = useState("");
  const { t } = useTranslation();
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    
    formik.values.imageUrl = imageList[0]?.data_url;
    setImages(imageList);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      cusine: "",
      deliveryPrice: "",
      deliveryMin: "",
      address: "",
      catagory: "",
      slug: "",
      imageUrl: "",
    },
    onSubmit: (values) => {
      restaurantsPostApi(values).then(res=>{
       let arr = [...state.restaurant.data,values]
       console.log(arr);
       dispatch(setRestaurants(arr))
      })
    },
  });

  return (
    <div>
      <h3>{t("add restaurant")}</h3>

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
                <img src={imageList[0]?.data_url} alt="" width="100" />
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
          <p>{t("form.form restaurant description")}</p>
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
              <label htmlFor="cusine">{t("form.cuisine")}</label>
              <textarea
              style={{resize: 'none'}}
              rows="3" cols="20"
              
                className="form-control"
                id="cusine"
                name="cusine"
                onChange={formik.handleChange}
                value={formik.values.cusine}
              />
            </div>
            
            <div className="form-group mt-4">
              <label htmlFor="price">{t("form.delivery price")}</label>  
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
              <label htmlFor="price">{t("form.address")}</label>  
              <input
                className="form-control"
                id="address"
                name="address"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.address}
              />
            </div>

            <div className="form-group mt-4">
              <label htmlFor="catagory">{t("form.category")}</label>
              <Form.Select
                id="catagory"
                name="catagory"
                onChange={formik.handleChange}
                value={formik.values.catagory}
                aria-label="Default select example"
              >
                <option value="Papa Johns">Papa Johns</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div className="form-group mt-4">
              <label htmlFor="slug">{t("form.slug")}</label>  
              <input
                className="form-control"
                id="slug"
                name="slug"
                type="slug"
                onChange={formik.handleChange}
                value={formik.values.slug}
              />
            </div>
          </AddFormRight>
        </AddForm>
        <FormSubmitDiv>

          <button type="button" onClick={()=>props.handleClose()}>{t("cancel")}</button>
          <button type="submit">{t("create")}</button>
        </FormSubmitDiv>
      </form>
    </div>
  );
}

export default AddRestaurantsForm;
