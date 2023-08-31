'use server';

import {cookies} from 'next/headers';
import {AuthMessage} from '@/app/_utils/appTypes';
import {API_DOMAIN} from '@/app/_utils/appConsts';

export default async function isAdminLogged() {
  const authCookie = cookies().get('wankul-admin-token');
  const authHeader = process.env.API_AUTH_HEADER;

  if (!authCookie || !authHeader) {
    return false;
  }

  const authResponse: AuthMessage = await fetch(`${API_DOMAIN}/auth/verify`, {
    method: 'GET',
    headers: {
      [authHeader]: authCookie.value,
    },
  }).then((response) => {
    return response.json();
  });

  return authResponse.code === 200;
}
