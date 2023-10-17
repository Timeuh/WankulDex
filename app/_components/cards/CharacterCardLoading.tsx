export default function CharacterCardLoading() {
  return (
    <div
      className={`flex h-[50vh] w-[70vw] flex-col items-center justify-between space-y-4 rounded-lg border-2 
        border-dark bg-light p-4 xl:h-[60vh] xl:w-[20vw]`}
    >
      <div className={'h-5/6 w-full animate-pulse rounded-lg bg-dark'}></div>
      <div className={'h-1/6 w-full animate-pulse rounded-lg bg-dark'}></div>
    </div>
  );
}
