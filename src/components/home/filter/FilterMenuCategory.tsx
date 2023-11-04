'use client';

import Image from 'next/image';
import {FilterTitle, GenericFilter} from '@utils/appTypes';
import {useFilterMenuContext} from '@providers/home/filter/FilterMenuProvider';
import {ChangeEvent} from 'react';

interface Props {
  categories: Array<GenericFilter>;
  image: string;
  title: FilterTitle;
  titleColor: string;
}

export default function FilterMenuCategory({categories, image, title, titleColor}: Props) {
  const {filterMenuFilters} = useFilterMenuContext();

  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    switch (title) {
      case FilterTitle.RARITIES:
        filterMenuFilters.rarities[event.target.value] = !filterMenuFilters.rarities[event.target.value];
        break;

      case FilterTitle.ARTISTS:
        filterMenuFilters.artists[event.target.value] = !filterMenuFilters.artists[event.target.value];
        break;

      case FilterTitle.TYPES:
        filterMenuFilters.types[event.target.value] = !filterMenuFilters.types[event.target.value];
        break;

      case FilterTitle.CHARACTERS:
        filterMenuFilters.characters[event.target.value] = !filterMenuFilters.characters[event.target.value];
        break;

      default:
        break;
    }
  };

  return (
    <div className={'m-2 flex h-fit w-5/6 flex-col overflow-hidden border-b-2 border-[#CCCCCCFF] p-2'}>
      <div className={'flex flex-row items-center space-x-2 pb-2'}>
        <Image src={image} alt={'type'} height={0} width={0} sizes={'100vw'} className={'h-auto w-8 xl:w-10'} />
        <h1 className={`text-[1em] xl:text-3xl ${titleColor} w-full max-w-[7rem]`}>{title}</h1>
      </div>
      {categories.map((category: GenericFilter) => {
        return (
          <div key={category.id} className={'flex flex-row-reverse items-center justify-between py-2'}>
            <label htmlFor={category.name} className={'ps-2 text-end text-[1em] xl:text-2xl'}>
              {category.name}
            </label>
            <input
              type='checkbox'
              value={category.id}
              className={'h-6 w-6 rounded-md accent-dark xl:h-8 xl:w-8'}
              onChange={handleCheck}
            />
          </div>
        );
      })}
    </div>
  );
}
