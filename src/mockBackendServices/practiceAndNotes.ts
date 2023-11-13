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

/**
 * LESSONS:
 *
 * Table:
 * - A table is the fundamnetal data structure to RTBs.
 * - Consider how Javascript has common data sctructures like arrays and objects.
 *   In JS, arrays and objects have rules that help you manipulate and organize data.
 *   For example, Arrays are organized by index, and always keep their order, this
 *   makes them great for lists.  Objects, however are organized by key, so they are
 *   useful for organizing items with unique names that you want to access quickly by
 *   name.
 * - In RDBs, there is a data sctrucure called a table, and it has certain qualities
 *   that help you organize and access your data in the database!
 * - When vizualized, a table often looks like a Microsoft Excel Spreadsheet.
 *   Each row is called a 'record'.  Each instance is not named.  (records are like entries in an array in JS)
 *   Each column is called an 'attribute' or a 'field'.     (like properties of an object in JS)
 *   The closest way to consider a table in JS would be to consider an Array of Objects
 * - The only exception to the analogy of "an array of objects" is that
 *   in JS arrays hold their order and are indexed accordingly.  In RTBs, tables
 *   do no retain their order, they are simply an unordered group of commonly
 *   shaped data.
 *   The good news is that the lack of defined structure opens the door to
 *   flexibility.  You have the ability to decide how the items are accessed
 *   by means of a 'Primary Key'.
 *   If you choose to use a 'Primary Key', it will be the way that you uniquely
 *   identify each record in the table.  (This is a lot like keys in a JS object)
 * - If you choose to use a Primary Key, each record must have an attribute that
 *   is the datatype of the primary key, and each primary key must be unique.  (Also
 *   like keys in a JS object)
 */
