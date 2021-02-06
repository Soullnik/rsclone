import { auth, db } from '../../configs/configFirebase';

type TypeSignUp = {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export async function confirmedSignIn(action: any) {
  const response = await auth.signInWithEmailAndPassword(action.email, action.password);
  auth.onAuthStateChanged((user) => {
    if (user) {
      localStorage.setItem('userId', `${user.uid}`);
    }
  });
  return response.user?.uid;
}

export async function confirmedSignUp(action: TypeSignUp) {
  const response = await auth.createUserWithEmailAndPassword(action.email, action.password);
  return response.user?.uid;
}

export async function resetPassword(action: TypeSignUp) {
  auth.sendPasswordResetEmail(action.email);
}

export async function confirmedSignOut() {
  auth.signOut();
}

export async function authDataAdd(id: string, action: TypeSignUp) {
  db.collection('users')
    .doc(id)
    .set({
      profile: {
        firstName: action.firstName.toLowerCase(),
        lastName: action.lastName.toLowerCase(),
        age: null,
        gender: action.gender,
        city: null,
        about: null,
        avatar: null,
      },
      friends: [],
      posts: [],
      chats: [],
      images: [],
    });
}
