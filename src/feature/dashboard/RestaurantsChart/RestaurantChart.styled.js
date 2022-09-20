import styled from "styled-components";
import { device } from "../../../devices/device";

export const RestaurantChartDiv = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
  margin-left: 30px;
  width: 634px;
  background-color: #27283c;
  padding: 16px 24px;
  border-radius: 14px;
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
    max-width: 55%;
    height: auto;
    padding-top: 50px;
  }
  @media ${device.laptop} {
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
  }
  @media ${device.tablet} {
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
  }
  @media ${device.mobileL} {
    margin-left: 0px;
  }
  @media ${device.mobileM} {
    margin: 80px 0;
  }
  @media ${device.mobileS}{
    margin: 30px 0;

    width: 100%;
    margin-left: 0;
    /* height: auto; */
  }
`;

export const LineChart = styled.div`
  /* width: 264px; */
  /* height: 439px; */
  margin: 0 auto;
  margin-bottom: 30px;
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
    props.february
      ? "#F4A26C"
      : props.march
      ? "#3FAEA3"
      : props.april
      ? "#914DF0"
      : ""};
  border-radius: 50%;
`;

export const ChartdivFooterText = styled.div`
  display: flex;
  margin: 0 auto;
  margin-right: 20px;
`;
