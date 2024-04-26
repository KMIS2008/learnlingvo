import { nanoid } from 'nanoid';

export const Levels = (levels) => {
    
    const id = nanoid();

    return(
        <ul>
            {levels.map((level)=>(
              <li key ={id} >
                 <p>{level}</p>
              </li>                
            ))}
        </ul>
)}