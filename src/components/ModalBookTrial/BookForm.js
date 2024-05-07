import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import {Title, RadioWrapper, LabelRadio, InputRadio, Input, Button, RadioButtonIndicator, CheckedIcon} from './BookForm.styled';


import sprite from '../../assets/sprite.svg';

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

      const onSubmit = (data) => {
        console.log(data)
        reset()
      };

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Title>What is your main reason for learning English?</Title>

          <RadioWrapper>
      {options.map(({ name, value, id }) => (
        <LabelRadio key={id}>
          <InputRadio
            type="radio"
            name="topic"
            value={value}
            {...register('topic', { required: true })}
          />
          <RadioButtonIndicator>
            <CheckedIcon width= '10px' height='10px'>
              <use xlinkHref={sprite + '#icon-circle'} />
            </CheckedIcon>
          </RadioButtonIndicator>
          <span>{name}</span>
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
                 {...register('phone', { required: true })}
                 />
        </div>
  
        <Button type="submit">Book</Button>
      </form>
      )

}