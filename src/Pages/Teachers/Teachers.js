import {useEffect, useState } from 'react';
import { TeacherList } from "../../components/TeacherList/TeacherList";
import {FilterForm} from '../../components/Filter/FilterForm';
import { fetchTeachers} from 'components/helpers/FetchTeachers';
import {selectFilter} from '../../redux/selects.js';
import { useSelector } from 'react-redux';



export default function Teachers (){
 
 const [teachers, setTeachers] = useState([]);
 const filter = useSelector(selectFilter);

  useEffect(() => {
    fetchTeachers({setTeachers});
    
  }, []);

  const filteredTeachers = teachers.filter(teacher => {
    const { languages, levels, prices } = filter;

    if (!languages && !levels && !prices) {
      return true;
    }

    const languageFilter = !languages || teacher.languages.includes(languages);
    const levelFilter = !levels || teacher.levels.includes(levels);
    const priceFilter = !prices || teacher.price_per_hour <= prices;
    return languageFilter && levelFilter && priceFilter;
  });
 

    return(
      <>
        <FilterForm/>

         {filter.language === '' &&
          filter.level === '' &&
          filter.price === '' 
          ? 
          (
            <TeacherList teachers={teachers}  />
          ) : (
            <>
            {filteredTeachers.length === 0 
            ? 
            (
                <h2>No teachers match the criteria</h2>
              ) : (
                <TeacherList
                  teachers={filteredTeachers}                 
                />
              )}
            </>
          )}
      </>
      
    )
}