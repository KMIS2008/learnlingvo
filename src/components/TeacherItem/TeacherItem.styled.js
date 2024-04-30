import styled from "styled-components";

export const ContainerTeacher = styled.div`
display: flex;
gap: ${p=>p.theme.spacing(12)};
margin-bottom: ${p=>p.theme.spacing(6)};
`;

export const Avatar = styled.div`
position: relative;
padding: ${p=>p.theme.spacing(3)};
width: 120px;
height: 120px;
border-radius: 50%;
border: 3px solid #FBE9BA;
`;

export const Img = styled.img`
border-radius: 50%;
`;

export const IconImg = styled.svg`
position: absolute;
left: 85px;
top: 19px;
`;

export const ContainerHeader = styled.div`
margin-bottom: ${p=>p.theme.spacing(1)};
display: flex;
justify-content: space-between;
align-items: center;
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
margin-bottom:${p=>p.theme.spacing(1)};
font-size: 16px;
font-weight: 500px;
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

export const ButtonReadMore = styled.button`
margin-top:${p=>p.theme.spacing(1)};
margin-bottom: ${p=>p.theme.spacing(8)};
width: 78px;
height: 24px;
text-decoration: underline;
border: none;
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

&:hover {
    background-color: ${p=>p.theme.colors.hover};
  }
`;

