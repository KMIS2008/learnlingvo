import styled from "styled-components";

export const Title = styled.h2`
   margin-bottom: 10px;

  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
 
  color: ${(p) => p.theme.colors.black};
`;

export const TitleFlex = styled.div`
display: flex;
justify-content: space-between;
`;


export const Info = styled.div`
  display: flex;
  margin-bottom: 24px;
  gap: 16px;
`;

export const Reviews = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  color: ${(p) => p.theme.colors.black};
`;

export const Location = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.black};
`;

export const LocationReviews = styled.div`
  display: flex;
  gap: 5px;
`;

export const Price = styled.p`
  margin-bottom: 24px;
  
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.black};
`;

export const GamperList = styled.ul`
  margin-bottom: 24px;
  display: flex;
  gap: 16px;
`;

export const GamperItem = styled.li`
  list-style-type: none;
  width: 290px;
  height: 310px;
`;

export const GamperImg = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Description = styled.p` 
  margin-bottom: 30px;
  text-align: justify;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.grey};
`;

export const ButtonClose = styled.button` 
border-color: transparent;
`;

export const Buttons = styled.button` 
margin-right: 20px;
margin-bottom: 30px;
padding-bottom: 10px;
border-color: transparent;

&:hover,
  :focus {
    border-bottom-color: ${p=>p.theme.colors.red};
  }
`;

export const ListButton = styled.ul`
display: flex;
margin-bottom: 30px;
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

export const TitleFeatures = styled.h3`
margin-bottom: 30px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.black};
`;

export const FeaturesContainer = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 10px;
font-size: 24px;
line-height: 1.25;
`;

export const FormaFlex = styled.div`
display: flex;
`;

export const ContainerDateil= styled.div`
padding: 10px;
width: 450px;
`;


export const FormaBook = styled.div`
padding: 10px;
width: 450px;
border-radius: 10px;
border: solid 1px ${p=>p.theme.colors.beige};
`;

export const TextBook = styled.p` 
  margin-bottom: 30px;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.grey};
`;

export const ReweiwsList = styled.ul`
  margin-bottom: 24px;
`;

export const ReweiwsName = styled.div`
  padding:14px;
  width: 60px;
  height: 60px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2;
  text-align:center;
  color: ${p=>p.theme.colors.red};
  background-color: ${p=>p.theme.colors.beige};
  border-radius: 50%;
`;

export const ReweiwsNameRating = styled.div`
display: flex;
margin-bottom: 16px;
gap:16px;
`;

export const NameRating = styled.div`
padding: 10px;
display: block;
`;

export const TitleName = styled.div`
font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
`;

export const Comment = styled.p`
  text-align: justify;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.grey};
`;

