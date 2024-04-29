import { useForm } from 'react-hook-form';
import React from 'react';
import * as Yup from 'yup';
// import {useDispatch } from 'react-redux';
import {Input, Button} from './Registration.styled';

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

       <div>

         <Input
          type="text"
          id="name"
          placeholder='Name'
          {...register('name', { required: true })}
        />

       </div>
      
       <div>
     
         <Input type="email" 
         id = "email" 
         placeholder='Email' 
         {...register('email', { required: true })} />
 
       </div>
       <div>
     
         <Input type="password" 
         id = "password" 
         placeholder='Password' 
         {...register('password', { required: true })} />
    
       </div>
      <Button type="submit">Sign Up</Button>
  </form>
    
  );
}