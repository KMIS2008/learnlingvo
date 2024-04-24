import {ContainerFlex, ContainerHero, Title, TitleSpan,TextHome, ButtonStart, Image} from './Home.styled';
import girl from '../../assets/girl.jpg';
import {Statistic} from '../Statistic/Statistic';

export const Home = () => {
    return (
      <div>
        <ContainerFlex>
           <ContainerHero>
              <Title>
                 Unlock your potential with the best  <TitleSpan>language</TitleSpan> tutors
              </Title>   

              <TextHome>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language 
                proficiency to new heights by connecting with highly qualified and experienced tutors.
              </TextHome>   

              <ButtonStart type='button'>Get started</ButtonStart>    
           </ContainerHero>

           <Image src={girl} alt='Funny girl'/>
          
        </ContainerFlex>

        <Statistic/>

      </div>
    );
  }; 