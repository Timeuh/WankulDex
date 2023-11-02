'use client';

import CardDescriptionContextProvider from '@providers/admin/create/card/CardDescriptionContextProvider';
import CardContextProvider from '@providers/admin/create/card/CardContextProvider';
import CardForm from '@components/admin/create/card/CardForm';

export default function CardFormProviders() {
  return (
    <CardDescriptionContextProvider>
      <CardContextProvider>
        <CardForm />
      </CardContextProvider>
    </CardDescriptionContextProvider>
  );
}
