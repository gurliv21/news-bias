import requests
from bs4 import BeautifulSoup
from urllib.parse import quote

def similar_article(query:string):
    query=quote(query)
    print(query)
    url = f"https://news.google.com/rss/search?q={query}"
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "xml")

    items = soup.find_all("item")
    result=[]
    for i in items[:8]:
        result.append({
            "title":i.title.text,
            "link":i.link.text,
            "source":i.source.text if i.source else None
        })
    return result


