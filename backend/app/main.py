from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes.trends import router as trends_router
from app.api.routes.news_article import router as get_news_article
from app.api.routes.news_article import router as get_similar_news_articles
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(trends_router, prefix="/api")
app.include_router(get_news_article, prefix="/api/articles")
app.include_router(get_similar_news_articles, prefix="/api/articles")

@app.get("/")
def root():
    return {"status": "FastAPI running"}
