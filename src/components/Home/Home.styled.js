import styled from 'styled-components';

export const ContainerFlex= styled.div`
display: flex;
gap: ${p=>p.theme.spacing(2)};
padding: 20px 0;
`;

export const ContainerHero= styled.div`
padding: 95px 60px;
`;

export const Title = styled.h1`
margin-bottom: ${p=>p.theme.spacing(8)};
font-size: 48px;
font-weight: 500;
line-height: 1,17;
letter-spacing: -0,96;
`;

export const TitleSpan = styled.span`
font-style: italic;
font-weight: 400;
background-color: ${p=>p.theme.colors.blue};
border-radius: 8px;
`;

export const TextHome = styled.h1`
margin-bottom: ${p=>p.theme.spacing(16)};

width: 471px;
font-family: Roboto, sans-serif;
font-weight: 400;
font-style: normal;
font-size: 16px;
line-height: 1.375;
letter-spacing: -0.32px;
color: #121417;
`;

export const ButtonStart = styled.button`
width: 267px;
height: 60px;

font-size: 18px;
font-weight: 500;
line-height:1,56;

background-color: ${p=>p.theme.colors.blue};
border: none;
border-radius: 12px;
cursor: pointer;

&:hover {
    background-color: ${p=>p.theme.colors.hover};
  }
`;

export const Image = styled.img`
width: 568px;
height: 530px;
border-radius: 30px;
`;




