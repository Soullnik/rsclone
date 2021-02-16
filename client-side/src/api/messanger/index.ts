import { eventChannel, END } from 'redux-saga';
import { db, array, collectionId } from '../../configs/configFirebase';

import { capitalize } from '../../utils/helpers';

export async function createChat(userId: any, currentId: any) {
  try {
    const userChats = await (await db.collection('users').doc(userId).get()).data()?.chats;
    const currentUserChats = await (await db.collection('users').doc(currentId).get()).data()
      ?.chats;
    const chatFound = userChats.filter((el: any) => currentUserChats.indexOf(el) > -1);
    if (chatFound.length) {
      return {
        new: false,
        id: chatFound[0],
      };
    } else {
      const chatId = await db.collection('chats').add({
        posts: [],
        members: [currentId, userId],
      });
      return {
        new: true,
        id: chatId.id,
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

export async function getChatsList({ userId }: { userId: string }) {
  return await (await db.collection('users').doc(userId).get()).data()?.chats;
}

export async function getChatsData({ userId }: { userId: string }, chatsList: any) {
  return eventChannel((emitter: any) => {
    db.collection('chats')
      .where(collectionId, 'in', chatsList)
      .onSnapshot(async (chats) => {
        const array = chats.docs.map(async (item) => {
          const lastPostData = item.data()?.posts[item.data()?.posts.length - 1];
          const lastPostUser =
            lastPostData !== undefined
              ? await (await db.collection('users').doc(lastPostData.author).get()).data()
              : null;
          const memberData = await (
            await db
              .collection('users')
              .doc(
                item.data()?.members.find((item: string) => {
                  return item !== userId;
                })
              )
              .get()
          ).data();
          if (lastPostUser) {
            return {
              id: item.id,
              lastPost: {
                ...lastPostData,
                author: `${capitalize(lastPostUser?.profile.firstName)} ${capitalize(
                  lastPostUser?.profile.lastName
                )}`,
                avatar: lastPostUser?.profile.avatar,
              },
              avatar:
                memberData?.profile.avatar ||
                'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              name: `${capitalize(memberData?.profile.firstName)} ${capitalize(
                memberData?.profile.lastName
              )}`,
            };
          } else {
            return {
              id: item.id,
              lastPost: {},
              avatar:
                memberData?.profile.avatar ||
                'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              name: `${capitalize(memberData?.profile.firstName)} ${capitalize(
                memberData?.profile.lastName
              )}`,
            };
          }
        });
        emitter(await Promise.all(array))
      });
    return () => {};
  });
}
