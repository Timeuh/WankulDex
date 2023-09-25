'use client';

import CardFirstRowForm from '@components/admin/creation/card/CardFirstRowForm';
import CardSecondRowForm from '@components/admin/creation/card/CardSecondRowForm';

export default function CardForm() {
  return (
    <form action='noredirect' className={'space-y-6'}>
      <CardFirstRowForm />
      <CardSecondRowForm />
    </form>
  );
}
