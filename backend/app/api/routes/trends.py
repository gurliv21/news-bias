from fastapi import APIRouter
from app.services.gemini_trends_service import fetch_trending_topics


router = APIRouter()

@router.get("/trends")
def get_trends():
    return fetch_trending_topics()
