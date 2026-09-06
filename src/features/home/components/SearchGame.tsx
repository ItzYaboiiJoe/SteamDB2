"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { searchGames, SteamApp } from "../actions/searchGame";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const SearchGame = () => {
  const [search, setSearch] = useState("");
  const [games, setGames] = useState<SteamApp[]>([]);

  const router = useRouter();

  const onGameClick = (appid: number) => {
    console.log("App ID:", appid);
    router.push(`/app/${appid}`);
  };

  const handleSearch = async (value: string) => {
    setSearch(value);
    if (!value.trim()) {
      setGames([]);
      return;
    }
    const results = await searchGames(value);
    setGames(results);
  };

  return (
    <div className="flex min-h-dvh items-center justify-center px-4">
      <div className="flex w-full max-w-2xl flex-col items-center gap-6 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Steam Player Count Database
          </h1>

          <p className="text-muted-foreground">
            Search for a Steam game to view its player count.
          </p>
        </div>

        <div className="relative w-full">
          <Input
            placeholder="Enter game name"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />

          {games.length > 0 && (
            <div className="bg-background absolute top-full z-10 mt-2 max-h-80 w-full overflow-y-auto rounded-md border shadow-md">
              {games.map((game) => (
                <Button
                  key={game.appid}
                  type="button"
                  onClick={() => onGameClick(game.appid)}
                  className="w-full px-4 py-3 text-left"
                >
                  {game.name}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchGame;
