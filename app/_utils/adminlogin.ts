import {API_DOMAIN} from '@/app/_utils/appConsts';

export default async function adminlogin(email: string, password: string) {
  return await fetch(`${API_DOMAIN}/auth/authenticate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}
