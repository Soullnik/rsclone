import { db, storage, array } from '../../configs/configFirebase';

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
    promiseUrl = await secondPage.items.map(async (promise) => {
      return {
        name: promise.name,
        url: await promise.getDownloadURL(),
      };
    });
  } else {
    promiseUrl = await firstPage.items.map(async (promise) => {
      return {
        name: promise.name,
        url: await promise.getDownloadURL(),
      };
    });
  }

  const result = await Promise.all(promiseUrl);

  const fileList = result.map((item: any, index: number) => {
    return {
      showRemoveIcon: false,
      uid: `${index}`,
      name: `${item.name}`,
      status: 'done',
      url: `${item.url}`,
    };
  });

  return fileList;
}

export async function fetchFriendsData(id: string) {
  const profileData = await db.collection('users').doc(id).get();
  const friendsList = profileData.data()?.friends;
  const friendsPromises = friendsList.map(async (item: any) => {
    const friend = await db.collection('users').doc(item).get();
    const friendData = await friend.data();
    return {
      id: item,
      avatar: friendData?.profile.avatar,
      firstName: friendData?.profile.firstName,
    };
  });

  const result = await Promise.all(friendsPromises);

  return result;
}

export async function fetchPostsData(id: string) {
  const profileData = await db.collection('users').doc(id).get();
  const postList = profileData.data()?.posts;
  const postsPromises = postList.map(async (item: any) => {
    const post = await db.collection('users').doc(item).get();
    const postsData = await post.data();
    return {
      text: item,
      avatar: postsData?.profile.avatar,
      firstName: postsData?.profile.firstName,
    };
  });

  const result = await Promise.all(postsPromises);

  return result;
}

export async function uploadStorageData(file: any, id: string, path: string) {
  const ref = await storage.child(`${path}/${id}/${file.name}`).put(file);
}

export async function deleteStorageData(name: string, id: string, path: string) {
  const ref = await storage.child(`${path}/${id}/${name}`).delete();
}

export async function postAvatarUrl(src: any, id: any) {
  db.collection('users').doc(id).update({
    'profile.avatar': src,
  });
}

export async function postProfilerData(value: any, type: any, id: any) {
  db.collection('users')
    .doc(id)
    .update({
      [`profile.${type}`]: value,
    });
}

export async function postFriendData(value: any, id: any) {
  db.collection('users')
    .doc(id)
    .update({
      friends: array.arrayUnion(value),
    });
}

export async function postPostsData(value: any, id: any) {
  db.collection('users')
    .doc(id)
    .update({
      posts: array.arrayUnion(value)
    });
}

export async function searchPeople(value: any) {
  let userList: any = [];
  if (value === 'all') {
    const users = await db.collection('users').get();
    users.forEach(function (doc) {
      const data = doc.data();
      userList.push({
        id: doc.id,
        firstName: data.profile.firstName,
        lastName: data.profile.lastName,
        avatar: data.profile.avatar,
      });
    });
  } else {
    const users = await db.collection('users').where('profile.firstName', '==', value).get();
    users.forEach(function (doc) {
      const data = doc.data();
      userList.push({
        id: doc.id,
        firstName: data.profile.firstName,
        lastName: data.profile.lastName,
        avatar: data.profile.avatar,
      });
    });
  }

  return userList;
}
