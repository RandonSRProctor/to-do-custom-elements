type TempTokenMap = {
  [key: string]: {
    createdTime: number;
    expirationTime: number;
    associatedUserHash: string;
  };
};

const tempTokenMap: TempTokenMap = {
  exampleEntryThisWillBeAUUID: {
    createdTime: 1,
    expirationTime: 1,
    associatedUserHash: 'qwe123wer234',
  },
};

const millisecond = 1;
const second = millisecond * 1000;
const minute = second * 60;
const hour = minute * 60;

export function createNewTempTokenRecord(userHash: string) {
  const millisecondTimestamp = Date.now();

  const randomID = crypto.randomUUID();

  tempTokenMap[randomID] = {
    createdTime: millisecondTimestamp,
    expirationTime: millisecondTimestamp + hour,
    associatedUserHash: userHash,
  };

  return randomID;
}

export function getUserHash(tempUserToken: string) {
  const tokenMapEntry = tempTokenMap[tempUserToken];
  if (!tokenMapEntry) {
    return {
      message: 'Invalid token -- Not found',
    };
  }

  const currentTimestampMS = Date.now();

  if (currentTimestampMS > tokenMapEntry.expirationTime) {
    return {
      message: 'token expired',
    };
  }

  return {
    message: 'success',
    payload: {
      userHash: tokenMapEntry.associatedUserHash,
    },
  };
}
