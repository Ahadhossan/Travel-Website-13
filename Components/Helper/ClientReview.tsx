import { StarIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import React from 'react'

interface Props {
  image: string;
  name: string;
}

const ClientReview = ({image, name}: Props) => {
  return (
    <div className="p-4">
      <div>
        <Image
          src={`${image}`}
          alt={name}
          width={80}
          height={80}
          className="rounded-full mx-auto"
        />
      </div>
      <p className="mt-[2rem] text-center text-[16px] text-black opacity-60">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
        eligendi fuga numquam, beatae soluta suscipit est voluptas nam!
      </p>
      <div className="mt-[2rem]">
        <div className="flex w-[100%] text-center justify-center items-center space-x-1">
          <StarIcon className="text-orange-600 w-[1rem] h-[1rem]" />
          <StarIcon className="text-orange-600 w-[1rem] h-[1rem]" />
          <StarIcon className="text-orange-600 w-[1rem] h-[1rem]" />
          <StarIcon className="text-orange-600 w-[1rem] h-[1rem]" />
        </div>
        <h1 className="mt-[0.5rem] text-[18px] text-black text-center font-bold mb-[0.3rem]">
          {name}
        </h1>
        <p className="text-center text-black text-[15px] opacity-70">Travelor</p>
      </div>
    </div>
  );
}

export default ClientReview
