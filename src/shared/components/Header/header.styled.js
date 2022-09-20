import styled from "styled-components";
import Button from 'react-bootstrap/Button';
export const HeaderDiv = styled.div`
  display: flex;
  background: #27283C;
`;

export const LogoDiv = styled.div`
display:flex;
width: 265px;
padding: 21px 0 11px 21px;
& p{
font-family: 'Mukta', sans-serif;
font-style: normal;
font-weight: 800;
font-size: 28px;
color: #F5F5F5;
}
& span{
font-weight: 800;
    font-size: 28px;
    color:#EAAB00;
}
`;

export const MenuDiv = styled.nav`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 19px;
`;

export const LangDiv = styled.div`
margin-right: 22px;
cursor: pointer;
`

export const LangImg = styled.img`
  display: block;
  cursor: pointer;
  /* background-color: transparent; */
  /* background-image:; */
`;

export const AddProductDiv = styled(Button)`
box-shadow: none !important;
cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 107px; */
  margin-right: 22px;
  height: 28px;
  padding: 0 8px;
  /* height: ; */
  background: #c035a2;
  border: 2px solid #c035a2;
  box-shadow: 0px 4px 4px rgba(39, 174, 96, 0.2);
  border-radius: 14px;
`;
export const AddProductText = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 21px;
  color: #fff;
  margin-left: 3px;
`;

export const HeaderWhoLogin = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarAdmin = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: rgba(245, 245, 245, 0.87);
  margin-left: 15px;
`;
