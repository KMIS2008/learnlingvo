import { NavContainer, ButtonLogin, ButtonRegistr} from "./AuthNav.styled";
import sprite from '../../assets/sprite.svg';
import {ModalLogin} from '../Auth/ModalLogin';
import {ModalRegisration} from '../Auth/ModalRegistration';
import { useState } from "react";
import { signOut } from 'firebase/auth';
import { auth } from '../database';
import { useDispatch } from "react-redux";
import {deleteToken} from '../../redux/AuthSlice';
import { useSelector } from 'react-redux';
import{selectIsLoggedIn} from '../../redux/selects';

export const AuthNav=()=>{
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenModalRegistration, setIsOpenModalRegistration] = useState(false);
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const handleLogOut = ()=>{
     signOut(auth);
     dispatch(deleteToken())
    }

    return (
         <NavContainer>
               <svg width= '20px' height='20px'>
                   <use xlinkHref={sprite + '#icon-loginblue'} />
              </svg>
            <ButtonLogin type="button"onClick={() => {
              setIsOpenModal(true);}} >Log in</ButtonLogin>

            <ButtonRegistr type="button" onClick={() => {
              setIsOpenModalRegistration(true);}}>Registration
            </ButtonRegistr>

              {!isLoggedIn && ( <ButtonLogin type="button" onClick={handleLogOut} >Log out</ButtonLogin>)}

            <ModalLogin isModalOpen={isOpenModal} setIsOpen={setIsOpenModal}/>

            <ModalRegisration 
            isOpenModalRegistration={isOpenModalRegistration} 
            setIsOpenModalRegistration={setIsOpenModalRegistration}/>

        
         </NavContainer>
    )
   
}