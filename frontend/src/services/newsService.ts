import { apiClient } from "./apiClient";

export interface NewsResponse {
  heading: string;
  contentt: string[];
}

export interface NewsSimilar{
  title: string;
  link: string;
  source: string;
}


export const newsService = (url:string):Promise<NewsResponse>=>{
     return apiClient.post("/articles/extract",{url})
}

export const similarArticles=(query:string):Promise<NewsSimilar[]>=>{
      return apiClient.post("/articles/similar-articles",{query})

}