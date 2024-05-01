import styled from "styled-components";

export const ListContainer = styled.ul`
list-style-type: none;
`;

export const ItemContainer = styled.li`
margin-bottom: ${p=>p.theme.spacing(8)};
`;



export const Container = styled.div`
display: flex;
gap: ${p=>p.theme.spacing(2)};
margin-bottom: ${p=>p.theme.spacing(3)};
align-items: center;
`;

export const ImgAvatar = styled.img`
width: 44px;
height: 44px;
border-radius: 50%;
background-color: ${p=>p.theme.colors.rosedark};
`;

export const ReviewerName = styled.p`
margin-bottom: ${p=>p.theme.spacing(1)};
font-family: Roboto, sans-serif;
font-size: 16px;
font-weight: 500;
line-height: 1,5;
color: rgba(138, 138, 137, 1);
`;

export const SvgContainer = styled.p`
display: flex;
gap: ${p=>p.theme.spacing(1)};
align-items: center;
`;

export const Comment = styled.p`

font-family: Roboto, sans-serif;
font-size: 16px;
font-weight: 500;
line-height: 1,5;
`;
