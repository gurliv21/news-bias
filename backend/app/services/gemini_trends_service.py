from fastapi import HTTPException
from google import genai
from app.core.config import GEMINI_API_KEY

client = genai.Client(api_key=GEMINI_API_KEY)


def fetch_trending_topics():
    try:
        prompt = """
        List the top 10 trending topics today.
        Make sure they are max 2-3 words.
        Return ONLY a numbered list.
        """

        response = client.models.generate_content(
            model="gemini-3-flash-preview",
            contents=prompt,
        )

        if not response or not response.text:
            raise HTTPException(
                status_code=502,
                detail="Invalid response from Gemini API"
            )

        text = response.text.strip()

        trends = [
            line.split(". ", 1)[-1].strip()
            for line in text.split("\n")
            if line.strip()
        ]

        return {
            "source": "gemini",
            "count": len(trends),
            "trends": trends
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error fetching trends: {str(e)}"
        )
