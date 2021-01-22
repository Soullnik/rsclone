import { db } from '../configs/configFirebase';


export async function getUsers() {
  try {
    const response = db.collection('users');
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