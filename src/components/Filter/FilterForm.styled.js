import styled from "styled-components";

export const Form = styled.form`
display: flex;
gap: ${p=>p.theme.spacing(5)};
`
export const OptionContainer = styled.div`
display: flex;
flex-direction: column;
gap: ${p=>p.theme.spacing(2)};
`
export const Label = styled.label`
font-family: Roboto, sans-serif;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
color: #8A8A89; 
`
export const Select = styled.select`
font-family: Roboto, sans-serif;
font-size: 18px;
font-weight: 600;
line-height: 1,11;
border-radius: 14px;
border: none;
outline: none;
color: #121417;

& option {
    color: #8A8A89; 
    font-size: 18px;
    font-weight: 600;
    line-height: 1,11;
}
`
