'use server';

import {cookies} from 'next/headers';
import {API_DOMAIN} from '@/app/_utils/appConsts';

export default async function createCard(cardParameters: Object) {
  const authCookie = cookies().get('wankul-admin-token');
  const authHeader = process.env.API_AUTH_HEADER;

  if (!authCookie || !authHeader) {
    return false;
  }

  return await fetch(`${API_DOMAIN}/cards/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      [authHeader]: authCookie.value,
    },
    body: JSON.stringify(cardParameters),
  }).then((response) => {
    return response.json();
  });
}
