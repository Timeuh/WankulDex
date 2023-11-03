import LoadingSummaryText from '@components/LoadingSummaryText';
import ArtistSummary from '@components/artists/[id]/ArtistSummary';

export default function Loading() {
  return (
    <ArtistSummary
      artistName={<LoadingSummaryText />}
      totalCards={<LoadingSummaryText />}
      fieldCards={<LoadingSummaryText />}
      characterCards={<LoadingSummaryText />}
    />
  );
}
