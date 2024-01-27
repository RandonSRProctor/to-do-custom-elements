type UserList = {
  name: string;
  id: number;
  listItems: string[];
};

type UserLists = {
  [key: string]: UserList[];
};

const userLists: UserLists = {
  randyP: [
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
  khalilC: [
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
