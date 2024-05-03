import sprite from '../../assets/sprite.svg';
import {Avatar,
        Img,
        IconImg,
        ContainerTeacher,
        Container,
        ContainerHeader,
        SvgHeart,
        ContainerInfo,
        SvgInfo,
        Name,
        NameText,
        Text,
        TextSpeaker,
        TextExperience,
        ButtonReadMore, 
        ButtoBook} from './TeacherItem.styled';
import {Levels} from '../Level/Level';
import {ReadMore} from '../ReadMore/ReadMore';
import { useState } from "react";
import { ModalBookTrial } from 'components/ModalBookTrial/ModalBookTrial';
import {addFavorite, removeFavorite} from '../../redux/teacherSlice';
import { useDispatch, useSelector } from 'react-redux';
import {selectFavourite, selectIsLoggedIn} from '../../redux/selects';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const TeacherItem = ({value}) => {

    const {avatar_url,
        lessons_done,
        rating,
        price_per_hour,
        name,
        surname,
        languages,
        lesson_info,
        conditions,
        experience,
        levels,
        reviews,
    } = value;

    const dispatch= useDispatch();

    const [isOpenModalBook, setIsOpenModalBook] = useState(false);
    const [readMore, setReadMore] = useState(false);

    const isLoggedIn=useSelector(selectIsLoggedIn);
    const favorites = useSelector(selectFavourite);

    const isFavorite = favorites.some((favorite) => favorite.surname === value.surname)

    const handleReadMore=()=>{setReadMore(true)};

    const handleFavorite =()=>{
        if(isLoggedIn){
           
           if(!isFavorite)
               { dispatch(addFavorite(value))}
           else {dispatch(removeFavorite(value))}
        }
        else {toast.warn('You must Log in',{theme: "colored",});}
}
    
    return (
        <ContainerTeacher>
            <Avatar>
                <Img src={avatar_url} alt="Avatar"/>

                <IconImg width= '12px' height='12px'>
                   <use xlinkHref={sprite + '#icon-Greenround'} />
                </IconImg>

            </Avatar>
         
            <Container>

                <ContainerHeader>
                  <p>Languages</p>

                  <ContainerInfo>

                    <p>
                        <SvgInfo width= '16px' height='16px'>
                            <use xlinkHref={sprite + '#icon-book-open'} />
                        </SvgInfo>
                        Lessons online
                    </p>

                    <svg width= '1px' height='16px'>
                        <use xlinkHref={sprite + '#icon-Vector'} />
                    </svg>

                    <p>Lessons done: {lessons_done} </p>

                    <svg width= '1px' height='16px'>
                        <use xlinkHref={sprite + '#icon-Vector'} />
                    </svg>

                    <p>
                       <SvgInfo width= '16px' height='16px'>
                         <use xlinkHref={sprite + '#icon-star'} />
                       </SvgInfo>
                       Rating: {rating}
                    </p>

                    <svg width= '1px' height='16px'>
                        <use xlinkHref={sprite + '#icon-Vector'} />
                    </svg>

                    <p>Price / 1 hour: {price_per_hour} </p>

                    {!isFavorite? (<SvgHeart onClick={handleFavorite} width= '26px' height='26px'>
                                        <use xlinkHref={sprite + '#icon-heart'} />
                                      </SvgHeart> )
                                :
                                  (<SvgHeart onClick={handleFavorite} width= '26px' height='26px'>
                                     <use xlinkHref={sprite + '#icon-hover'} />
                                   </SvgHeart> )  
                                      }

                  </ContainerInfo>

                </ContainerHeader>

                <Name>{name} {surname}</Name>

                <NameText>Speaks: <TextSpeaker>{`${languages}`}</TextSpeaker> </NameText>
                <NameText>Lesson Info: <Text>{lesson_info}</Text> </NameText>
                <NameText>Conditions: <Text>{`${conditions}`}</Text> </NameText>

                <TextExperience>{experience}</TextExperience>

                {!readMore && <ButtonReadMore type='button' onClick={handleReadMore} >Read more</ButtonReadMore>}

                {readMore && <ReadMore reviews = {reviews}/>}

                <Levels levels = {levels}/>

                {readMore && <ButtoBook type="button" onClick={() => {
              setIsOpenModalBook(true);}}>Book trial lesson</ButtoBook>}

                <ModalBookTrial 
                isOpenModalBook={isOpenModalBook} 
                setIsOpenModalBook={setIsOpenModalBook}
                avatar={avatar_url} 
                name={name} 
                surname={surname}
                />

            </Container>
            <ToastContainer/>
        </ContainerTeacher >
    )
}