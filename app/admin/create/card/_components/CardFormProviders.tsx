'use client';

import CardContextProvider from '@/app/admin/create/card/_providers/CardContextProvider';
import CardForm from '@/app/admin/create/card/_components/CardForm';
import CardDescriptionContextProvider from '@/app/admin/create/card/_providers/CardDescriptionContextProvider';

export default function CardFormProviders() {
  return (
    <CardDescriptionContextProvider>
      <CardContextProvider>
        <CardForm />
      </CardContextProvider>
    </CardDescriptionContextProvider>
  );
}
