import { TeacherItem } from "../TeacherItem/TeacherItem";

import { nanoid } from 'nanoid';


export const Favorite = () => {
   const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

return(
    
    <ul>
    {favorites.map((favorite) => (
        <TeacherItem key = {nanoid()} value={favorite} />
      ))}
    </ul>
    
)}