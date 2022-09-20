import styled from "styled-components";
import { DropdownMenu, DropdownItem, Dropdown } from "reactstrap";
import { device } from "../../devices/device";
export const Logindiv = styled.div`
  height: 100vh;
  background: #1e1e30;
`;

export const LogoDiv = styled.h3`
  display: flex;
  width: 265px;
  padding: 21px 0 11px 21px;
  & p {
    font-family: "Mukta", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    color: #f5f5f5;
  }
  & span {
    font-weight: 800;
    font-size: 28px;
    color: #eaab00;
  }
  @media ${device.tablet} {
    /* margin: 0 auto; */
  }
`;

export const LoginForm = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  width: 830px;
  /* height: 411px; */
  margin: 0 auto;
  @media ${device.tablet} {
    /* width: 700px; */
    flex-direction: column-reverse;
  }
  @media ${device.mobileL} {
    /* width: 700px; */
    flex-direction: column-reverse;
  }
  @media ${device.mobileM} {
    /* width: 700px; */
    flex-direction: column-reverse;
  }
  @media ${device.mobileS} {
    /* width: 700px; */
    flex-direction: column-reverse;
    width: 100%;
    margin-left: 35px;
  }
`;

export const LeftForm = styled.div`
  width: 425px;
  height: 411px;
  background-color: #38394e;
  padding: 57px 47px;
  & h3 {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    color: #c7c7c7;
    margin-bottom: 41px;
    text-align: center;
  }
  & form {
    display: flex;
    flex-direction: column;

    & input {
      background: #5a5b70;
      border-radius: 4px;
      color: #c7c7c7;
      padding: 15px;
      &::placeholder {
        padding-left: 40px;
      }
      &:focus {
        background: #5a5b70;
        color: #c7c7c7;
        border: none;
        box-shadow: none;
      }
    }
  }
  @media ${device.tablet} {
    background: transparent;
    
    & h3 {
      width: 100%;
      margin-bottom: 22px;
      font-size: 24px;
      letter-spacing: 2px;
    }
    & form {
      & input {
        padding: 10px;
      }
    }
  }
  @media ${device.mobileL} {
    padding-top: 0;
    background: transparent;
    margin-top: -100px;
    & h3 {
      width: 100%;
      margin-bottom: 22px;
      font-size: 24px;
      letter-spacing: 2px;
    }
    & form {
      & input {
        padding: 10px;
      }
    }
  }
  @media ${device.mobileM} {
    padding-top: 0;
    background: transparent;
    margin-top: -100px;
    & h3 {
      width: 100%;
      margin-bottom: 22px;
      font-size: 24px;
      letter-spacing: 2px;
    }
    & form {
      & input {
        padding: 10px;
      }
    }
  }
  @media ${device.mobileS} {
    background: transparent;
    padding: 0 55px;
    & h3 {
      width: 100%;
      margin-bottom: 22px;
      font-size: 24px;
      letter-spacing: 2px;
    }
    & form {
      & input {
        padding: 10px;
      }
    }
  }
`;

export const RightForm = styled.div`
  width: 405px;
  background: #fffefe;
  padding: 55px 29px;
  height: 411px;
  position: relative;
  & img {
    width: 100%;
    object-fit: cover;
  }
  @media ${device.tablet} {
    /* width: 700px; */
    background: transparent;
  }
  @media ${device.mobileL} {
    width: 300px;
    padding: 0px;
    background: transparent;
  }
  @media ${device.mobileM} {
    /* width: 700px; */
    background: transparent;
    padding: 0px;
  }
  @media ${device.mobileS} {

    padding: 0 25px;
    background: transparent;
  }
`;

export const LoginBtn = styled.button`
  background: #c035a2;
  border-radius: 6px;
  border-style: none;
  padding: 10px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  color: #ffffff;
  margin-top: 30px;
`;

export const DropdownLangLogin = styled(DropdownMenu)`
  background-color: transparent;
  min-width: 60px !important;
  max-width: 60px;
  border: none;
  margin-left: -9px;
`;

export const DropdownItemComp = styled(DropdownItem)`
  margin: 0 9px;
  min-width: 42px !important;
  max-width: 42px;
  & img {
    padding: 13px 0 17px 0;
  }
  &:not(:last-child) {
    border-bottom: 1px solid rgba(243, 244, 246, 1);
  }
`;
export const DropdownBtn = styled(Dropdown)`
  position: absolute;
  top: 3%;
  right: 0;
  & button {
    background-color: transparent !important;
    border: none;
    padding: 0;
    margin-right: 20px;
    &:focus {
      box-shadow: none !important;
    }
  }
`;
