
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  Title, RadioWrapper, LabelRadio, InputRadio, Input, Button, RadioButtonIndicator, CheckedIcon, Error
} from './BookForm.styled';
import sprite from '../../assets/sprite.svg';


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters long")
    .required('Name is required'),
  email: Yup.string()
    .email("Email must contain @")
    .required('Email is required'),
  phone: Yup.string()
    .min(10, "Phone number must be at least 10 characters long")
    .required('Phone number is required'),
  topic: Yup.string().required('Please select a reason for learning English')
});

const options = [
  { name: 'Career and business', id: '1', value: 'careerAndBusiness' },
  { name: 'Lesson for kids', id: '2', value: 'lessonForKids' },
  { name: 'Living abroad', id: '3', value: 'livingAbroad' },
  { name: 'Exams and coursework', id: '4', value: 'examsAndCoursework' },
  { name: 'Culture, travel or hobby', id: '5', value: 'cultureTravelOrHobby' },
];

export function BookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control
  } = useForm({
    resolver: yupResolver(SignupSchema)
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Title>What is your main reason for learning English?</Title>
        <RadioWrapper>
          {options.map(({ name, value, id }) => (
            <LabelRadio key={id}>
              <Controller
                name="topic"
                control={control}
                render={({ field }) => (
                  <InputRadio
                    type="radio"
                    {...field}
                    value={value}
                    checked={field.value === value}
                  />
                )}
              />
              <RadioButtonIndicator>
                <CheckedIcon width='10px' height='10px'>
                  <use xlinkHref={sprite + '#icon-circle'} />
                </CheckedIcon>
              </RadioButtonIndicator>
              <span>{name}</span>
            </LabelRadio>
          ))}
        </RadioWrapper>
        {errors.topic && <Error style={{ color: 'red' }}>{errors.topic.message}</Error>}
      </div>

      <div>
        <Input
          type="text"
          placeholder='Full Name'
          {...register('name')}
          hasError={!!errors.name}
        />
        {errors.name && <Error style={{ color: 'red' }}>{errors.name.message}</Error>}
      </div>

      <div>
        <Input
          type="email"
          placeholder='Email'
          {...register('email')}
          hasError={!!errors.email}
        />
        {errors.email && <Error style={{ color: 'red' }}>{errors.email.message}</Error>}
      </div>

      <div>
        <Input
          type="tel"
          placeholder='Phone number'
          {...register('phone')}
          hasError={!!errors.phone}
        />
        {errors.phone && <Error style={{ color: 'red' }}>{errors.phone.message}</Error>}
      </div>

      <Button type="submit">Book</Button>
    </form>
  );
}