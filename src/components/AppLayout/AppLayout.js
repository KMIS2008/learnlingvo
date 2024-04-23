import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import{Container} from "./AppLayout.styled";
import {AppBar} from '../AppBar/AppBar';



const AppLayout=()=>{
    return (
    <Container>
        <AppBar/>

        <main>
        <Suspense fallback={<div>LOADING PAGE...</div>}>
             <Outlet/>
        </Suspense>
           
        </main>     
    </Container>
        
    )
}

export default AppLayout;