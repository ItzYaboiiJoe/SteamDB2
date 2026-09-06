const PlayerCountHome = ({ appId }: { appId: number }) => {
  return (
    <div className="flex min-h-dvh items-center justify-center px-4">
      <div className="flex w-full max-w-2xl flex-col items-center gap-6 text-center">
        <div className="space-y-2">
          <div>Player Count for App ID: {appId}</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCountHome;
