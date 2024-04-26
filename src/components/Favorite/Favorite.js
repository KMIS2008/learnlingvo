import { useSelector } from 'react-redux';
import {selectFavourite} from '../../redux/selectors';
import {TeacherItem} from '../Favorite/Favorite';

export const Favorite = () => {
    const favorites = useSelector(selectFavourite);
return(
    
    <ul>
    {favorites.map((item) => (
        <TeacherItem key={item._id} value={item} />
      ))}
    </ul>
    
)}