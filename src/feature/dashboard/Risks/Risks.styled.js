import styled from "styled-components";
import { device } from "../../../devices/device";

export const RisksDiv = styled.div`
width: 472px;
  position: relative;
  background: #27283c;
  border-radius: 14px;
  height: 472px;
  margin-top: 24px;
  padding: 16px 32px;
  & h4 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.01em;
    color: #c7c7c7;
  }
  & p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #8e8e93;
    letter-spacing: 0.01em;
  }
  @media ${device.desktopS}{
    max-width:40%;
    /* height: 50%; */
  }
  @media ${device.laptop}{
    width: 100%;
    margin: 0 auto;
    height: auto;
    margin-top: 20px;
  }
  @media ${device.tablet}{
    width: 100%;
    margin: 0 auto;
    height: auto;
    margin-top: 20px;
  }
  @media ${device.mobileL}{
    width: 100%;
    height: auto;
  }
  @media ${device.mobileS}{
    width: 100%;
    /* height: auto; */
  }

`;
