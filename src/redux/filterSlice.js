import { createSlice } from '@reduxjs/toolkit';


const filterSlice = createSlice({
    name: "filter",
    initialState: {
      filter: {  
        languages: "",
        levels: "",
        prices: "",
      }
    },

    reducers: {
      addFilter(state, action) {
        state.filter= action.payload;
      },
    },

  });
  
  export const filterReducer = filterSlice.reducer;
  export const { addFilter } = filterSlice.actions;


  //  const filteredTeachers = teachers.filter(teacher => {
//   const { language, level, price } = filter;

//   const languageFilter = !language || teacher.languages.includes(language);
//   const levelFilter = !level || teacher.levels.includes(level);
//   const priceFilter = !price || teacher.price_per_hour <= price;
// return languageFilter && levelFilter && priceFilter;
// });

        //  {filter.language === '' &&
        //   filter.level === '' &&
        //   filter.price === '' ? 
        //   (  <TeacherList teachers = {teachers}/>)
        //   :  {filteredTeachers.length === 0 ? 
        //       (<h2>No teachers match the criteria</h2>) 
        //        : 
        //       (<TeacherList teachers = {filteredTeachers}/>)}