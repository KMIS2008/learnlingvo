import { TeacherItem } from "components/TeacherItem/TeacherItem";
// import { useSelector } from 'react-redux';
// import {selectTeachers} from '../../redux/selectors';
import { nanoid } from 'nanoid';
import {Container} from './TeacherList.styled'


export const TeacherList =({teachers})=>{
    // const teachers =  useSelector(selectTeachers);
    return (
        <Container>
            {teachers.map(teacher =>(
                <li key = {nanoid()}>
                  
                    <TeacherItem value={teacher}/>
                </li>
            ) ) }
        </Container>
    )
}