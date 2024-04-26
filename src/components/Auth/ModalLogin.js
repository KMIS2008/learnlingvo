import Modal from "react-modal";
import sprite from '../../assets/sprite.svg';
import { Login } from "./Login";
import {Container,
        SvgButton,
        Title,
        Text } from './ModalLogin.styled';

Modal.setAppElement('#modal');


export const ModalLogin = ({ isModalOpen, setIsOpen }) => {

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
      maxHeight: "506px",
      borderRadius: "30px",
    },
  };
  
    return (
      <>
      <Modal   
        isOpen={isModalOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
             
        style={customStyles}

        contentLabel="More info modal"     
      >
<Container>
        <SvgButton
           onClick={() => {
            setIsOpen(false);
           }}>
            <svg width= '32px' height='32px'>
                <use xlinkHref={sprite + '#icon-x'} />
            </svg> 
         </SvgButton>

         <Title>Log In</Title>

         <Text>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</Text>

         <Login/>
</Container>


      </Modal>
      
      </>
    );
  }; 