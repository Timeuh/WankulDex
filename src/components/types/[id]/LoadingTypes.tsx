import TypeSummary from '@components/types/[id]/TypeSummary';
import LoadingSummaryText from '@components/LoadingSummaryText';

export default function LoadingTypes() {
  return (
    <div className={'h-[80.3vh]'}>
      <TypeSummary typeName={<LoadingSummaryText />} totalCards={<LoadingSummaryText />} />
    </div>
  );
}
