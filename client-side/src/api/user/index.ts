import { db, storage } from '../../configs/configFirebase';

// export async function confirmedSignIn(action: any) {
//   const response = await auth.signInWithEmailAndPassword(action.email, action.password);
//   auth.onAuthStateChanged(() => {});
//   return response.user?.uid;
// }

export async function fetchUserData(id: string) {
  const profileData = await db.collection('users').doc(id).get();
  return profileData.data();
}

export async function fetchStorageData(id: string, path: string) {
  const firstPage = await storage.child(`${path}/${id}`).list({ maxResults: 10 });
  let promiseUrl = [];
  if (firstPage.nextPageToken) {
    const secondPage = await storage.list({
      maxResults: 10,
      pageToken: firstPage.nextPageToken,
    });
    promiseUrl = await secondPage.items.map((promise) => promise.getDownloadURL());
  } else {
    promiseUrl = await firstPage.items.map((promise) => promise.getDownloadURL());
  }

  const result = await Promise.all(promiseUrl)

  return result;
}
