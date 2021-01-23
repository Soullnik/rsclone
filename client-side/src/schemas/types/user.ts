export type TypeUser = {
  profile: TypeProfile;
  chats: Array<TypeChat>
}

export type TypeProfile = {
  firstName: string,
  lastName: string,
  age: string
}

export type TypeChat = {
  id: string,
  name: string,
  message: Array<TypeMessage>
}

export type TypeMessage = {
  id: string,
  text: string,
  time: Date,
  userId: string,
}
