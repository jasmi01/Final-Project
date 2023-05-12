import requests
import json

url = f'https://api.umd.io/v1/bus/stops'
response = requests.get(url)
stops = response.json()
for stop in stops:
        stop_id = stop['stop_id']
        title = stop['title']
        url2 = f'https://api.umd.io/v1/bus/stops/{stop_id}'
        response2 = requests.get(url2)
        info = response2.json()
        print(info)