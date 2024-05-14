import styled from "styled-components";

export const ContainerTeacher = styled.div`
display: flex;
gap: ${p=>p.theme.spacing(12)};
margin-bottom: ${p=>p.theme.spacing(6)};
width: 100%;
`;

export const Avatar = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;

max-width:120px;
width:100%;
height: 120px;
border-radius: 50%;
border: 3px solid #FBE9BA;
`;

export const Img = styled.img`
width: 96px;
height: 96px;
border-radius: 50%;
`;

export const IconImg = styled.svg`
position: absolute;
left: 85px;
top: 19px;
`;

export const Container = styled.div`
width:100%
`;

export const ContainerHeader = styled.div`
margin-bottom: ${p=>p.theme.spacing(1)};
display: flex;
justify-content: space-between;
align-items: center;
`;

export const SvgHeart = styled.svg`
margin-left: ${p=>p.theme.spacing(11)};
`;

export const ContainerInfo = styled.div`
display: flex;
align-items: center;
gap:${p=>p.theme.spacing(4)};
font-size: 16px;
font-weight: 500px;
line-height: 1,5;
`;

export const SvgInfo = styled.svg`
margin-right:${p=>p.theme.spacing(4)};
`;

export const Name = styled.h2`
margin-bottom:${p=>p.theme.spacing(8)};
font-family: Roboto, sans-serif;  
font-size: 24px;
font-weight: 500px;
line-height: 1;
`;

export const NameText = styled.p`
margin-bottom:${p=>p.theme.spacing(2)};
font-family: Roboto, sans-serif;
font-size: 16px;
font-weight: 500;
line-height: 1,5;
color: #8A8A89;
`;

export const TextSpeaker = styled.span`
color: #121417;
text-decoration: underline;
`;

export const Text = styled.span`
color: #121417;
`;

 export const TextExperience = styled.p`
 margin-bottom:${p=>p.theme.spacing(11)};
 font-family: Roboto, sans-serif;
 font-size: 16px;
 font-weight: 400;
 line-height: 1,5;
 `;

export const ButtonReadMore = styled.button`
margin-top:${p=>p.theme.spacing(1)};
margin-bottom: ${p=>p.theme.spacing(8)};
width: 78px;
height: 24px;
text-decoration: underline;
border: none;

cursor: pointer;

&:hover {
    background-color: ${p=>p.theme.colors.hover};
  }
`;

export const ButtoBook = styled.button`
width: 232px;
height: 60px;
border: none;
border-radius: 12px;
background-color: ${p=>p.theme.colors.yellow};

font-family:Roboto, sans-serif;
font-size: 18px;
font-weight: 800;
line-height: 1,56;

cursor: pointer;

&:hover {
    background-color: ${p=>p.theme.colors.hover};
  }
`;

