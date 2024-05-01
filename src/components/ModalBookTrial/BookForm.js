import { useState } from 'react';
import { useForm, } from 'react-hook-form';
import * as Yup from 'yup';
import {Title, RadioWrapper, LabelRadio, LabelName, Input, Button} from './BookForm.styled';
// import {
//   MdOutlineRadioButtonChecked,
//   MdOutlineRadioButtonUnchecked,
// } from 'react-icons/md';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")
      .required('Required'),
    email: Yup.string().email("Email must contait @").required('Required'),
    number: Yup.string().min(10, "Telefon number contain min 10 symbols").required('Required'),
  });

  const options= [
      { name: 'Career and business',  id: '1', value: 'careerAndBusiness'},
      { name: 'Lesson for kids', id: '2', value: 'lessonForKids'},
      { name: 'Living abroad', id: '3', value: 'livingAbroad'},
      { name: 'Exams and coursework', id: '4', value: 'examsAndCoursework' },
      { name: 'Culture, travel or hobby', id: '5', value: 'cultureTravelOrHobby'},
    ];

export function BookForm (){
    const {
        register,
        handleSubmit,
        reset,
   
      } = useForm({ validationSchema:SignupSchema});

      const[selectedOptions, setSelectedOptions]=useState();

      const onSubmit = (data) => {
        console.log(data);
      };

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Title>What is your main reason for learning English?</Title>

          <RadioWrapper>
 
          {options.map(({ name, value,id }) => (
          <LabelRadio key={id}
          checkedcolor={
            selectedOptions === value ? "#F4C550" : undefined
          }>
            
            <input
              type="radio"
              name="topic"
              value={value}
              checked

              // checked={selectedOptions === value}
              onChange={() => setSelectedOptions(value)}

              {...register('topic', { required: true })}
            />
             {/* {selectedOptions === value ? (
                    <MdOutlineRadioButtonChecked size={24} color="#F4C550" />
                  ) : (
                    <MdOutlineRadioButtonUnchecked
                      size={24}
                      color="#636366"
                    />
                  )} */}

              <LabelName>{name}</LabelName>
            
          </LabelRadio>
        ))}  

          </RadioWrapper>

        </div>       

         <div>
          <Input type="text" 
                 id="name" 
                 name="name" 
                 placeholder='Full Name' 
                 {...register('name', { required: true })} />
        </div>
  
        <div>
          <Input type="email" 
                 id="email" 
                 name="email" 
                 placeholder='Email' 
                 {...register('email', { required: true })} />
        </div>
  
        <div>
          <Input type="tel" 
                 id="phone" 
                 name="phone" 
                 placeholder='Phone number' 
                //  ref={register({ required: true })} 
                 {...register('phone', { required: true })}
                 />
        </div>
  
        <Button type="submit">Book</Button>
      </form>
      )

}