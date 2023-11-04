import NavbarMenu from '@components/navbar/NavbarMenu';

export default function Navbar() {
  return (
    <nav id={'navbar'} className={'fixed z-30 h-16 w-full'}>
      <div className={'flex h-16 w-full flex-row items-center justify-end bg-light/30 px-6 backdrop-blur-sm'}>
        {/* <BaseContainer interaction={'hover'}>*/}
        {/*  <button className={'h-auto w-12 p-1'}>*/}
        {/*    <Image*/}
        {/*      src={'/img/navbar/moon.png'}*/}
        {/*      alt={'dark mode'}*/}
        {/*      width={0}*/}
        {/*      height={0}*/}
        {/*      sizes={'100vw'}*/}
        {/*      className={'h-full w-full'}*/}
        {/*      priority*/}
        {/*    />*/}
        {/*  </button>*/}
        {/* </BaseContainer>*/}
        <NavbarMenu />
      </div>
    </nav>
  );
}
