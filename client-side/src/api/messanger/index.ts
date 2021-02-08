import { db, array } from '../../configs/configFirebase';

export async function createChat(userId: any, currentId: any) {
  try {
    const creator = await db.collection('chats').where('creator', 'in', [userId, currentId]).get();
    const member = await db.collection('chats').where('member', 'in', [userId, currentId]).get();
    let chatId = null;
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
        posts: [],
        creator: userId,
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

export async function getChatsData({ id }: any) {
  let chats: any;
  db.collection('chats')
    .where('members', 'array-contains', id)
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach(async (doc) => {
        const memberUser = doc
          .data()
          .members.filter((item: string) => item !== id)
          .join();
        const memberData = await (await db.collection('users').doc(memberUser).get()).data();
        if (memberData) {
          await function addForChats() {
            chats = [];
            chats.push({
              id: doc.id,
              lastPost: doc.data().posts || [],
              avatar:
                memberData.profile.avatar ||
                'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              name: `${memberData.profile.firstName} ${memberData.profile.lastName}`,
            });
          };
        }
      });
    });

  if (chats) {
    return chats;
  }
}
