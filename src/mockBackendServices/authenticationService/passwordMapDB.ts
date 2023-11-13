type PasswordMapDB = {
  [key: string]: string;
};

const passwordMapDB: PasswordMapDB = {
  qwe123wer234: 'cincy1',
  poi098oiu987: 'hotlanta1',
};

export function passwordHashService(
  userHash: string,
  possiblePassword: string
) {
  if (passwordMapDB[userHash] === possiblePassword) {
    return {
      message: 'authenticated',
    };
  }
  return {
    message: 'user not found',
  };
}
