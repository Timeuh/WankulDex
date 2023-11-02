export default function LoadingText() {
  return (
    <div className={'h-8 w-full overflow-hidden rounded-full border-2 border-dark xl:h-10'}>
      <div className={' h-full w-full animate-pulse bg-dark'}></div>
    </div>
  );
}
