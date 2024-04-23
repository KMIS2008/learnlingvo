import styled from 'styled-components';

export const ContainerItem = styled.li`
display: flex;
margin-bottom: ${p=>p.theme.spacing(5)};
gap: 24px;
padding: 24px;
width: 840px;
border-radius: 20px;
border: solid 1px ${p=>p.theme.colors.beige};
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.black};
`;

export const Header = styled.div`
display: flex;
margin-bottom: ${p=>p.theme.spacing(1)};
padding-right: ${p=>p.theme.spacing(10)};
justify-content: space-between;
`;

export const Price = styled.button`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.black};
  border: none;
`;

export const LocalRewiew = styled.div`
display: flex;
margin-bottom: ${p=>p.theme.spacing(4)};;
gap: 16px;
`;

export const Reviews = styled.span`
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  color: ${(p) => p.theme.colors.black};
`;

export const Location = styled.span`
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.black};
`;

export const Description = styled.p`
  margin-bottom: 24px;
  width: 525px;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.grey};
   overflow: hidden;
  text-overflow: ellipsis; 
  white-space: nowrap;
`;

export const ListButton = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 8px;
`;

export const ButtonLi = styled.li`
list-style-type: none;
margin-bottom: 10px;

  display: flex;
  padding: 12px 18px;  
  
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.black};

  border: none;
  border-radius: 100px;
  background-color: ${(p) => p.theme.colors.beige};
`;


export const ButtonMore = styled.button`
  display: block;
  padding: 16px 40px;  
  width: 166px;
  height: 56px;
  
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #ffffff;

  background-color: ${(p) => p.theme.colors.red};
  border: none;
  border-radius: 200px;

  &:hover,
  :focus {
    background-color: ${(p) => p.theme.colors.hover};
  }
`;

export const Svg = styled.svg`
 
 fill: ${(p) => p.theme.colors.white};

`;
