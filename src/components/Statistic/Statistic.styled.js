import styled from 'styled-components';

export const ContainerFlex= styled.ul`
display: flex;
justify-content: space-between;
padding: 40px 122px;

list-style: none;

border-radius: 30px;

background-image: repeating-linear-gradient(
      to right,
      #9FB7CE 0%,
      #9FB7CE 50%,
      transparent 50%,
      transparent 100%
    ),
    repeating-linear-gradient(
      to right,
      #9FB7CE 0%,
      #9FB7CE 50%,
      transparent 50%,
      transparent 100%
    ),
    repeating-linear-gradient(
      to bottom,
      #9FB7CE 0%,
      #9FB7CE 50%,
      transparent 50%,
      transparent 100%
    ),
    repeating-linear-gradient(
      to bottom,
      #9FB7CE 0%,
      #9FB7CE 50%,
      transparent 50%,
      transparent 100%
    );


background-position: left top, left bottom, left top, right top;
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 20px 1.5px, 20px 2px, 1.5px 20px, 1.5px 20px;
`;

export const List= styled.li`
display: flex;
align-items: center;
gap: ${p=>p.theme.spacing(2)};
`;

export const Number= styled.p`
font-size: 28px;
font-weight: 500;
line-height: 1,12;
letter-spacing: -0,56;

color: #121417;
`;

export const TextStatistic= styled.p`
width: 96px;

font-size: 14px;
font-weight: 400;
  line-height: 1.286;
  letter-spacing: -0.28px;

color: rgba(18, 20, 23, 0.7);
`;


