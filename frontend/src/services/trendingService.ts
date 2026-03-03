import { apiClient } from "./apiClient";

export interface TrendsResponse {
  source: string;
  count: number;
  trends: string[];
}

export const trendingService = ():Promise<TrendsResponse>=>{
     return apiClient.get("/trends")
}