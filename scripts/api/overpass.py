import requests
import urllib.parse

ENDPOINT = "https://lz4.overpass-api.de/api/interpreter?data="

def get_data(query:str)->dict:
    url = ENDPOINT + urllib.parse.quote(query)
    response = requests.get(url)
    return response.json()