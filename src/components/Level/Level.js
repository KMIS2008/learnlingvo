import { nanoid } from 'nanoid';
import {Button, Container, ButtonNoFilter, ButtonFilter} from './Level.styled';
import {selectFilter} from '../../redux/selects';
import { useSelector } from 'react-redux';

export const Levels = ({levels}) => {
 const filter = useSelector(selectFilter);
    
    return(
        <Container>
            {levels.map((level)=>(
              <Button key ={nanoid()} >
                {filter.levels === level ? (
                    <ButtonFilter>#{level}</ButtonFilter>
                   ) : (
                    <ButtonNoFilter>#{level}</ButtonNoFilter>
                 )}
              </Button>                
            ))}
        </Container>
)}