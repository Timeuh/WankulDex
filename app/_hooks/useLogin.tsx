import {useQuery} from 'react-query';
import {API_DOMAIN} from '@/app/_utils/appGlobals';

const login = async (email: string, password: string) => {
  return await fetch(`${API_DOMAIN}/auth/authenticate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password}),
  }).then((response) => {
    return response.json();
  });
};

export default function useLogin(email: string, password: string) {
  return useQuery(
    ['login', email, password],
    () => {
      return login(email, password);
    },
    {
      enabled: false,
    },
  );
}
