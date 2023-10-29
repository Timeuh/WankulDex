export default function LoadingArtist() {
  return (
    <div
      className={
        'flex h-[30vh] w-[40vw] flex-col items-center space-y-6 rounded-lg border-2 border-dark bg-light p-2 text-center'
      }
    >
      <div className={'h-3/4 w-full animate-pulse rounded-lg bg-dark'}></div>
      <div className={'h-1/4 w-full animate-pulse rounded-full bg-dark'}></div>
    </div>
  );
}
