import Offcanvas from "react-bootstrap/Offcanvas";
import styled from "styled-components";
import { device } from "../../devices/device";

export const RightSidebarAddProduct = styled(Offcanvas)`
  width: 948px;
  background-color: #38394e;
  & h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    color: #c7c7c7;
    margin-top: 25px;
    margin-bottom: 33px;
  }
  @media ${device.tablet} {
    width: 750px;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
  @media ${device.mobileM} {
    width: 100%;
  }
`;

export const RightSidebarAddProductHeader = styled.div`
  position: absolute;
  top: 40px;
  left: -47px;
  background: #c74feb;
  border-radius: 14px;
  padding: 0px 1px 1px 1px;
  cursor: pointer;
  & img {
    width: 100%;
  }
  @media ${device.mobileL} {
    position: absolute;
    width: 13px;
    top: 40px;
    right: 6%;
    /* left: 50%; */
  }

  @media ${device.mobileM} {
    position: absolute;
  width: 31px;
  top: 25px;
  right: 6%;
  left: auto;
  }
  @media ${device.mobileS} {
    position: absolute;
  width: 31px;
  top: 40px;
  right: 6%;
  left: auto;
  }
`

export const UploadDiv = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  & p:nth-child(1) {
    width: 217px;
    margin-right: 83px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #c7c7c7;
  }
  @media ${device.tablet} {
    justify-content: space-around;
    & p:nth-child(1) {
      width: 157px;
    }
  }
`;
export const UploadDivIcon = styled.div`
  background: #43445a;
  border-radius: 14px;
  width: 526px;
  padding: 32px;

  & button {
    border: none !important;
    background-color: transparent;
    display: block;
    margin: 0 auto;
  }
  & p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #c7c7c7;
  }
  @media ${device.tablet} {
    width: 450px;
  }
  @media ${device.mobileL}{
      width: 100%;

  }
`;

export const ImageDiv = styled.div`
  position: absolute;
  top: 30%;
  left: 2%;
  & button {
    background: #43445a;
    color: #c7c7c7;
    border-radius: 10px;
    padding: 5px;
    margin-top: 5px;
    margin-right: 5px;
  }
  @media ${device.mobileS}{
    margin: 0 auto;
    position: inherit;
    top: auto;
  left: auto;
  margin-top: 5px;
  padding: 10px;
  }
`;

// Add Form div

export const AddForm = styled.div`
  display: flex;
  margin-top: 78px;
  & p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.01em;
    width: 257px;
    margin-right: 43px;
    color: #c7c7c7;
  }
  @media ${device.mobileL}{
    display: block;
    & p{
      width: 100%;
      text-align: center;
    }
  }
  @media ${device.mobileM}{
    display: block;
    & p{
      width: 100%;
      text-align: center;
    }
  }
  @media ${device.mobileS}{
    margin-top:15px;
    display: block;
    & p{
      width: 100%;
      text-align: center;
    }
  }
`;

export const AddFormRight = styled.div`
  height: 375px;
  overflow-y: auto;
  width: 526px;
  padding: 22px 27px;
  border-radius: 14px;
  background-color: #43445a;

  & label {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #c7c7c7;
    margin-bottom: 13px;
  }
  & input,
  textarea {
    color: rgb(199, 199, 199);
    background: #5a5b70;
    border-radius: 14px;
    letter-spacing: 1px;
    &:focus {
      font-size: 16px;
      color: rgb(199, 199, 199);
      background-color: rgb(90, 91, 112);
      padding: 15px;
    }
  }
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(199, 79, 235);
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }

  @media ${device.mobileL}{
    width: 100%;
  }
  @media ${device.mobileM}{
    width: 100%;
  }
  @media ${device.mobileS}{
    width: 100%;
  }
`;

export const FormSubmitDiv = styled.div`
  margin-top: 143px;
  border-top: 1px solid #43445a;
  border-radius: 14px;
  padding: 22px 49px;
  display: flex;
  justify-content: space-between;
  & button:nth-child(1) {
    padding: 14px 112px;
    background: #43445a;
    border: 2px solid #38394e;
    box-shadow: 0px 4px 4px rgba(39, 174, 96, 0.2);
    border-radius: 14px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
    margin-right: 42px;
    width: 50%;
  }

  & button:nth-child(2) {
    padding: 14px 112px;
    background: #c035a2;
    border: 2px solid #c035a2;
    box-shadow: 0px 4px 4px rgba(39, 174, 96, 0.2);
    border-radius: 14px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
    line-height: 21px;
    ${'' /* line-height: 100%; */}
    letter-spacing: 0.25px;
    width: 50%;
  }
  @media ${device.mobileL}{
    margin-top: 13px;
    padding: 10px;
    & button:nth-child(1){
      padding: 16px 68px;
      font-size: 16px;
    }
    & button:nth-child(2){
      padding: 14px 68px;
      font-size: 16px;
    }
  }
  @media ${device.mobileM}{
    width: 100%;
    margin-top: 13px;
    padding: 10px;
    & button:nth-child(1){
      padding: 10px 40px;
      font-size: 14px;
    }
    & button:nth-child(2){
      padding: 10px 40px;
      font-size: 14px;
    }
  }
  @media ${device.mobileS}{
    width: 100%;
    margin-top: 13px;
    padding: 10px;
    & button:nth-child(1){
      padding: 10px 40px;
      font-size: 14px;
    }
    & button:nth-child(2){
      padding: 10px 40px;
      font-size: 14px;
    }
  }
`;
