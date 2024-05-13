import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import * as Yup from 'yup';
import {useDispatch } from 'react-redux';
import {Input, Button, ButtonEye} from './Registration.styled';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../database';
import {addToken} from '../../redux/AuthSlice';


const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")
      .required('Required'),
    email: Yup.string().email("Email must contait @").required('Required'),
    password: Yup.string().min(6, "Password contain min 6 symbols").required('Required'),
  });


export function Registration() {
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [visibility, setVisibility] = useState(false);

  const {
    register,
    handleSubmit,
    reset
  } = useForm({ validationSchema:SignupSchema});


  const handlePassword = evt => {
    evt.preventDefault();
    setIsPasswordVisible(prevState => !prevState);
  };

  const  onSubmit = async (data) => {
    const { email, password } = data;
   
  try {
    const result = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )

    dispatch(addToken(result.user.accessToken));
    reset();
    return result;
  } catch (error) {
    throw error;
  }}
    
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
     
         <Input type={isPasswordVisible ? 'text' : 'password'} 
         id = "password" 
         placeholder='Password' 
         {...register('password', { required: true })} />

<ButtonEye type='button' onClick={()=>setVisibility(!visibility)}>
           {
            visibility? < FiEye onClick={handlePassword}/> : < FiEyeOff onClick={handlePassword}/>
           }
         </ButtonEye> 
    
       </div>
      <Button type="submit">Sign Up</Button>
  </form>
  );
}