import styled from "styled-components";

export const Title = styled.h2`
margin-bottom: ${p=>p.theme.spacing(5)};

font-family: Roboto, sans-serif;
font-size: 24px;
font-weight: 600;
line-height: 1,33;
`;

export const Input = styled.input`
margin-bottom: ${p=>p.theme.spacing(4)};
padding-left: ${p=>p.theme.spacing(4)};

width: 100%;
height: 54px;

border: 1px solid rgba(18, 20, 23, 0.1) ;
border-radius: 12px;
outline: none;
border: 2px solid ${props => props.hasError ? 'red' : '#ccc'};

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

cursor: pointer;

&:hover {
  background-color: ${p=>p.theme.colors.hover};
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p=>p.theme.spacing(5)};
`;

export const LabelRadio = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  margin-bottom: ${p=>p.theme.spacing(5)};

  font-size: 16px;
  font-family:  Roboto, sans-serif;
  line-height: 1,38;
  color: #121417;
`;

export const InputRadio = styled.input`
  display: none;
`;

export const RadioButtonIndicator = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(18, 20, 23, 0.2); 
  border-radius: 50%;
  transition: border-color 0.3s ease-in-out;
  margin-right: 5px;

  ${InputRadio}:checked + & {
    border-color: #f4c550; 
  }
`;

export const CheckedIcon = styled.svg`

  visibility: hidden;

  ${InputRadio}:checked + ${RadioButtonIndicator} & {
    visibility: visible;
  }
`;

export const Error = styled.p`
margin-bottom: 18px;
`;

