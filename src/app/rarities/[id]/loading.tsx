import LoadingSummaryText from '@components/LoadingSummaryText';
import RaritySummary from '@components/rarities/[id]/RaritySummary';

export default function Loading() {
  return (
    <div className={'h-[80.3vh]'}>
      <RaritySummary rarityName={<LoadingSummaryText />} totalCards={<LoadingSummaryText />} />
    </div>
  );
}
