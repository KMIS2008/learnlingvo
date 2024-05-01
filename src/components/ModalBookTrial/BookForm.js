import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")
      .required('Required'),
    email: Yup.string().email("Email must contait @").required('Required'),
    number: Yup.string().min(10, "Telefon number contain min 10 symbols").required('Required'),
  });

  const options= [
      { name: 'Career and business',  id: '1' },
      { name: 'Lesson for kids', id: '2' },
      { name: 'Living abroad', id: '3' },
      { name: 'Exams and coursework', id: '4' },
      { name: 'Culture, travel or hobby', id: '5' },
    ];

export function BookForm (){
    const {
        register,
        handleSubmit,
        reset
      } = useForm({ validationSchema:SignupSchema});

      const[selectedOptions, setSelectedOptions]=useState();

      const onSubmit = (data) => {
        console.log(data);
      };

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>What is your main reason for learning English?</p>

          {options.map(option => (
          <label key={option.id}>
            <input
              type="radio"
              name="topic"
              value={option.name}
              checked

              onChange={(e) => setSelectedOptions(e.target.value)}
              {...register('phone', { required: true })}
            />
            {option.name}
          </label>
        ))}
        </div>       

         <div>
          <input type="text" 
                 id="name" 
                 name="name" 
                 placeholder='Full Name' 
                 {...register('name', { required: true })} />
        </div>
  
        <div>
          <input type="email" 
                 id="email" 
                 name="email" 
                 placeholder='Email' 
                 {...register('email', { required: true })} />
        </div>
  
        <div>
          <input type="tel" 
                 id="phone" 
                 name="phone" 
                 placeholder='Phone number' 
                //  ref={register({ required: true })} 
                 {...register('phone', { required: true })}
                 />
        </div>
  
        <button type="submit">Book</button>
      </form>
      )

}