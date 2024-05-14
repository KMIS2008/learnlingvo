import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`

display: flex;
justify-content: space-between;
align-items: center;
margin: auto;
margin-bottom: ${p=>p.theme.spacing(12)};
padding-left: ${p=>p.theme.spacing(12)};
padding-right: ${p=>p.theme.spacing(12)};

`
export const IconCompany = styled.div`
display: flex;
align-content: center;

gap:${p=>p.theme.spacing(1)};
`

export const NameCompany = styled.p`
font-size:20px;
font-weight: 500;
line-height: 1,2;
letter-spacing: -0.4px;
`

export const Link = styled(NavLink)`

margin-left: ${p=>p.theme.spacing(6)};
font-size: 16px;
line-height: 1,25;
color: #121417;
transition: scale 200ms;
cursor: pointer;

&.active{
    color: ${p=>p.theme.colors.bluedark};
  }

&:hover {
  transform: scale(1.2);
}
`