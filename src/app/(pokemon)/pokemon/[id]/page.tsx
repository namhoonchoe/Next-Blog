import React from "react";

async function getPokemonDetail(pokemonIndex: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function PokemonDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const { height, name, weight, types, abilities, sprites, stats } =
    await getPokemonDetail(id);
  return (
    <div className="mt-20">
      <div className="w-32 aspect-square rounded-xl border ">
        <img
          src={sprites.front_default}
          alt="pokemon"
          className="w-full h-full"
        />
      </div>

      <p>{name}</p>
      <p>{weight}</p>
      <p>{height}</p>
      {types.map((typesElement: any, index: number) => {
        return <p key={index}>{typesElement.type.name}</p>;
      })}
      {abilities.map((abilitiesElement: any, index: number) => {
        return <p key={index}>{abilitiesElement.ability.name}</p>;
      })}

      {stats.map((statsElement: any, index: number) => {
        return (
          <p key={index}>
            {statsElement.stat.name}: {statsElement.base_stat}
          </p>
        );
      })}
    </div>
  );
}
