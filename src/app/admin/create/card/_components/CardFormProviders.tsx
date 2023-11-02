'use client';

import CardDescriptionContextProvider from '@providers/CardDescriptionContextProvider';
import CardContextProvider from '@providers/CardContextProvider';
import CardForm from '@components/CardForm';

export default function CardFormProviders() {
  return (
    <CardDescriptionContextProvider>
      <CardContextProvider>
        <CardForm />
      </CardContextProvider>
    </CardDescriptionContextProvider>
  );
}
