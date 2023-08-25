export default function FieldCardsLoading() {
  const fakeCards = [];
  const maxCards = 3;

  for (let i = 0; i < maxCards; i++) {
    fakeCards.push(i);
  }

  return (
    <div className={'flex grid-cols-3 flex-col items-center xl:grid xl:gap-6'}>
      {fakeCards.map((index) => {
        return (
          <div
            key={index}
            className={'my-6 flex h-[32vh] w-[82vw] flex-col items-center bg-dark xl:h-[40vh] xl:w-[25vw]'}
          ></div>
        );
      })}
    </div>
  );
}
