import styled from "styled-components";
import {device} from '../../devices/device'
import { FormGroup } from "reactstrap";
export const MainDiv = styled.div`
  width: 247px;
  height: 83px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(57, 57, 57, 0.25);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 37px;
  margin-left: 38.5px;

  @media ${device. mobileS}{
    display: flex;
    width: 266px;
    height: 83px;
    margin-left: 30px;
    margin-right: 24px;
  }
 
`;
export const CategoryTypeDiv = styled(FormGroup)`
margin-top: 5px;
width: 199px;
height: 35px;
padding: 0px 10px;
background: #5A5B70;
border-radius: 14px;
margin-right: 20px;
@media ${device.tablet} {
    width: 100%;
    margin: 0 auto;
   
}
@media ${device.mobileS} {
    width: 100%;
    margin: 0 auto;
    
}
`
export const Title = styled.h1`
  margin: 0;
  color: #1e1e30;
  font-size: 18px;
  line-height:24px;
  letter-spacing:1%;
  font-weight: 500;
  align-items: center;
`;
export const TrashDiv = styled.div`
  position: absolute;
  top: 5;
  right: 0;
`;
export const ImageDiv = styled.div`
  width: 65px;
  height: 57px;
  padding-left:12px;
  margin-bottom: 15px;
  margin-top: 16px;

  margin-left: 12px;
`;
export const TitleDiv = styled.div`
  margin-top: 17px;
  @media ${device.mobileS}{
  margin-top: 27px;
}
`;
export const ImageDiv2 = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 17px;
  margin-top: 16px;
  margin-left: 17px;
`;

export const Content = styled.p`
  padding-top: 5px;
  font-size: 14px;
  font-weight: 500;
  line-height:24px;
  letter-spacing:1%;
  color: #828282;
  @media ${device.mobileS}{
  display: none;
}
`;
export const BurgerP = styled.p`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px; 
  color: #828282;
`;
export const ParentBox = styled.div`
  /* display: flex; */
`;
export const ChildBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${device.mobileS}{
  margin-top: 39px;
}
`;
// header
export const Button = styled.button`
  background-color: #C035A2;
  border-radius: 14px;
  color: #fff;
  width: 168px;
height: 35px;
@media ${device.mobileS}{
  width: 270px;
  height: 35px;


}
`;

export const Nav = styled.nav`
  background-color: #27283c !important;
  border-radius: 14px;
  margin-top: 16px;
  margin-left:28px;
  width:98.5%;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  @media ${device.mobileS}{
    width: 303px;
    height: 102px;
    margin-left: 8px;
    margin-right: 9px;

  }
`;
export const ButtonGrey = styled.button`
  background-color: #5a5b70;
  border-radius: 14px;
  width: 165px;
  margin-right:27px;
  height: 30px;
  @media ${device.mobileS}{
    display: none;

  }
`;
