import { nanoid } from 'nanoid';
import {Button, Container} from './Level.styled';

export const Levels = ({levels}) => {
    
    return(
        <Container>
            {levels.map((level)=>(
              <Button key ={nanoid()} >
                 <p>#{level}</p>
              </Button>                
            ))}
        </Container>
)}