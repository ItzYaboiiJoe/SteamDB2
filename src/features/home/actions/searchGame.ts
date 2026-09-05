import { supabase } from "@/lib/db/supabaseClient";
import { STEAM_APPS } from "@/lib/constants";

export type SteamApp = {
  appid: number;
  name: string;
};

export const searchGames = async (game: string) => {
  const { data, error } = await supabase
    .from(STEAM_APPS)
    .select("*")
    .ilike("name", `%${game}%`)
    .limit(10);

  if (error) throw error;
  return data;
};
