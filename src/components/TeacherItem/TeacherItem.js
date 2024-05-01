import sprite from '../../assets/sprite.svg';
import {Avatar,
        Img,
        IconImg,
        ContainerTeacher,
        ContainerHeader,
        ContainerInfo,
        SvgInfo,
        Name,
        NameText,
        Text,
        TextSpeaker,
        // TextExperience,
        ButtonReadMore, 
        ButtoBook} from './TeacherItem.styled';
import {Levels} from '../Level/Level';
import {ReadMore} from '../ReadMore/ReadMore';
import { useState } from "react";
import { ModalBookTrial } from 'components/ModalBookTrial/ModalBookTrial';

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
        // experience,
        levels,
        reviews,
    } = value;

    const [isOpenModalBook, setIsOpenModalBook] = useState(false);
    const [readMore, setReadMore] = useState(false);

    const handleReadMore=()=>{setReadMore(true)};
    

    return (
        <ContainerTeacher>
            <Avatar>
                <Img src={avatar_url} alt="Avatar"/>

                <IconImg width= '12px' height='12px'>
                   <use xlinkHref={sprite + '#icon-Greenround'} />
                </IconImg>

            </Avatar>
         
            <div>

                <ContainerHeader>
                  <p>Languages</p>

                  <ContainerInfo>

                    <p>
                        <SvgInfo width= '12px' height='12px'>
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

                    <svg width= '26px' height='26px'>
                        <use xlinkHref={sprite + '#icon-heart'} />
                    </svg>

                    <svg width= '26px' height='26px'>
                        <use xlinkHref={sprite + '#icon-hover'} />
                    </svg>      

                  </ContainerInfo>

                </ContainerHeader>

                <Name>{name} {surname}</Name>

                <NameText>Speaks: <TextSpeaker>{`${languages}`}</TextSpeaker> </NameText>
                <NameText>Lesson Info: <Text>{lesson_info}</Text> </NameText>
                <NameText>Conditions: <Text>{`${conditions}`}</Text> </NameText>

                {/* <TextExperience>{experience}</TextExperience> */}
               

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

            </div>
        </ContainerTeacher>
    )
}