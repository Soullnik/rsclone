import React, { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Language from '../../components/language';

import './style.scss';

const LoginForm = lazy(() => import('../../components/loginForm'));
const SignupForm = lazy(() => import('../../components/signupForm'));
const ForgotForm = lazy(() => import('../../components/forgotForm'));

type Props = {};

const Auth: React.FC<Props> = () => {
  return (
    <div className="auth-form-container">
      <Language className='auth-form-language'/>
      <Switch>
        <Route path="/auth/login" component={LoginForm} />
        <Route path="/auth/signup" component={SignupForm} />
        <Route path="/auth/forgot" component={ForgotForm} />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
};

export default Auth;
