import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import './style.scss';

const LoginForm = lazy(() => import('../../components/loginForm'));
const SignupForm = lazy(() => import('../../components/signupForm'));
const ForgotForm = lazy(() => import('../../components/forgotForm'));

type Props = {};

const Auth: React.FC<Props> = () => {
  return (
    <div className="auth-form-container">
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/forgot" component={ForgotForm} />
        <Route path="/" component={LoginForm} />
      </Switch>
    </div>
  );
};

export default Auth;
