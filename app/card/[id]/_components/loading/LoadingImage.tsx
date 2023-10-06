export default function LoadingImage() {
  return (
    <div className={'h-8 w-8 overflow-hidden rounded-lg border-2 border-dark'}>
      <div className={' h-full w-full animate-pulse bg-dark'}></div>
    </div>
  );
}
