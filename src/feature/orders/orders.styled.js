import styled from 'styled-components'
import {device} from "../../devices/device"
export const Span = styled.span`
border: 1px solid #DFE2E9;
width: 57px;
height: 24px;
border-radius: 8px;
padding: 2px 12px;

`
export const MyTd = styled.td`
font-size: 14px;
font-weight: 400;
letter-spacing: 0.25px;
color: #00072B;

width: 196px;

`
export const TableTitle = styled.th`
font-size: 14px;
font-weight: 600;
`
export  const TableStyled = styled.table`
width: 97%;
background-color: #ffffff;
border: 1px solid #ffffff;
box-shadow: inset 0px -1px 0px #DFE2E9;
margin-left: 36px;
margin-right: 32px;
@media ${device.mobileS}{
/* margin-left: 0; */

}

`
export const Nav = styled.nav`
background-color: #27283C;
font-weight: 700;
border-radius: 14px;
width: 97%;
height: 73px;
margin-top: 16px;
margin-left: 28px;
margin-right: 32px;
@media ${device.mobileS}{
    width: 295px;
    height: 54px;
    margin-left: 0;
    margin-top: 51px;
    margin-right: 8px;

}
`