'use server';

import { RegisterParams, UserResponse } from '@/utils/definitions';
import { registerUser } from './api';

export const registerEventUser = async (
  _state: void | undefined,
  formData: FormData
) => {
  const params: RegisterParams = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    birthDate: formData.get('birthDate') as string,
    referralSource: formData.get('referralSource') as string,
    eventId: formData.get('eventId') as string,
  };

  const result = await registerUser(params);
  if (result.success) {
    return '';
  } else {
    return result.data.toString();
  }
};
