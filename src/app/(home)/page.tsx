import PokemonCard from "../../components/UI/PokemonCard";
import Link from "next/link";

type PokemonResult = {
  name: string;
  url: string;
};

async function getPokemonData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const pokemons = await getPokemonData();

  return (
    <main className="flex flex-col w-full max-w-[1128px] items-center justify-between gap-12 my-16">
      <header className="w-full h-20 rounded-xl border"></header>
      <section className="w-full max-w-full grid grid-cols-4 gap-6">
        {pokemons.results.map((pokemon: PokemonResult, index: number) => {
          return (
            <Link href={`pokemon/${index+1}`} key={index}>
              <PokemonCard name={pokemon.name} index={index} />
            </Link>
          );
        })}
      </section>
    </main>
  );
}
