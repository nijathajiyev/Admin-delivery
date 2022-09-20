import styled from "styled-components";
import { device } from "../../../devices/device";

export const OrdersChartDiv = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
  width: 634px;

  background-color: #27283c;
  padding: 16px 24px;
  border-radius: 14px;
  margin-top: 24px;
  margin-left: 28px;
  /* height: ; */
  & h4 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.01em;
    color: #c7c7c7;
  }
  @media ${device.desktopS} {
    position: relative;
    max-width: 55%;
    /* height: 50%; */
  }
  @media ${device.laptop} {
    width: 100%;
    margin: 0 auto;
    height: auto;
    margin-top: 20px;
  }
  @media ${device.tablet} {
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
  }
  @media ${device.mobileL} {
    margin-left: 0;
  }
  @media ${device.mobileM} {
    margin-top: 80px;
    margin-left: 0;
  }
  @media ${device.mobileS} {
    margin: 30px 0;
    width: 100%;
    margin-left: 0;
  }
`;

export const DoughnutChart = styled.div`
  @media ${device.desktopS} {
    max-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 10px;
  }
`;

export const ChartdivFooter = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
  display: flex;
  flex-wrap: wrap;
  & span {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #c7c7c7;
    margin-left: 8px;
  }
`;

export const ChartEllipseIcon = styled.div`
  width: 16px;
  height: 16px;
  background: ${(props) =>
    props.kfc
      ? "#EB5757"
      : props.american
      ? "#BB6BD9"
      : props.mcdonalds
      ? "#A84069"
      : ""};
  border-radius: 50%;
`;

export const ChartdivFooterText = styled.div`
  display: flex;
  margin-right: 20px;
`;
