/**
 * NOTE: Some of the names and organization of this object may seem strange.
 *
 * I am using this mock DB as an entry-point to teaching relational database (RDB)
 * concepts to a programmer with only JS training.
 *
 */

// TAXONOMIC / ABSTRACT / FIGURATIVE

type Record = {};

type TableUnkeyed = Record[];
type TableKeyed = {
  [key: string]: Record;
};

type DataBase = {
  tables: {
    [key: string]: TableUnkeyed | TableKeyed;
  };
};

// INSTANCE / LITERAL

type User = {
  firstName: string;
  lastName: string;
  password: string;
};

type MockDB = {
  tables: {
    users: {
      [key: string]: User;
    };
  };
};

const mockDB: DataBase & MockDB = {
  tables: {
    users: {
      randyP: {
        firstName: 'Randy',
        lastName: 'Proctor',
        password: '123',
      },
      khalilC: {
        firstName: 'Khalil',
        lastName: 'Crenshaw',
        password: '123',
      },
    },
  },
};

export async function authenticateUser(userName: string, password: string) {
  if (mockDB.tables.users[userName].password === password) {
    const user = mockDB.tables.users[userName];
    return {
      result: 'success',
      payload: {
        firstName: user.firstName,
        lastName: user.lastName,
      },
    };
  }
  return {
    result: 'failure',
    payload: undefined,
  };
}
