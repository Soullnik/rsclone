import * as api from '../firebase';

export const reducer = (state: { users: Array<IUser> }, action: { type: string; payload: any }) => {
  switch (action.type) {
    case 'GET_USERS':
      console.log(state.users)
      return {
        ...state,
        users: state.users.concat(action.payload),
      };

    default:
      console.log('default')
      return state;
  }
};

export const initialstate: { users: Array<IUser> } = {
  users: [],
};

function getUsers(dispatch: any) {
  return api.getUsers().then((users) =>
    dispatch({
      type: 'GET_USERS',
      payload: users
    })
  );
}

export const actions = {
  getUsers,
};
