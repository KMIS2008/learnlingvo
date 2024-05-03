import { useSelector } from 'react-redux';
import {selectFavourite} from '../../redux/selects';
import { TeacherItem } from "../TeacherItem/TeacherItem";

import { nanoid } from 'nanoid';

export const Favorite = () => {
    const favorites = useSelector(selectFavourite);
return(
    
    <ul>
    {favorites.map((favorite) => (
        <TeacherItem key = {nanoid()} value={favorite} />
      ))}
    </ul>
    
)}