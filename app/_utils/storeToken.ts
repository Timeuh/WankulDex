'use server';
import {cookies} from 'next/headers';

export default async function storeToken(token: string) {
  await cookies().set('wankul-admin-token', token);
}
