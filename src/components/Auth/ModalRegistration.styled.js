import styled from "styled-components";

export const Container = styled.div`
position: relative;
padding: 64px 20px;
`

export const SvgButton = styled.div`
display: block;
position:absolute;
right: 0; top: 0;
border: none;
margin-left: auto;
`

export const Title = styled.h2`
font-size: 40px;
font-weight: 500;
line-height: 1,2;
margin-bottom: ${p=>p.theme.spacing(2)};
`
export const Text = styled.p`
font-size: 16px;
font-weight: 400;
line-height: 1,38;
color: rgba(18, 20, 23, 0.8);
margin-bottom: ${p=>p.theme.spacing(5)};
`