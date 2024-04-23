import { lazy } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from "react-router-dom";

const AppLayout = lazy(() => import('./AppLayout/AppLayout'));
const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../Pages/CatalogPage/CatalogPage'));
const FavoritePage = lazy(() => import('../Pages/FavoritePage/FavoritePage'));


export const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="catalog" element={<CatalogPage/>}/>
          <Route path="favorite" element={<FavoritePage/>}/>
        </Route>
        <Route path="*" element={<HomePage/>} />
      </Routes>

      <GlobalStyle/>
    </div>
    
  );
};

export default App;
