import styled from "styled-components";

export const Title = styled.h2`
margin-bottom: ${p=>p.theme.spacing(5)};

font-family: Roboto, sans-serif;
font-size: 24px;
font-weight: 600;
line-height: 1,33;
`;

export const RadioWrapper = styled.div`
margin-bottom: ${p=>p.theme.spacing(5)};
display: flex;
flex-direction: column;

&:checked{
    background-color: #F4C550}
`;

export const LabelRadio = styled.label`
margin-bottom: ${p=>p.theme.spacing(5)};

font-size: 16px;
font-family:  Roboto, sans-serif;
line-height: 1,38;
color: #121417;
`;

export const LabelName = styled.span`
padding-left: ${p=>p.theme.spacing(2)};
`;

export const Input = styled.input`
margin-bottom: ${p=>p.theme.spacing(4)};
padding-left: ${p=>p.theme.spacing(4)};

width: 100%;
height: 54px;

border: 1px solid rgba(18, 20, 23, 0.1);
border-radius: 12px;
outline: none;

&::placeholder{
    font-size: 16px;
    line-height: 1,38;
    color: #121417;
}
`
export const Button = styled.button`
display: block;
margin:0 auto;
width: 100%;
height: 60px;

background-color: ${p=>p.theme.colors.yellow};
border-radius: 12px;
`;

// &:checked{
//     background-color: #F4C550}