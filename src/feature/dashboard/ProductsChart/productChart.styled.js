import styled from "styled-components";
import { device } from "../../../devices/device";
export const ProductChartDiv = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
  width: 472px;
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
  @media ${device.desktopS}{
    max-width: 40%;
  }
  @media ${device.laptop}{
    width: 100%;
    margin: 0 auto;
 
  }
  @media ${device.tablet}{
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
  }
  @media ${device.mobileL}{
    width: 540px;
    margin-bottom: 15px;
  }

  @media ${device.mobileM}{
  /* margin: 0 auto; */
margin-top: 50px;
 }
 
 @media ${device.mobileS}{
    margin: 30px 0;

    width: 100%;
    /* margin-left: 0; */
    /* height: auto; */
  }
`;

export const DoughnutChart = styled.div`
  width: 264px;
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
  background: ${props=>props.kfc ? "#EB5757" : props.american ? "#BB6BD9" : props.mcdonalds ? "#A84069" : ""};
  border-radius: 50%;
`;

export const ChartdivFooterText = styled.div`
  display: flex;
  margin-right: 20px;
  @media ${device.mobileL}{
    margin: 0 auto;
  }
 @media ${device.mobileM}{
  margin: 0 auto;

 }
`;
