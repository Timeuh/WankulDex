'use client';

import CardFirstRowForm from '@components/admin/creation/card/CardFirstRowForm';
import CardSecondRowForm from '@components/admin/creation/card/CardSecondRowForm';
import CardDescriptionContextProvider from '@providers/admin/creation/card/CardDescriptionContextProvider';
import CardContextProvider from '@providers/admin/creation/card/CardContextProvider';

export default function CardForm() {
  return (
    <form action='noredirect' className={'space-y-6'}>
      <CardDescriptionContextProvider>
        <CardContextProvider>
          <CardFirstRowForm />
          <CardSecondRowForm />
        </CardContextProvider>
      </CardDescriptionContextProvider>
    </form>
  );
}
