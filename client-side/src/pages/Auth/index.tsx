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
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/forgot" component={ForgotForm} />
        <Redirect to="/login" />
      </Switch>
    </div>
  );
};

export default Auth;
