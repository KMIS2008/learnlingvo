import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  gap: ${p=>p.theme.spacing(1)};;
  align-items:center;
  align-content: center;
`;

export const ButtonLogin = styled.button`
display: block;
margin: auto;
margin-right: ${p=>p.theme.spacing(1)};
font-size: 16px;
font-weight: 700;
line-height: 1.25;
text-align: center;
border: none;
color: #121417;

transition: scale 200ms;

  &:hover {
    color:  ${p=>p.theme.colors.bluedark};
    transform: scale(1.1);
  }
`;

export const ButtonRegistr = styled.button`
 
margin: auto;
width: 166px;
height: 48px;
font-size: 16px;
font-weight: 700;
line-height: 1.25;
text-align: center;
border: none;
color: #FFFFFF;
background-color: #121417;
border-radius: 12px;
cursor: pointer;

transition: scale 200ms;

  &:hover {
    color:  #121417;
    background-color: ${p=>p.theme.colors.bluedark};
    transform: scale(1.1);
  }
`;