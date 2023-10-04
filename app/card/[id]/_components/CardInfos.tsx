import {useCardDisplayContext} from '@providers/CardDisplayProvider';

export default function CardInfos() {
  const {card, isFetching} = useCardDisplayContext();

  return <div>{isFetching ? <h1>Chargement...</h1> : <h1>carte {card.card.id}</h1>}</div>;
}
