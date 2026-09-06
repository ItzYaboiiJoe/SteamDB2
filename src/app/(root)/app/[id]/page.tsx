import PlayerCountHome from "@/features/playerCount/components/PlayerCountHome";

const AppID = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;

  const appId = Number(id);
  return <PlayerCountHome appId={appId} />;
};

export default AppID;
