import styled from 'styled-components';
import istockphoto from '../../assets/istockphoto.jpg'

export const BackGround = styled.div`
  display: block;
  background-image: url(${istockphoto});
  margin: 0, auto;
  width: 1600px;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;

  background-size: 80% auto;
  box-sizing: border-box;

`;

export const Welcom = styled.p`
display: block;
font-size: 30px;
margin-top: ${p=>p.theme.spacing(10)};
margin-bottom: ${p=>p.theme.spacing(20)};
padding-left:${p=>p.theme.spacing(60)};
padding-top: ${p=>p.theme.spacing(20)};
`;

export const TextHome = styled.p`
width: 1200px;
font-size: 20px;
padding-left:${p=>p.theme.spacing(10)};
text-align: justify;
`;



