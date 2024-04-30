import {useEffect, useState } from 'react';
import { TeacherList } from "../../components/TeacherList/TeacherList";
import { database } from "components/database";
// import { ref, child, get } from 'firebase/database';
import { ref, get,
  // child,
  //  query, orderByKey, limitToFirst
   } from 'firebase/database';
import {FilterForm} from '../../components/Filter/FilterForm';


export default function Teachers (){
 
 const [teachers, setTeachers] = useState([]);


  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const dbRef = ref(database, '/');
        const data = await get(dbRef);

        if (data.exists()) {
          setTeachers(data.val());
        }
      } catch (error) {
        console.error('Loading error', error.message);
      }
    };

    fetchTeachers();
  }, []);


    return(
      <>
        <FilterForm/>
        <TeacherList teachers = {teachers}/>
      </>
      
    )
}