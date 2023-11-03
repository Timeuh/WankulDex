import LoadingSummaryText from '@components/LoadingSummaryText';
import ArtistSummary from '@components/artists/[id]/ArtistSummary';

export default function Loading() {
  return (
    <div className={'h-[80.3vh]'}>
      <ArtistSummary
        artistName={<LoadingSummaryText />}
        totalCards={<LoadingSummaryText />}
        fieldCards={<LoadingSummaryText />}
        characterCards={<LoadingSummaryText />}
      />
    </div>
  );
}
