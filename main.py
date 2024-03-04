from scripts.fetchData import writeCSV, readCSV, aggregatePoints, readCSVwithKey, dict2list
from scripts.handleFile import addStrLeft
from scripts.api.overpass import get_data

if __name__ == "__main__":
    '''query = '[out:json];\
            area[name="東京都"]->.tokyo;\
            node(area.tokyo)[amenity="place_of_worship"][religion="buddhist"][name];\
            out;'
    json = get_data(query)
    rows = [[x['lat'], x['lon'], x['tags']['name']] for x in json['elements']]
    writeCSV('./data/osm/buddhist_area:tokyo.csv', rows)'''

    #addStrLeft('./data/osm/temple_area:tokyo.csv', './data/osm/area:tokyo.csv', 'temple,')
    #writeCSV('./data/osm/restaurant_area:tokyo_one-fourth.csv',aggregatePoints(readCSV('./data/osm/restaurant_area:tokyo.csv')))
    src = readCSVwithKey('./data/osm/area:tokyo_16.csv')
    for key in src:
        if len(src[key]) > 400:
            print(key+' is bigger than 400')
            src[key] = aggregatePoints(src[key],4,is_dict=True)
    writeCSV('./data/osm/area:tokyo_256.csv',dict2list(src))