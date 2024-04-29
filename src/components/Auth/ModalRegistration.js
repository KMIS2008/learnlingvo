import Modal from "react-modal";
import sprite from '../../assets/sprite.svg';
import { Registration } from "./Registration";
import {Container,
        SvgButton,
        Title,
        Text } from './ModalLogin.styled';

Modal.setAppElement('#modal');


export const ModalRegisration = ({ isOpenModalRegistration, setIsOpenModalRegistration }) => {

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(30, 66, 89, 0.4)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "40px",
      maxWidth: "566px",
      maxHeight: "600px",
      borderRadius: "30px",
    },
  };
  
    return (
      <>
      <Modal   
        isOpen={isOpenModalRegistration}
        onRequestClose={() => {
            setIsOpenModalRegistration(false);
        }}
             
        style={customStyles}

        contentLabel="More info modal"     
      >
<Container>
        <SvgButton
           onClick={() => {
            setIsOpenModalRegistration(false);
           }}>
            <svg width= '32px' height='32px'>
                <use xlinkHref={sprite + '#icon-x'} />
            </svg> 
         </SvgButton>

         <Title>Registration</Title>

         <Text>Thank you for your interest in our platform! In order to register, we need some information. 
            Please provide us with the following information</Text>

         <Registration/>
</Container>

      </Modal>
      
      </>
    );
  }; 