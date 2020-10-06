export type Players = {
  name: string | null;
  age: number | null;
  nacionality: string | null;
};

export type Team = {
  id: number | null;
  name: string | null;
  description?: string | null;
  formation: string | null;
  website: string | null;
  type: string | null;
  tags: string[] | null;
  players: Players;
};
