import { NavContainer, ButtonLogin, ButtonRegistr} from "./AuthNav.styled";
import sprite from '../../assets/sprite.svg';

export const AuthNav=()=>{
    return (
         <NavContainer>
               <svg width= '20px' height='20px'>
                   <use xlinkHref={sprite + '#icon-loginblue'} />
              </svg>
            <ButtonLogin>Log in</ButtonLogin>

            <ButtonRegistr>Register</ButtonRegistr>


            {/* <Link to="/login"></Link>
            <Link to ="/register">Register</Link> */}
        
         </NavContainer>
    )
   
}