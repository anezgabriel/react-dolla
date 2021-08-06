import React from 'react';
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text
} from './LoginElements';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefaul();
  };

  return (
    <Container>
      <FormWrap>
        <Icon to="/">Dolla</Icon>
        <FormContent>
          <Form action="#" onSubmit={handleSubmit}>
            <FormH1>Login in to your account</FormH1>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput name="email" id="email" type="email" />
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput name="password" id="password" type="password" />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Login;
