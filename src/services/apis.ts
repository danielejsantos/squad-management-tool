import axios from "axios";

export const API_FOOTBALL = axios.create({
  baseURL: "https://api-football-v1.p.rapidapi.com/v2/",
  headers: {
    contentType: "application/json",
    server: "RapidAPI-1.1.0",
    requestsLimit: 3,
    requestsRemaining: 3,
  },
});
