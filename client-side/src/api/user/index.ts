import { db, storage, array } from '../../configs/configFirebase';

export async function getUserData(id: string) {
  const userData = await db.collection('users').doc(id).get();
  return userData.data();
}

export async function getStorageData(id: string, path: string) {
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

export async function getFriendsData(friendsList: any) {
  if (!friendsList) return friendsList;
  const friendsPromises = friendsList.map(async (item: any) => {
    const friend = await db.collection('users').doc(item).get();
    const friendData = await friend.data();
    return {
      id: item,
      avatar: friendData?.profile.avatar,
      firstName: friendData?.profile.firstName,
    };
  });
  return await Promise.all(friendsPromises);
}

export async function postFriendData(currentId: any, userId: any) {
  db.collection('users')
    .doc(currentId)
    .update({
      friends: array.arrayUnion(userId),
    });
  db.collection('users')
    .doc(userId)
    .update({
      friends: array.arrayUnion(currentId),
    });
}

export async function postPostsData(value: any, id: any) {
  db.collection('users')
    .doc(id)
    .update({
      posts: array.arrayUnion(value),
    });
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

export async function createChat(userId: any, currentId: any) {
  try {
    const creator = await db.collection('chats').where('creator', 'in', [userId, currentId]).get();
    const member = await db.collection('chats').where('member', 'in', [userId, currentId]).get();
    let chatId = '';
    creator.forEach((doc1) => {
      const creatorUser = doc1.data().creator;
      const memberUser = doc1.data().member;
      member.forEach((doc2) => {
        if (doc2.data().creator === creatorUser && doc2.data().member === memberUser) {
          chatId = doc2.id;
        }
      });
    });

    if (chatId) {
      return {
        new: false,
        id: chatId,
      };
    } else {
      const chatId = await db.collection('chats').add({
        posts: null,
        creator: userId,
        members: { currentId, userId },
      });
      return {
        new: true,
        id: chatId,
      };
    }
  } catch (error) {
    console.log(error);
  }
}

export async function addChatForUser(chatId: any, currentId: any, userId: any) {
  db.collection('users')
    .doc(currentId)
    .update({
      chats: array.arrayUnion(chatId),
    });
  db.collection('users')
    .doc(userId)
    .update({
      chats: array.arrayUnion(chatId),
    });
}

export async function getChatsData({ id }: any) {
  console.log(id);
  const doc = await db.collection('chats')
    .where('member', 'array-contains', id)
    .onSnapshot((querySnapshot) => {
      var chats: any = [];
      querySnapshot.forEach((doc) => {
        chats.push(doc.data());
      });
      console.log(chats);
    });
}
