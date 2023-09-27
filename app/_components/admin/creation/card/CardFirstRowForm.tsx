'use client';

import {ChangeEvent, useState} from 'react';
import {CardFirstRowNames, InputField} from '@/app/_utils/appTypes';
import FormInput from '@components/form/FormInput';

export default function CardFirstRowForm() {
  const [id, setId] = useState<InputField>({
    value: 1,
    error: '',
  });
  const [name, setName] = useState<InputField>({
    value: '',
    error: '',
  });
  const [collection, setCollection] = useState<InputField>({
    value: '',
    error: '',
  });
  const [imageName, setImageName] = useState<InputField>({
    value: '',
    error: '',
  });

  const changeValue = (event: ChangeEvent<HTMLInputElement>, valueType: CardFirstRowNames) => {
    const newValue = event.target.value;

    switch (valueType) {
      case 'ID':
        if (isNaN(parseInt(newValue))) {
          return;
        }

        const parsedValue = parseInt(event.target.value);
        setId({...id, value: parsedValue < 1 ? 1 : parsedValue});
        return;

      case 'Name':
        setName({...name, value: newValue});
        return;

      case 'Collection':
        setCollection({...collection, value: newValue});
        return;

      case 'ImageName':
        setImageName({...imageName, value: newValue});
        return;

      default:
        return;
    }
  };

  return (
    <div className={'space-y-6'}>
      <FormInput
        text={'ID'}
        error={''}
        value={id.value}
        type={'number'}
        image={'/img/admin/create/cards/hashtag-light.png'}
        valueType={'number'}
        changeValue={(event) => {
          changeValue(event, 'ID');
        }}
      />
      <FormInput
        text={'Nom'}
        error={''}
        value={name.value}
        type={'text'}
        image={'/img/admin/create/cards/name-light.png'}
        valueType={'string'}
        changeValue={(event) => {
          changeValue(event, 'Name');
        }}
      />
      <FormInput
        text={'Collection'}
        error={''}
        value={collection.value}
        type={'text'}
        image={'/img/admin/create/cards/collection-light.png'}
        valueType={'string'}
        changeValue={(event) => {
          changeValue(event, 'Collection');
        }}
      />
      <FormInput
        text={'Nom de l’image'}
        error={''}
        value={imageName.value}
        type={'text'}
        image={'/img/admin/create/cards/picture-light.png'}
        valueType={'string'}
        changeValue={(event) => {
          changeValue(event, 'ImageName');
        }}
      />
    </div>
  );
}
