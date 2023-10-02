'use client';

import CardContextProvider from '@providers/admin/creation/card/CardContextProvider';
import CardForm from '@/app/admin/create/card/_components/CardForm';
import CardDescriptionContextProvider from '@providers/admin/creation/card/CardDescriptionContextProvider';

export default function CardFormProviders() {
  return (
    <CardDescriptionContextProvider>
      <CardContextProvider>
        <CardForm />
      </CardContextProvider>
    </CardDescriptionContextProvider>
  );
}
