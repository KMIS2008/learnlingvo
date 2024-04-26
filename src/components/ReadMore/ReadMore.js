import { nanoid } from 'nanoid';
import sprite from '../../assets/sprite.svg';

export const ReadMore = ({reviews})=>{
    const {reviewer_name, 
           reviewer_rating,
           comment
          } = reviews;
    const id =nanoid();

   return(
    <ul>
        {reviews.map(()=>(
           <li key={id}>
            <div>
                <svg width= '44px' height='44px'>
                   <use xlinkHref={sprite + '#icon-hover'} />
                </svg>

                <p>{reviewer_name}</p>

                <p>
                    <svg width= '16px' height='16px'>
                         <use xlinkHref={sprite + '#icon-star'} />
                    </svg>  

                    {reviewer_rating}                 
                </p>

            </div>

            <p>{comment}</p>

           </li>      
        )

        )}
   
    </ul>


   )
}