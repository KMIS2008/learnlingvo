import {useEffect, useState } from 'react';
import { TeacherList } from "../../components/TeacherList/TeacherList";
import { database } from "components/database";
import { ref, child, get } from 'firebase/database';


export default function CatalogPage (){

 const [teachers, setTeachers] = useState([]);
//  const dbRef = ref(database);

//     useEffect(() => {
       
//         async function fetchTeachers (){
//             try {
        
//                 const data = await get(child(dbRef, "teachers"));

//                 setTeachers (data.val());
        
//             } catch (e) {
//                 return e.message
//             }
        
//         }
//         fetchTeachers();
//       }, [dbRef]);

const dbRef = ref(database);

  useEffect(() => {
    async function fetchTeachers() {
      try {
        const data = await get(child(dbRef, 'teachers'));
        if (data.exists()) {
          setTeachers(data.val());
        } else {
          console.log('No data available for teachers');
        }
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    }
    fetchTeachers();
  }, [dbRef]);

    return(
       <TeacherList teachers = {teachers}/>
    )
}