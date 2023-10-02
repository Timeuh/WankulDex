import {useEffect, useState} from 'react';
import {useCardContext} from '@providers/CardContextProvider';
import FieldRowInputs from '@components/FieldRowInputs';
import CharacterRowInputs from '@components/CharacterRowInputs';

export default function CardThirdRowForm() {
  const {cardContext} = useCardContext();
  const [isField, setField] = useState<boolean>(true);

  useEffect(() => {
    setField(cardContext.type_id.value === 1);
  }, [cardContext.type_id.value]);

  return <div className={'space-y-6 xl:space-y-12'}>{isField ? <FieldRowInputs /> : <CharacterRowInputs />}</div>;
}
