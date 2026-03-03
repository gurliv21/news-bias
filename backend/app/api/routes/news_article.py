from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.news_article_scrapping import extract_article
from app.services.similar_article import similar_article

router = APIRouter()

class ArticleRequest(BaseModel):
    url: str

class QueryRequest(BaseModel):
    query:str

@router.post("/extract")
def get_news_article(request: ArticleRequest):
    try:
        return extract_article(request.url)
    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )

@router.post("/similar-articles")
def get_similar_news_articles(request:QueryRequest):
    try:
        return similar_article(request.query)
    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )