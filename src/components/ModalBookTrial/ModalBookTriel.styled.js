import styled from "styled-components";

export const Container = styled.div`
position: relative;
padding: 0 ${p=>p.theme.spacing(10)};
`;

export const SvgButton = styled.div`
display: block;
position:absolute;
right: 0; top: 0;
border: none;

`
export const Title = styled.h2`
padding-top: ${p=>p.theme.spacing(10)};
margin-bottom: ${p=>p.theme.spacing(4)};
font-size: 40px;
font-weight: 500;
font-family:  Roboto, sans-serif;
line-height: 1,2;
letter-spacing: -0,8;
`
export const Text = styled.p`
margin-bottom: ${p=>p.theme.spacing(4)};
font-size: 16px;
font-family:  Roboto, sans-serif;
line-height: 1,38;
color: rgba(18, 20, 23, 0.8);
`
export const ContainerTeacher = styled.div`
display: flex;
gap: ${p=>p.theme.spacing(4)};
margin-bottom: ${p=>p.theme.spacing(10)};
`;

export const AvatarImg = styled.img`
width: 44px;
height: 44px;
border-radius: 50%;
`;

export const TextTeaher = styled.p`
margin-bottom: ${p=>p.theme.spacing(1)};
font-size: 12px;
font-weight: 500;
font-family:  Roboto, sans-serif;
line-height: 1,33;
color: #8A8A89;
`

export const FullName = styled.h3`
font-size: 16px;
font-weight: 600;
font-family:  Roboto, sans-serif;
line-height: 1,5;
color: #121417;
`