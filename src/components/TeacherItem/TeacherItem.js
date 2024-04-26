import sprite from '../../assets/sprite.svg';
// import {Levels} from '../Level/Level';
// import {ReadMore} from '../ReadMore/ReadMore';

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
        levels,
        reviews,
    } = value;

    return (
        <div>
            <div>
                <img src={avatar_url} alt="Avatar"/>

                <svg width= '12px' height='12px'>
                <use xlinkHref={sprite + '#icon-Greenround'} />
               </svg>

            </div>
         
            <div>

                <div>
                    <p>Languages</p>

                    <p>
                        <svg width= '12px' height='12px'>
                            <use xlinkHref={sprite + '#icon-book-open'} />
                        </svg>
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
                       <svg width= '16px' height='16px'>
                         <use xlinkHref={sprite + '#icon-star'} />
                       </svg>
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

                </div>

                <h2>{name} {surname}</h2>

                <p>Speaks: <span>{`${languages}`}</span> </p>
                <p>Lesson Info: <span>{lesson_info}</span> </p>
                <p>Conditions: <span>{`${conditions}`}</span> </p>

                <button type='button'>Read more</button>

                {/* <ReadMore reviews = {reviews}/>

                <Levels levels = {levels}/> */}

                <button type="button">Book trial lesson</button>

            </div>
        </div>
    )
}