import { userType, authType } from '../../actionsTypes';
import { Types } from '../..//../schemas';

const {} = userType;

export function signUp(values: Types.TypeValue) {
  return {
    // type: SIGNUP_USER,
    payload: values,
  };
}

export const signInComplete = (id: string) => {
  return {
    // type: SIGNIN_COMPLETE,
    payload: id,
  };
};

export const signOutComplete = () => {
  return {
    // type: SIGNOUT_COMPLETE,
  };
};
