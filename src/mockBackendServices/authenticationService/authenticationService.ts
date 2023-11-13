import { passwordHashService } from './passwordMapDB';
import { createNewTempTokenRecord } from './tempTokenMap';
import { userHashService } from './userHashDB';

export async function authenticateService(
  userName: string,
  possiblePassword: string
) {
  const hashResult = await userHashService(userName);

  if (hashResult.message !== 'user found') {
    console.log('Mock analytic: failed auth attempt, invalid username');
    return {
      result: 'fail',
      message: 'User not found',
    };
  }

  const userHash = hashResult?.payload?.userHash;

  if (!userHash) {
    return {
      message: 'service error -- user found, but hash undefined',
    };
  }

  const passwordHashResult = await passwordHashService(
    userHash,
    possiblePassword
  );

  if (passwordHashResult.message !== 'authenticated') {
    console.log('Mock analytic: failed auth attempt, invalid password');
    return {
      message: 'Invalid Password',
    };
  }

  if (
    hashResult.message === 'user found' &&
    passwordHashResult.message === 'authenticated'
  ) {
    const tempToken = createNewTempTokenRecord(userHash);
    return {
      message: 'success',
      payload: {
        temporaryUserToken: tempToken,
      },
    };
  }

  return {
    message:
      'Uknown failure -- all assumed possible codepaths in authenticationService.ts have failed',
  };
}
