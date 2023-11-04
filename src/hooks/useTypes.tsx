import {useQuery} from '@tanstack/react-query';
import {API_BASE_URL} from '@utils/appGlobals';
import {Type, Types} from '@utils/appTypes';
import typeSchema from '@/zod/TypeSchema';

export const getTypes = async () => {
  return await fetch(`${API_BASE_URL}/type`)
    .then((response) => {
      return response.json();
    })
    .then((types: Types) => {
      const allTypes: Array<Type> = [];

      types.types.forEach((type: Type) => {
        if (typeSchema.safeParse(type).success) {
          allTypes.push(type);
        }
      });

      return allTypes;
    });
};

export default function useTypes() {
  return useQuery({
    queryKey: ['types'],
    queryFn: () => {
      return getTypes();
    },
  });
}
