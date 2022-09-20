import styled from "styled-components";
import { device } from "../../devices/device";

export const TblMain = styled.div`
  margin-top: 41px;
  margin-left: 28px;
  @media ${device.mobileS} {
    margin-left: 8px;
  }
`;

export const MyTd = styled.td`
  font-size: 14px;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  line-height: 24px;
  padding-left: 44px;
  padding-top: 2px;
  padding-right: 30px;
  border-bottom: 1px solid #dfe2e9;
  box-shadow: inset 0px -1px 0px #dfe2e9;
`;
export const MyTd2 = styled.td`
  font-family: "Open Sans", sans-serif;
  line-height: 24px;
  font-size: 14px;
  font-weight: 400;
  padding-left: 65px;
  padding-top: 2px;
  padding-right: 40px;
  border-bottom: 1px solid #dfe2e9;
  box-shadow: inset 0px -1px 0px #dfe2e9;
`;

export const TableTitle = styled.th`
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  line-height: 24px;
  border-bottom: 1px solid #dfe2e9;
  padding-bottom: 11px;
  padding-top: 30px;
  padding-left: 68px;
`;
export const TableTitle2 = styled.th`
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  line-height: 24px;
  border-bottom: 1px solid #dfe2e9;
  padding-bottom: 11px;
  padding-top: 30px;
  padding-left: 65px;
`;

export const TableStyled = styled.table`
  width: 98%;
  background-color: #fff;
  margin-left: 6px;
  margin-right: 32px;
`;
export const Span = styled.span`
  border: 1px solid #dfe2e9;
  width: 57px;
  height: 24px;
  border-radius: 8px;
  padding: 2px 12px;
`;
// catagory heading
export const Button = styled.button`
  background-color: #c035a2;
  border-radius: 14px;
  color: #fff;
`;

export const Nav = styled.nav`
  background-color: #27283c;
  font-weight: 700;
  border-radius: 14px;
  width: 97%;
  height: 73px;
  margin-top: 16px;
  margin-left: 28px;
  margin-right: 32px;
  @media ${device.mobileS} {
    margin-left: 8px;
    margin-top: 15px;
    height: 102px;
  }
`;
