import {useEffect, useState } from 'react';
import { TeacherList } from "../../components/TeacherList/TeacherList";
import {FilterForm} from '../../components/Filter/FilterForm';
import { fetchTeachers } from 'components/helpers/FetchTeachers';



export default function Teachers (){
 
 const [teachers, setTeachers] = useState([]);


  useEffect(() => {
    fetchTeachers({setTeachers});
  }, []);

    return(
      <>
        <FilterForm/>
        <TeacherList teachers = {teachers}/>
      </>
      
    )
}