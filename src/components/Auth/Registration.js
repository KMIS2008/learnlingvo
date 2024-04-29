import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import * as Yup from 'yup';
// import {useDispatch } from 'react-redux';
import {Input, Button, ButtonEye} from './Registration.styled';
import { FiEyeOff, FiEye } from 'react-icons/fi';


const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")
      .required('Required'),
    email: Yup.string().email("Email must contait @").required('Required'),
    password: Yup.string().min(6, "Password contain min 6 symbols").required('Required'),
  });


export function Registration() {
//   const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({ validationSchema:SignupSchema});

  const onSubmit = (data) => {
    console.log(data); // Вы можете здесь отправить данные на сервер или выполнять другие действия с данными формы
  };

  const [visibility, setVisibility] = useState(false);

//   const handleSubmit =e=>{
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//         logIn({
//             email: form.elements.email.value,
//             password: form.elements.password.value,
//         })
//     )
//     form.reset();
// }

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

         <Input
          type="text"
          id="name"
          placeholder='Name'
          {...register('name', { required: true })}
        />
  
         <Input type="email" 
         id = "email" 
         placeholder='Email' 
         {...register('email', { required: true })} />
   
       <div>
     
         <Input type="password" 
         id = "password" 
         placeholder='Password' 
         {...register('password', { required: true })} />

<ButtonEye type='button' onClick={()=>setVisibility(!visibility)}>
           {
            visibility? < FiEye/> : < FiEyeOff/>
           }
         </ButtonEye> 
    
       </div>
      <Button type="submit">Sign Up</Button>
  </form>
    
  );
}