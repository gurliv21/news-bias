import requests
from bs4 import BeautifulSoup

def extract_article(url: str):
    try:
        headers = {"User-Agent": "Mozilla/5.0"}
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()

        soup = BeautifulSoup(response.text, "html.parser")

        title_tag = soup.find("h1")
        title = title_tag.text.strip() if title_tag else "No title found"

        article = soup.find("article")

        if article:
            paragraphs = article.find_all("p")
        else:
            paragraphs = soup.find_all("p")

        cleaned_paragraphs = [
            p.text.strip()
            for p in paragraphs
            if len(p.text.strip()) > 40
        ]

        return {
            "title": title,
            "content": cleaned_paragraphs
        }

    except requests.exceptions.RequestException as e:
        raise Exception(f"Network error: {str(e)}")

    except Exception as e:
        raise Exception(f"Parsing error: {str(e)}")
