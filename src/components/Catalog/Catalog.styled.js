import styled from 'styled-components';


export const ContainerCatalog = styled.div`
display: flex;
`;

export const Label = styled.label`
display: block;
  margin-bottom: ${p=>p.theme.spacing(5)};
  font-size: 16px;
  line-height: 2;
  color: ${(p) => p.theme.colors.grey};
`;

export const Input = styled.input`
  width: 360px;
  height: 56px;
  margin-right: ${p=>p.theme.spacing(8)};
  border-radius: 10px;
  border: none;
  background-color: ${(p) => p.theme.colors.beige};
`;

export const Text = styled.p`
  margin-bottom: ${p=>p.theme.spacing(3)};
  font-size: 16px;
  line-height: 2;
  color: ${(p) => p.theme.colors.grey};
`;

export const Tittle = styled.h3`

  margin-bottom: ${p=>p.theme.spacing(3)};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.black};
`;

export const Button = styled.button`
  display: block;
  width: 95px;
  height: 95px;
  
  font-size: 14px;
 
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.black};

  border: solid 1px ${p=>p.theme.colors.beige};
  border-radius: 10px;

  &:hover,
  :focus {
    border: solid 1px ${p=>p.theme.colors.red};
  }
`;

export const ContainerButton = styled.div`
display: flex;
margin-bottom: ${p=>p.theme.spacing(3)};
width:360px;
gap: 8px;
flex-wrap: wrap;
`;

export const ButtonSearch = styled.button`
  display: block;
  width: 173px;
  height: 56px;
  padding: 16px 40px;  
  margin-top: ${p=>p.theme.spacing(10)};
  
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
    background-color: #d84343;
  }
`;

export const LoadMoreButton = styled.div`
  margin: 0 auto;
  padding: 16px 40px;  
  width: 166px;
  height: 56px;
  
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;

  border-radius: 200px;

border: solid 1px ${p=>p.theme.colors.beige};
text-align: center;
&:hover,
  :focus {
    border: solid 1px ${p=>p.theme.colors.red};
  }
`;

