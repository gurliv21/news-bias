from dotenv import load_dotenv
import os 

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
ENV = os.getenv("ENV", "development")

if not GEMINI_API_KEY:
    raise RuntimeError("GEMINI_API_KEY not set")