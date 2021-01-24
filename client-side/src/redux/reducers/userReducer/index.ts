import { userType } from '../../actionsTypes';

const initialState = {
  profile: null,
  chats: null,
};

// const { SHOW_ALERT, HIDE_ALERT, SHOW_LOADING, HIDE_LOADING } = userType;

// export const appReducer = (state = initialState, actions: { type: string; payload: any }) => {
//   switch (actions.type) {
//     case SHOW_LOADING:
//       return { ...state, chek: true };
//     case HIDE_LOADING:
//       return { ...state, chek: false };
//     case SHOW_ALERT:
//       return { ...state, alert: actions.payload };
//     case HIDE_ALERT:
//       return { ...state, alert: null };
//     default:
//       return state;
//   }