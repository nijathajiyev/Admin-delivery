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
import { catagoryPostApi } from "../../../api/catagory";
import { setCatagory } from "../../../store/slices/catagorys/catagorySlice";



function AddCatagoryForm(props) {
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
      slug: "",
      imageUrl: "",
    },
    onSubmit: (values) => {
      catagoryPostApi(values).then(res=>{
       let arr = [...state.catagorySlice.data,values]
       console.log(arr);
       dispatch(setCatagory(arr))
      })
    },
  });

  return (
    <div>
      <h3>{t("add category")}</h3>

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
          <p>{t("form.form catagory description")}</p>
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

export default AddCatagoryForm;
