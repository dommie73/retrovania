import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import usersAPI from 'services/Users';
import { renderFormFields } from 'common/helpers';
import {
  confirmPasswordValidation,
  emailValidation,
  passwordValidation,
  usernameValidation
} from 'common/validation';

import { Button } from 'components/Button';
import { Link } from 'components/Link';
import { MainHeading } from 'components/MainHeading';
import { Section } from 'components/Section';

const validationSchema = Yup.object().shape({
  username: usernameValidation,
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: confirmPasswordValidation
});

const submitUserData = async user => {
  try {
    const res = await usersAPI.post('/signup', user);
    console.log(res.data);
  } catch (err) {
    console.error(err.response.data);
  }
};

const SignUp = () => (
  <Formik
    initialValues={{
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }}
    validationSchema={validationSchema}
    onSubmit={({ username, email, password }) => {
      submitUserData({ name: username, email, password });
    }}
  >
    {formikProps => {
      const { handleSubmit, initialValues } = formikProps;
      return (
        <Section>
          <MainHeading>Sign Up</MainHeading>
          <Form onSubmit={handleSubmit}>
            {renderFormFields(Object.keys(initialValues))}
            <Button type='submit'>Sign Up</Button>
            <p>
              Already a member? <Link to='/signin'>Sign In</Link>
            </p>
          </Form>
        </Section>
      );
    }}
  </Formik>
);

export { SignUp };
