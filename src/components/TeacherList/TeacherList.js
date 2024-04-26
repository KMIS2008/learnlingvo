import { TeacherItem } from "components/TeacherItem/TeacherItem";
// import { useSelector } from 'react-redux';
// import {selectTeachers} from '../../redux/selectors';
import { nanoid } from 'nanoid';


export const TeacherList =({teachers})=>{
    // const teachers =  useSelector(selectTeachers);
    const id = nanoid();

    return (
        <ul>
            {teachers.map(teacher =>(
                <li key = {id}>
                    <TeacherItem value={teacher}/>
                </li>
            ) ) }
        </ul>
    )
}