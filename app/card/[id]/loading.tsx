import LoadingCard from '@components/LoadingCard';

export default function CardLoading() {
  return (
    <div className={'flex h-screen flex-col items-center space-y-6'}>
      <LoadingCard />
    </div>
  );
}
