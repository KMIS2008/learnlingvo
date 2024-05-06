import{languages, levels, prices} from './Options';
import {Form, OptionContainer, Label, Select} from './FilterForm.styled';
import { nanoid } from 'nanoid';
import { useDispatch} from 'react-redux';
import {addFilter} from '../../redux/filterSlice';
import { useState } from 'react';


export function FilterForm() {
    const [statelanguage, setstateLanguages] = useState();
    const [statelevel, setStateLevel] = useState();
    const [stateprice, setStatePrices] = useState();

      const getFilter = () => {
        return {
          languages: statelanguage,
          levels: statelevel,
          prices: stateprice,
        };
      };
    
    const dispatch = useDispatch();

    const handlLanguages = (e)=>{
        setstateLanguages(e.target.value)
        return dispatch(addFilter({...getFilter(), languages: e.target.value}))
    }

    const handlLevel = (e)=>{
        setStateLevel(e.target.value)
        return dispatch(addFilter({...getFilter(), levels: e.target.value}))
    }

    const handlPrice = (e)=>{
        setStatePrices(e.target.value)
        return dispatch(addFilter({...getFilter(), prices: e.target.value}))
    }

    return(
        <Form>
            <OptionContainer>
               <Label>Languages</Label>
               <Select id = "languages" name="languages" onChange={handlLanguages}>
                {languages.map(language=>(
                    <option key={nanoid()} value={language}>
                        {language}
                    </option>
                )) }
                </Select>                
            </OptionContainer>

            <OptionContainer>
               <Label>Level of knowledge</Label>
               <Select id = "level" name="level" onChange={handlLevel}>
                  {levels.map(level=>(
                    <option key={nanoid()} value={level}>
                        {level}
                    </option>
                  ))}                  
                </Select>   
           
            </OptionContainer>

            <OptionContainer>
               <Label>Price</Label>
               <Select id = "price" name="price" onChange={handlPrice}>
                  {prices.map(price=>(
                    <option key={nanoid()} value={price}>
                        {price}
                    </option>
                  ) )}
               </Select>                
            </OptionContainer>

        </Form>

    )

}