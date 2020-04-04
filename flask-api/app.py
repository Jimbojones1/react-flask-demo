from flask import Flask
from flask import jsonify
from googleapiclient.discovery import build
import os

app = Flask(__name__)


API_KEY = os.environ.get("YOUTUBE_API_KEY")
YOUTUBE_API_SERVICE_NAME = "youtube"
YOUTUBE_API_VERSION = "v3"

# def search_by_keyword():
youtube = build(
  YOUTUBE_API_SERVICE_NAME,
  YOUTUBE_API_VERSION,
  developerKey=API_KEY
)

@app.route('/search/<term>')
def get_youtube_videos(term):

    search_response = youtube.search().list(
      q=term,
      part="snippet",
      maxResults=10
    ).execute()

    print(search_response)

    return jsonify(data=search_response)









