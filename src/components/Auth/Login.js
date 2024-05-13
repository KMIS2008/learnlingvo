import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import * as Yup from 'yup';
import {useDispatch } from 'react-redux';
import {Input, Button, ButtonEye} from './Login.styled';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../database';
import {addToken} from '../../redux/AuthSlice';

const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Email must contait @").required('Required'),
    password: Yup.string().min(6, "Password contain min 6 symbols").required('Required'),
  });


export function Login() {
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [visibility, setVisibility] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { isSubmitting }, 
    reset
  } = useForm({ validationSchema:SignupSchema});

  const onSubmit = async  (data, e) => {
    const { email, password } = data;
    e.preventDefault();
 
    try {
          const login =  await signInWithEmailAndPassword(
            auth,
            email,
            password
          );

          const accessToken = await login.user.getIdToken();

          dispatch(addToken(accessToken));

          reset()
          return login.user;
  
    } catch (error) {
      console.log(error)
    }
  };

  const handlePassword = evt => {
    evt.preventDefault();
    setIsPasswordVisible(prevState => !prevState);
  };

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
    
      <Input type="email" id = "email" placeholder='Email' {...register('email', { required: true })} />
      <div>
         <Input type={isPasswordVisible ? 'text' : 'password'} id = "password" placeholder='Password' {...register('password', { required: true })} />

         <ButtonEye type='button' onClick={()=>setVisibility(!visibility)}>
           {
             visibility? < FiEye  onClick={handlePassword}/> : < FiEyeOff  onClick={handlePassword}/>
           }
         </ButtonEye>        
      </div>

    <Button type="submit" disabled={isSubmitting}>Log In</Button>
  </form>   
  );
}

