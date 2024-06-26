import React from "react";
import { Progress } from "@/components/ui/progress";
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
  const { height, name, weight, types,  sprites, stats } =
    await getPokemonDetail(id);
  return (
    <section className="flex flex-row justify-start items-center w-full max-w-[1152px] my-12 rounded-xl border overflow-hidden">
      <header className="flex flex-col w-1/2 gap-8  justify-start items-center">
        <div className="w-full h-12 px-6 flex justify-between items-center bg-cyan-500">
          <p className="flex-grow-0 flex-shrink-0 text-2xl text-center text-white">
            뒤로가기 버튼
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-2xl text-left text-white">
            인덱스
          </p>
        </div>
        <div className="w-56 aspect-square rounded-xl border ">
          <img
            src={sprites.front_default}
            alt="pokemon"
            className="w-full h-full"
          />
        </div>
      </header>
      <main className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0  w-1/2 relative overflow-hidden gap-8 px-8 py-4">
        <section className="flex flex-col justify-start items-center  w-4/5 gap-8">
          <p className="capitalize font-semibold text-2xl"> {name}</p>
          <div className="flex justify-start items-center gap-2 ">
            {types.map((typesElement: any, index: number) => {
              return (
                <button
                  key={index}
                  className="rounded-2xl px-3 py-1 border text-white bg-cyan-400 capitalize"
                >
                  {typesElement.type.name}
                </button>
              );
            })}
          </div>
          <section className="flex justify-between items-center  w-4/5">
            <div className="flex flex-col justify-start items-center">
              <p className="capitalize">{weight} kg</p>
              <p>weight</p>
            </div>
            <div className="flex flex-col justify-start items-center">
              <p className="capitalize"> {height} m</p>
              <p>height</p>
            </div>
          </section>
        </section>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-full  max-w-[550px]  gap-8 py-4">
          <p className="flex-grow-0 flex-shrink-0 text-2xl text-center text-black">
            Base Stats
          </p>

          {stats.map((statsElement: any, index: number) => {
            return (
              <div key={index} className="flex justify-between items-center w-full gap-2">
                <p className="capitalize text-md font-semibold">
                  {statsElement.stat.name}:
                </p>
                <Progress value={statsElement.base_stat} className="w-48"/>
              </div>
            );
          })}
        </div>
      </main>
    </section>
  );
}
