import {useCardContext} from '@/app/admin/create/card/_providers/CardContextProvider';
import {useEffect, useState} from 'react';
import FieldRowInputs from '@/app/admin/create/card/_components/FieldRowInputs';
import CharacterRowInputs from '@/app/admin/create/card/_components/CharacterRowInputs';

export default function CardThirdRowForm() {
  const {cardContext} = useCardContext();
  const [isField, setField] = useState<boolean>(true);

  useEffect(() => {
    setField(cardContext.type_id.value === 1);
  }, [cardContext.type_id.value]);

  return <div className={'space-y-6 xl:space-y-12'}>{isField ? <FieldRowInputs /> : <CharacterRowInputs />}</div>;
}
