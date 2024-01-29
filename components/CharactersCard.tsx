"use client";

import { useState } from "react";
import { CharacterType } from "../types/characterType";
import Image from "next/image";

type Tekken8CharacterProps = {
  tekken8Lists: CharacterType[];
};

const CharactersCard = ({ tekken8Lists }: Tekken8CharacterProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [indexCharacter, setIndexCharacter] = useState<number | null>(null)

  function handleCharacter(index: number) {
    setIndexCharacter(index)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2 gap-y-5 sm:gap-y-20 gap-x-10 mx-8">
      {tekken8Lists.map((tekken: CharacterType, index: number) => (
        <div key={index} className="flex flex-col items-center gap-5">
          {loading && index === indexCharacter ? (
            <button
              type="button"
              className="bg-rose-900 w-full text-center py-2 rounded-md flex justify-center scale-110 -translate-y-1 h-full md:h-auto"
              disabled
            >
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </button>
          ) : (
            <button
              type="button"
              onClick={() =>handleCharacter(index)}
              className="bg-rose-700 w-full text-center py-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-rose-900 duration-300 h-full md:h-auto"
            >
              {tekken.full_name}
            </button>
          )}
          <Image
            src={tekken.image_link}
            alt={`${tekken.full_name}`}
            width={300}
            height={500}
            className="card rounded-md hidden md:block bg-gradient-to-bl from-zinc-950  to-zinc-800"
          />
        </div>
      ))}
    </div>
  );
};

export default CharactersCard;
