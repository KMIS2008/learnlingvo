import { NavContainer, ButtonLogin, ButtonRegistr} from "./AuthNav.styled";
import sprite from '../../assets/sprite.svg';

export const AuthNav=()=>{
    return (
         <NavContainer>
               <svg width= '20px' height='20px'>
                   <use xlinkHref={sprite + '#icon-loginblue'} />
              </svg>
            <ButtonLogin type="button">Log in</ButtonLogin>

            <ButtonRegistr type="button">Registration</ButtonRegistr>

            <ButtonLogin type="button">Log out</ButtonLogin>


            {/* <Link to="/login"></Link>
            <Link to ="/register">Register</Link> */}
        
         </NavContainer>
    )
   
}