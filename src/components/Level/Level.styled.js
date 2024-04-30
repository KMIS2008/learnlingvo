import styled from "styled-components";

export const Container = styled.ul`
display: flex;
gap: ${p=>p.theme.spacing(2)};

`;

export const Button = styled.li`
margin-bottom: ${p=>p.theme.spacing(6)};
padding: ${p=>p.theme.spacing(3)};
border: 1px solid rgba(18, 20, 23, 0.2);
border-radius: 35px;

font-family: Roboto, sans-serif;  
font-size: 14px;
font-weight: 600;
line-height: 1,14;
color: #121417;
list-style-type:none;
`;