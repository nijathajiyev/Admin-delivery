import styled from 'styled-components'
import {device} from '../../devices/device'
export const MyTd = styled.td`
width: 230px;
border-bottom: 1px solid   #FFFFFF;;
box-shadow: inset 0px -1px 0px #DFE2E9;

&:nth-child(3){
    width: 232px;
    height: 48px;

}
&:nth-child(4){
    width: 256px;
    height: 48px;

}
&:nth-child(5){
    width: 94px;
    height: 48px;

}
@media ${device.mobileS}{
    &:nth-child(1){
        width: 91px;
        height: 31px;
        
    }
}



`
export const Img = styled.img`
width: 70px;
height: 70px;
border-radius: 35px;
`
export const TrashImg = styled.div`
margin-bottom: 15px;
margin-top: 15px;
margin-left: 61px;

`
export const Span = styled.span`
border: 1px solid #DFE2E9;
width: 57px;
height: 24px;
border-radius: 8px;
padding: 2px 12px;


`
export  const Text = styled.p`
font-size: 14px;
font-weight: 400;
margin-left: 27px;
margin-left: 22px;
margin-top: 9px;
margin-right: 43px;
margin-bottom: 15px;

`
export const TableTitle = styled.th`

border-bottom: 1px solid   #FFFFFF;
box-shadow: inset 0px -1px 0px #DFE2E9;
width: 230px;
height: 65px;
border-bottom: 1px solid   #FFFFFF;;
box-shadow: inset 0px -1px 0px #DFE2E9;
&:nth-child(3){
    width: 232px;
    height: 65px;

}
&:nth-child(4){
    width: 256px;
    height: 65px;

}
&:nth-child(5){
    width: 94px;
    height: 65px;

}


`
export const ThText = styled.p`
font-size: 14px;
font-weight: 600;
margin-left: 20px;
color: #00072B;
&:nth-child(6){
    color: #C9CFDA;
}
&:first-child{
    margin-left: 50px;
}
`
export  const TableStyled = styled.table`
width: 97%;
background-color: #fff;
margin-left: 36px;
margin-right: 32px;

`
export const MainDiv = styled.div`
justify-content: center;
align-items: center;
margin: 10px;
`
//Heading
export const Button = styled.button `
background-color: #C035A2;
border-radius: 14px;
color: #fff;
`

export const Nav = styled.nav`
background-color: #27283C;
font-weight: 700;
border-radius: 14px;
margin-top: 16px;
width: 97%;
height: 73px;
margin-left: 28px;
margin-right: 32px;
@media ${device.mobileS}{
    width: 303px;
    margin-left: 8px;
    margin-right: 9px;
    height: 102px;
  }
`
