export default function FieldCardLoading() {
  return (
    <div
      className={`flex h-[35vh] w-[84vw] flex-col items-center justify-between space-y-4 rounded-lg border-2 
        border-dark bg-light p-4 xl:h-[45vh] xl:w-[30vw]`}
    >
      <div className={'h-3/4 w-full animate-pulse rounded-lg bg-dark'}></div>
      <div className={'h-1/4 w-full animate-pulse rounded-lg bg-dark'}></div>
    </div>
  );
}
