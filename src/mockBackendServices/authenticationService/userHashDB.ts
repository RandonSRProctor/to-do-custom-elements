type UserHashDB = {
  [key: string]: string;
};

const userHashDB: UserHashDB = {
  randyP: 'qwe123wer234',
  khalilK: 'poi098oiu987',
};

export function userHashService(userName: string) {
  switch (true) {
    case userHashDB.hasOwnProperty(userName):
      return {
        message: 'user found',
        payload: {
          userHash: userHashDB[userName],
        },
      };
    case !userHashDB.hasOwnProperty(userName):
      return {
        message: 'user not found',
        payload: undefined,
      };
    default:
      return {
        message: 'service error',
        payload: undefined,
      };
  }
}
