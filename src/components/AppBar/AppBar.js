import sprite from '../../assets/sprite.svg';
import{
    Header, IconCompany, NameCompany,
    Link} from "./AppBar.styled";
import{AuthNav} from '../AuthNav/AuthNav'


export const AppBar=()=>{
    return (
   
        <Header>

            <IconCompany>
               <svg width= '28px' height='28px'>
                <use xlinkHref={sprite + '#icon-ukraine'} />
               </svg>

               <NameCompany>LearnLingo</NameCompany>                
            </IconCompany>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/teacher">Teachers</Link>
                <Link to="/favorite">Favorite</Link>
            </nav>

            <AuthNav/>

        </Header>
  
    )
}

