/* eslint-disable @next/next/no-img-element */
import React from "react";

type PokemonCardProps = {
  name: string;
  index: number;
};

export default function PokemonCard({ name, index }: PokemonCardProps) {
  const pokeIndex = ('000' + (index + 1)).slice(-3)
//?????? 왜 되는거지?????
  return (
    <div className="w-[264px] aspect-square rounded-xl border shadow-sm px-[42px] py-4 flex flex-col justify-start items-center gap-2">
      <div className="w-[180px] aspect-square">
        <img
          alt={name}
          width={"100%"}
          height={"100%"}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
        />
      </div>
      <p className="capitalize text-xl font-semibold">{name}</p>
    </div>
  );
}
