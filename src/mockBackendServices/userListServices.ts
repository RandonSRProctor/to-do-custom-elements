import { getUserHash } from './authenticationService/tempTokenMap';

type UserList = {
  name: string;
  id: number;
  listItems: string[];
};

type UserLists = {
  [key: string]: UserList[];
};

const userLists: UserLists = {
  qwe123wer234: [
    {
      name: "Randy's To-Do",
      id: 1,
      listItems: ['Hang out with Nigel', 'Go hike with Aaron'],
    },
    {
      name: "Randy's To-Don't",
      id: 2,
      listItems: ['Give up', 'Stop believing in yourself'],
    },
  ],
  poi098oiu987: [
    {
      name: "Khalil's To-Do",
      id: 1,
      listItems: ['Practice React with Randy', 'Weld some stuff'],
    },
    {
      name: "Khalil's To-Do",
      id: 2,
      listItems: ['Not Much', 'Paint something?'],
    },
  ],
};

export async function getUserList(tempUserTokern: string) {
  const response = getUserHash(tempUserTokern);
  if (response.message !== 'success') {
    return {
      message: response.message,
    };
  }

  if (response.payload?.userHash) {
    return {
      message: 'success',
      payload: {
        userList: userLists[response.payload.userHash],
      },
    };
  }
}
