import styled from "styled-components";
import { FormGroup, Label, Input } from "reactstrap";
import { device } from "../../devices/device";
export const Div = styled.div`
  background-color: #ffffff;
  width: 196px;
  height: 277px;
  margin-left: 30px;
  box-shadow: 0px 4px 4px rgba(57, 57, 57, 0.25);
  border-radius: 5px;
  margin-bottom: 26px;
  @media ${device.mobileS} {
    width: 236px;
    height: 311px;
    margin: 0 auto;
    margin-top: 25px;
  }
`;

export const DivMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 52px;
  @media ${device.mobileS} {
    margin-top: 0;
  }
`;
export const MainContent = styled.div`
  position: relative;
`;
export const TrashIcon = styled.div`
  position: absolute;
  bottom: -5px;
  right: 5px;
`;
export const Title = styled.h1`
  margin-top: 8px;
  line-height: 24px;
  letter-spacing: 1%;
  font-style: medium;
  font-weight: 500;
  font-size: 18px;
  color: #1e1e30;
  margin-left: 17px;
  @media ${device.mobileS} {
    margin-top: 25px;
    margin-left: 35px;
  }
`;
export const Content = styled.p`
  margin-left: 17px;
  line-height: 24px;
  letter-spacing: 1%;
  color: #8e8e93;
  font-size: 14px;
  font-weight: 500;
  @media ${device.mobileS} {
    margin-left: 35px;
  }
`;
export const Price = styled.p`
  color: #00b2a9;
  line-height: 24px;
  letter-spacing: 1%;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  margin-left: 18.78px;
  margin-bottom: 13px;
  @media ${device.mobileS} {
    margin-top: 20px;
    margin-left: 35px;
    margin-bottom: 0;
  }
`;
export const ImageDiv = styled.div`
  width: 160px;
  height: 158px;
  margin-left: 15px;
  margin-right: 16px;
  margin-top: 15px;
  @media ${device.mobileS} {
    margin-top: 16.09px;
    margin-left: 36px;
  }
`;

export const Navs = styled.nav`
  background: #27283c;
  border-radius: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 30px;
  @media ${device.desktop} {
    padding-bottom: 10px;
    margin-left: 28px;
  }
  @media ${device.tablet} {
    display: block;
  }
  @media ${device.mobileS} {
    display: block;
    margin-left: 10px;
  }
`;

export const Mydiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media ${device.tablet} {
    display: block;
  }
  @media ${device.mobileS} {
    display: block;
    margin-top: 15px;
  }
`;

export const Nav = styled.nav`
  margin-left: 35px;
  background-color: #27283c;
  border-radius: 14px;
  width: 98%;
`;
export const CategoryTypeDiv = styled(FormGroup)`
  margin-top: 5px;
  width: 199px;
  background: #5a5b70;
  border-radius: 14px;
  margin-right: 20px;
  @media ${device.desktop} {
    margin-right: 0;
  }
  @media ${device.tablet} {
    width: 100%;
    margin: 0 auto;
  }
  @media ${device.mobileS} {
    width: 100%;
    margin: 0 auto;
    border-radius: 4px;
  }
`;
