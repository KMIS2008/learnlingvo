import styled from "styled-components";
import { Field as FormikField, Form as FormikForm } from "formik";

export const FormTitle = styled.h2`
  margin-bottom: 8px;
  
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  
  color: ${(p) => p.theme.colors.black};
`;

export const FormSubtitle = styled.p`
  margin-bottom: 24px;
  
  font-size: 14px;
  line-height: 1.2;
  
  color: ${(p) => p.theme.colors.grey};
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 448px;
  height: 532px;

  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
`;

export const Field = styled(FormikField)`
  padding: 18px;
  margin-bottom: 14px;

  font-size: 16px;
  line-height: 1.25;
  
  border: none;
  border-radius: 10px;
  background-color: ${(p) => p.theme.colors.beige};
  color: ${(p) => p.theme.colors.black};
  outline: none;

  &::placeholder {
    font-size: 16px;
    line-height: 1.25;
    color: rgba(16, 24, 40, 0.6);
  }

  &:hover::placeholder{
    color: ${(p) => p.theme.colors.black};
  } 
`;

export const Textarea = styled(FormikField)`
  margin-bottom: 24px;
  padding: 18px;
  
  resize: none;
  height: 114px;
  font-size: 16px;
  line-height: 1.25;
  
  border-radius: 10px;
  border: none;
  background-color: ${(p) => p.theme.colors.beige};
  color: ${(p) => p.theme.colors.black};
  outline: none;
  
  &::placeholder {
    font-size: 16px;
    line-height: 1.25;
    color: rgba(16, 24, 40, 0.6);
  }

  &:hover::placeholder{
    color: ${(p) => p.theme.colors.black};
  } 

`;

export const ButtonSubmit = styled.button`
  padding: 16px 60px;
  border: none;
  border-radius: 200px;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  width: 160px;
  height: 56px;
  color: #ffffff;
  background-color: ${(p) => p.theme.colors.red};


  &:hover, :focus {
    background-color:${(p) => p.theme.colors.hover};
  }
`;