import{languages, levels, prices} from './Options';
import {Form, OptionContainer, Label, Select} from './FilterForm.styled';
import { nanoid } from 'nanoid';

export function FilterForm() {
    return(
        <Form>
            <OptionContainer>
               <Label>Languages</Label>
               <Select id = "languages" name="languages">
                {languages.map(language=>(
                    <option key={nanoid()} value={language}>
                        {language}
                    </option>
                )) }
                </Select>                
            </OptionContainer>

            <OptionContainer>
               <Label>Level of knowledge</Label>
               <Select id = "level" name="level">
                  {levels.map(level=>(
                    <option key={nanoid()} value={level}>
                        {level}
                    </option>
                  ))}                  
                </Select>   
           
            </OptionContainer>

            <OptionContainer>
               <Label>Price</Label>
               <Select id = "price" name="price">
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