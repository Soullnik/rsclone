import { db, auth } from '../configs/configFirebase';



export async function getChats() {
  try {
    const response = db.collection('chats');
    const data = await response.get();

    const result = data.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));

    return result
  } catch (error) {
    console.log('Error getting documents: ', error);
  }
} 

export async function loginUser(email: string, password: string) {
  try {
    const response = auth.signInWithEmailAndPassword(email, password)
    const data = await response;
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
      } else {
        // No user is signed in.
      }
    });
    return data.user?.uid
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
  }
}

export async function getUserData(userId: string | undefined) {
  try {
    const response = db.collection('users').doc(userId);
    const data = await response.get();

    const result = data.data()

    return result
  } catch (error) {
    console.log('Error getting documents: ', error);
  }  
}

export async function logOut() {
  try {
    auth.signOut()
  } catch(error) {
    console.log(error)
  }
}