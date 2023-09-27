'use client';

import CardFirstRowForm from '@components/admin/creation/card/CardFirstRowForm';
import CardSecondRowForm from '@components/admin/creation/card/CardSecondRowForm';
import CardDescriptionContextProvider from '@providers/admin/creation/card/CardDescriptionContextProvider';

export default function CardForm() {
  return (
    <form action='noredirect' className={'space-y-6'}>
      <CardDescriptionContextProvider>
        <CardFirstRowForm />
        <CardSecondRowForm />
      </CardDescriptionContextProvider>
    </form>
  );
}
