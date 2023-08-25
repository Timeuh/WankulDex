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
            className={'my-6 flex h-[65vh] w-[82vw] flex-col items-center bg-dark xl:h-[60vh] xl:w-[20vw]'}
          ></div>
        );
      })}
    </div>
  );
}
