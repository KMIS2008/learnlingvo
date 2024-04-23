import {useEffect } from 'react';
import { useDispatch} from 'react-redux';
import {fetchCamperCatalog} from '../../redux/operations';
import { Catalog } from "components/Catalog/Catalog";




export default function CatalogPage (){
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchCamperCatalog());
      }, [dispatch]);

    return(
        <>
        <Catalog/>
        </>
    )
}