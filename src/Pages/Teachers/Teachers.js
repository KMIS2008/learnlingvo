import {useEffect, useState } from 'react';
import { TeacherList } from "../../components/TeacherList/TeacherList";
import { database } from "components/database";
// import { ref, child, get } from 'firebase/database';
import { ref, get,
  // child,
  //  query, orderByKey, limitToFirst
   } from 'firebase/database';


export default function Teachers (){
 
 const [teachers, setTeachers] = useState([]);

  // useEffect(() => {
  //       async function fetchTeachers() {
  //     try {
  //       const data = await get(child(dbRef, '/'));
  //       if (data.exists()) {
  //         setTeachers(data.val());
  //       } else {
  //         console.log('No data available for teachers');
  //       }
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   }
  //   fetchTeachers();
  // }, [dbRef]);

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
       <TeacherList teachers = {teachers}/>
    )
}