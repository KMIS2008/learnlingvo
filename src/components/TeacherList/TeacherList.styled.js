import styled from "styled-components";

export const Container = styled.div`
padding: ${p=>p.theme.spacing(6)};
`;

export const ListContainer = styled.ul`
list-style-type: none;
`;

export const Button = styled.button`
display: block;
margin: 0 auto;
width: 183px;
height: 60px;
border-radius: 12px;
border: none;
background-color: ${p=>p.theme.colors.yellow};

font-family: Roboto, sans-serif;  
font-size: 18px;
font-weight: 800;
line-height: 1,56;


&:hover {
    background-color: ${p=>p.theme.colors.hover};
  }

`;