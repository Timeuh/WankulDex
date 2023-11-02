import {API_DOMAIN} from '@/app/_utils/appGlobals';

export default async function login(email: string, password: string) {
  return await fetch(`${API_DOMAIN}/auth/authenticate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password}),
  }).then((response) => {
    return response.json();
  });
}
