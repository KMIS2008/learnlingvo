import styled from 'styled-components';

export const ContainerWrapper = styled.div`
width: 100%;
min-width: 320px;
max-width: 1440px;
padding: 20px 30px;
margin: auto;
padding-top: ${p=>p.theme.spacing(4)};
padding-bottom: ${p=>p.theme.spacing(4)};
`