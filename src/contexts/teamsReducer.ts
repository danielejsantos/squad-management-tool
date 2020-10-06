import { Team } from "../types";

export type InitialState = {
  teams: Team[] | [];
  team: Team;
};

export const initialState: InitialState = {
  teams: [],
  team: {
    id: null,
    name: null,
    description: null,
    formation: null,
    website: null,
    type: null,
    tags: null,
    players: {
      name: null,
      age: null,
      nacionality: null,
    },
  },
};

export function reducer(state = initialState, action: any) {
  switch (action.type) {
    case "CREATE_TEAM":
      return {
        ...state,
        teams: [...state.teams, state.team],
      };
    case "SET_TEAM_NAME":
      return {
        ...state,
        team: {
          ...state.team,
          name: action.payload,
        },
      };
    case "SET_TEAM_DESCRIPTION":
      return {
        ...state,
        team: {
          ...state.team,
          description: action.payload,
        },
      };
    case "SET_TEAM_FORMATION":
      return {
        ...state,
        team: {
          ...state.team,
          formation: action.payload,
        },
      };
    case "SET_TEAM_WEBSITE":
      return {
        ...state,
        team: {
          ...state.team,
          website: action.payload,
        },
      };
    case "SET_TEAM_TYPE":
      return {
        ...state,
        team: {
          ...state.team,
          type: action.payload,
        },
      };
    case "SET_TEAM_TAGS":
      return {
        ...state,
        team: {
          ...state.team,
          type: action.payload,
        },
      };
    case "SET_TEAM_PLAYERS":
      return {
        ...state,
        team: {
          ...state.team,
          players: {
            name: action.payload.name,
            age: action.payload.age,
            nacionality: action.payload.nacionality,
          },
        },
      };
    default:
      throw new Error();
  }
}
