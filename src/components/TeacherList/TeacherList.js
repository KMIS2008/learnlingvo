import { TeacherItem } from "components/TeacherItem/TeacherItem";
import { nanoid } from 'nanoid';
import {Container, ListContainer, Button} from './TeacherList.styled'
import { useState } from "react";


export const TeacherList =({teachers})=>{
  const [countTecher, setCountTeacher]=useState(4)
const handleLoadMore = ()=>{
  setCountTeacher(prevCount=>prevCount+4)
}

    return (
        <Container>
          <ListContainer>
            {teachers.slice(0,countTecher).map(teacher =>(
                <li key = {nanoid()}>
                  
                    <TeacherItem value={teacher}/>
                </li>
            ) ) }
          </ListContainer> 

          {countTecher < teachers.length && <Button type="button" onClick={handleLoadMore}>Load more</Button> }

        </Container>

    )
}