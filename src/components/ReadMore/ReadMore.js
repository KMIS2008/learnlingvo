import { nanoid } from 'nanoid';
import sprite from '../../assets/sprite.svg';
import{ListContainer, ItemContainer, Container, ImgAvatar, ReviewerName, SvgContainer, Comment} from './ReadMore.styled';

export const ReadMore = ({reviews})=>{

   return(
    <ListContainer>
        {reviews.map((review)=>
           (<ItemContainer key={nanoid()}>
            <Container>
                <ImgAvatar src="" alt="Avatar"/>

                <div>
                   <ReviewerName>{review.reviewer_name}</ReviewerName>

                   <SvgContainer>
                      <svg width= '16px' height='16px'>
                         <use xlinkHref={sprite + '#icon-star'} />
                      </svg>  

                       {review.reviewer_rating}                 
                    </SvgContainer>                    
                </div>

            </Container>

            <Comment>{review.comment}</Comment>

           </ItemContainer>      )
            ) }

    </ListContainer>


   )
}