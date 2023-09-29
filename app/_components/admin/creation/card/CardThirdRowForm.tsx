import {useCardContext} from '@providers/admin/creation/card/CardContextProvider';
import {useEffect, useState} from 'react';
import FieldRowInputs from '@components/admin/creation/card/FieldRowInputs';
import CharacterRowInputs from '@components/admin/creation/card/CharacterRowInputs';

export default function CardThirdRowForm() {
  const {cardContext} = useCardContext();
  const [isField, setField] = useState<boolean>(true);

  useEffect(() => {
    setField(cardContext.type_id.value === 1);
  }, [cardContext.type_id.value]);

  return <div className={'space-y-6'}>{isField ? <FieldRowInputs /> : <CharacterRowInputs />}</div>;
}
