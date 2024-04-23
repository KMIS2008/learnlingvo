import sprite from '../../assets/sprite.svg';
import{
    Header,
    Link} from "./AppBar.styled";
import{AuthNav} from '../AuthNav/AuthNav'


export const AppBar=()=>{
    return (
    <div>
        <Header>
            <svg width= '20px' height='20px'>
                <use xlinkHref={sprite + '#icon-ukraine'} />
            </svg>
            <p>LearnLingo</p>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/teacher">Teachers</Link>
                <Link to="/favorite">Favorite</Link>
            </nav>
            <svg width= '20px' height='20px'>
                <use xlinkHref={sprite + '#icon-loginblue'} />
            </svg>
            <AuthNav/>
        </Header>   
    </div>
        
    )
}

