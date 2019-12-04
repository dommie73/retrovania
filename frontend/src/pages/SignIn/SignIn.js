import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { renderFormFields } from 'common/helpers';
import { fieldValidation } from 'common/validation';

import { Button } from 'components/Button';
import { Link } from 'components/Link';
import { MainHeading } from 'components/MainHeading';
import { Section } from 'components/Section';

import { signInReq } from 'redux/users/utils';

const SignIn = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object().shape({
        email: fieldValidation('Email is required'),
        password: fieldValidation('Password is required')
      })}
      onSubmit={({ email, password }) => {
        dispatch(signInReq('signin', { email, password }));
      }}
    >
      {formikProps => {
        const { initialValues } = formikProps;
        return (
          <Section>
            <MainHeading>Sign In</MainHeading>
            <Form>
              {renderFormFields(Object.keys(initialValues))}
              <Button type='submit'>Login</Button>
              <p>
                Not a member? <Link to='/signup'>Sign up</Link>
              </p>
            </Form>
          </Section>
        );
      }}
    </Formik>
  );
};

export { SignIn };
