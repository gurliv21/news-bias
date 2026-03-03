import requests
from bs4 import BeautifulSoup

url = input("Paste your url: ")

headers = {
    "User-Agent": "Mozilla/5.0"
}

html = requests.get(url, headers=headers).text
soup = BeautifulSoup(html, "html.parser")

# TITLE
title = soup.find("h1")
print("\nTITLE:")
print(title.text.strip() if title else "No title")

# CONTENT
print("\nCONTENT:\n")

article = soup.find("article")

if article:
    paragraphs = article.find_all("p")
else:
    paragraphs = soup.find_all("p")

for p in paragraphs:
    text = p.text.strip()
    if len(text) > 40:
        print(text)
