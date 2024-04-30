import styled from "styled-components";

export const Input = styled.input`
display: block;
margin-bottom: ${p=>p.theme.spacing(2)};
padding-left: ${p=>p.theme.spacing(4)};
height: 54px;
width: 100%;
border-radius: 15px;
border: 1px solid rgba(18, 20, 23, 0.1);
color: #121417;
outline: none;
`


export const Button = styled.button`
margin-top: ${p=>p.theme.spacing(5)};
width:100%;
height: 60px;
text-align: center;
border-radius: 12px;
border: none;
background-color:${p=>p.theme.colors.yellow}; 
`
export const ButtonEye = styled.button`
position: absolute;
top: 58%;
right: 38px;
border: none; 
width: 20px;
height: 20px;
`