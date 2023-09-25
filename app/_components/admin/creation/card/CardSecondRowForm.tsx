'use client';

import FormSelect from '@components/form/FormSelect';
import useArtistSelect from '@hooks/admin/create/cards/useArtistSelect';

export default function CardSecondRowForm() {
  const {artistSelectOptions} = useArtistSelect();

  return (
    <div className={'space-y-6'}>
      <FormSelect image={'/img/admin/create/cards/pen-light.png'} text={'Artiste'} options={artistSelectOptions} />
    </div>
  );
}
