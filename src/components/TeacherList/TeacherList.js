import { TeacherItem } from "components/TeacherItem/TeacherItem";
// import { useSelector } from 'react-redux';
// import {selectTeachers} from '../../redux/selectors';
import { nanoid } from 'nanoid';
import {Container, ListContainer, Button} from './TeacherList.styled'


export const TeacherList =({teachers})=>{
    // const teachers =  useSelector(selectTeachers);
    return (
        <Container>
          <ListContainer>
            {teachers.map(teacher =>(
                <li key = {nanoid()}>
                  
                    <TeacherItem value={teacher}/>
                </li>
            ) ) }
          </ListContainer> 

          <Button type="button">Load more</Button> 
                  
        </Container>

    )
}