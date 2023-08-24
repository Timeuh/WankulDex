import {useEffect, useState} from 'react';
import {Type, Types} from '@/app/_utils/appTypes';
import {API_BASE_URL} from '@/app/_utils/appConsts';
import TypeSchema from '@/app/_zod/TypeSchema';

export default function useTypes() {
  const [types, setTypes] = useState<Array<Type>>([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/type`)
      .then((response) => {
        return response.json();
      })
      .then((typesData: Types) => {
        typesData.types.forEach((type: Type) => {
          const parseTest = TypeSchema.safeParse(type);
          if (parseTest.success) {
            setTypes((previous) => {
              return [...previous, type];
            });
          }
        });
      });
  }, []);

  return {types};
}
