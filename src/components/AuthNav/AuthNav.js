import { NavContainer, ButtonLogin, ButtonRegistr} from "./AuthNav.styled";
import sprite from '../../assets/sprite.svg';
import {ModalLogin} from '../Auth/ModalLogin';
import {ModalRegisration} from '../Auth/ModalRegistration';
import { useState } from "react";

export const AuthNav=()=>{
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenModalRegistration, setIsOpenModalRegistration] = useState(false);

    return (
         <NavContainer>
               <svg width= '20px' height='20px'>
                   <use xlinkHref={sprite + '#icon-loginblue'} />
              </svg>
            <ButtonLogin type="button"onClick={() => {
              setIsOpenModal(true);}} >Log in</ButtonLogin>

            <ButtonRegistr type="button" onClick={() => {
              setIsOpenModalRegistration(true);}}>Registration</ButtonRegistr>

            <ButtonLogin type="button" >Log out</ButtonLogin>

            <ModalLogin isModalOpen={isOpenModal} setIsOpen={setIsOpenModal}/>

            <ModalRegisration isOpenModalRegistration={isOpenModalRegistration} setIsOpenModalRegistration={setIsOpenModalRegistration}/>

        
         </NavContainer>
    )
   
}