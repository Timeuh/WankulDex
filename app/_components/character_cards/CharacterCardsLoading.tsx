export default function CharacterCardsLoading() {
  const fakeCards = [];
  const maxCards = 4;

  for (let i = 0; i < maxCards; i++) {
    fakeCards.push(i);
  }

  return (
    <div className={'flex grid-cols-4 flex-col items-center xl:grid xl:gap-8'}>
      {fakeCards.map((index) => {
        return (
          <div
            key={index}
            className={
              'my-6 flex h-[65vh] w-[82vw] flex-col items-center rounded-lg bg-light p-1 xl:h-[60vh] xl:w-[20vw]'
            }
          >
            <div className={'flex h-full w-full animate-pulse flex-col items-center space-y-4 p-2'}>
              <div className={'h-5/6 w-full rounded-lg bg-gray-300 py-2'}></div>
              <div className={'h-1/6 w-full rounded-lg bg-gray-300 py-2'}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
