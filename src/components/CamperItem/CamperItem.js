import sprite from '../../assets/sprite.svg';
import {ContainerItem, Image, Title, Header, Price, LocalRewiew, Reviews, Location, Description, ListButton, ButtonLi, 
    ButtonMore, Svg} from './CamperItem.styled'
import { useState } from "react";
import { useDispatch } from "react-redux";
import {ModalShow} from '../Modal/ModalShow';
import{addFavorite, removeFavorite} from '../../redux/catalogSlice';
import { useSelector } from 'react-redux';
import {selectFavourite} from '../../redux/selectors';

export const CamperItem = ({value}) => {
    const {
        adults,
        // description,
        location,
        name,
        price,
        rating,
        details,
        gallery,
        reviews,
      } = value;

      const [isOpenModal, setIsOpenModal] = useState(false);
      
      const dispatch = useDispatch();

      const favorites = useSelector(selectFavourite);
      
      const isFavorite = favorites.some((item) => item._id === value._id);

      const handleFavoriteClick = (value) => {
        
        if (isFavorite) {
          dispatch(removeFavorite(value));
        } else {

          dispatch(addFavorite(value));
        }
      }

    return (
        <>
                    <ContainerItem>
                        <Image src={gallery[0]} alt={name}></Image>
                        <div>
                            <Header>
                                 <Title>{name}</Title>
                                <Price 
                                onClick={() => handleFavoriteClick(value)}
                                >€{price}.00
                                  <span>     
                                  {isFavorite ? 
                                  <Svg width= '24px' height='24px'>
                                  <use xlinkHref={sprite + '#icon-Hartpressed'} />
                                </Svg> 
                                   : 
                                     <Svg width= '24px' height='24px'>
                                      <use xlinkHref={sprite + '#icon-Hartdefault'} />
                                    </Svg>                                 
                                  }     

                                  </span> 
                                </Price>
                            </Header>

                        <LocalRewiew>
                        <div>
                             <svg width= '16px' height='16px'>
                               <use xlinkHref={sprite + '#icon-star'} />
                             </svg>                       
                          <Reviews>          
                             {rating} ({reviews.length} Rewiews)
                           </Reviews> 
                            
                        </div>

                        <div>
                            <svg width= '16px' height='16px'>
                               <use xlinkHref={sprite + '#icon-map-pin'} />
                            </svg>
                           
                           <Location>  
                             {location}           
                           </Location>                     
                        </div>

                        </LocalRewiew>    

                        <Description>The pictures shown here are example vehicles of the respective.</Description>

                        <ListButton>
                            <ButtonLi>
                             
                                <svg width= '20px' height='20px'>
                                  <use xlinkHref={sprite + '#icon-Users'} />
                                </svg>
                                <p>{adults} adults</p>
                              
                            </ButtonLi>
                            <ButtonLi>
                              
                                <svg width= '20px' height='20px'>
                                  <use xlinkHref={sprite + '#icon-Container'} />
                                </svg>
                                <p>Automatic</p>
                            
                            </ButtonLi>
                            <ButtonLi>
                             
                                <svg width= '20px' height='20px'>
                                  <use xlinkHref={sprite + '#icon-Vertical-container'} />
                                </svg>
                                <p>Petrol</p>
                           
                            </ButtonLi>
                            <ButtonLi>
                           
                                <svg width= '20px' height='20px'>
                                  <use xlinkHref={sprite + '#icon-eat'} />
                                </svg>
                                <p>Kitchen</p>
                            
                            </ButtonLi>
                            <ButtonLi>
                            
                                <svg width= '20px' height='20px'>
                                   <use xlinkHref={sprite + '#icon-bad'} />
                                </svg>
                                <p>{details.beds}beds</p>
                            
                            </ButtonLi>
                            <ButtonLi>
                            
                                <svg width= '20px' height='20px'>
                                   <use xlinkHref={sprite + '#icon-Vector'} />
                                </svg>
                                <p>AC</p>
                             
                            </ButtonLi>
                        </ListButton>

              <ButtonMore type='button' onClick={() => {
              setIsOpenModal(true);
            }}>Show more</ButtonMore>

                        </div>

                    </ContainerItem> 
                    <ModalShow isModalOpen={isOpenModal} setIsOpen={setIsOpenModal} data={value} />       
        </>
    );
  }; 
  
 