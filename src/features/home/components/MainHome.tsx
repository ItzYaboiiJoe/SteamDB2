import SearchGame from "./SearchGame";

const MainHome = () => {
  return (
    <div className="flex min-h-dvh items-center justify-center">
      <div>
        <h1>Steam Player Count Database</h1>
      </div>
      <div>
        <SearchGame />
      </div>
    </div>
  );
};

export default MainHome;
