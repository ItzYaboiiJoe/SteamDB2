import SearchGame from "./SearchGame";

const MainHome = () => {
  return (
    <main className="flex min-h-dvh items-center justify-center px-4">
      <div className="flex w-full max-w-2xl flex-col items-center gap-6 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Steam Player Count Database
          </h1>

          <p className="text-muted-foreground">
            Search for a Steam game to view its player count.
          </p>
        </div>

        <div className="w-full">
          <SearchGame />
        </div>
      </div>
    </main>
  );
};

export default MainHome;
