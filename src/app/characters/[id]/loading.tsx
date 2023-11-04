import LoadingSummaryText from '@components/LoadingSummaryText';
import CharacterSummary from '@components/characters/[id]/CharacterSummary';

export default function Loading() {
  return (
    <div className={'h-[80.3vh]'}>
      <CharacterSummary characterName={<LoadingSummaryText />} totalCards={<LoadingSummaryText />} />
    </div>
  );
}
