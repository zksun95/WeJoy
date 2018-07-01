from pymongo import MongoClient

MONGO_HOST = "localhost"
MONGO_PORT = 27017
DB_NAME = "wejoy_db"

client = MongoClient("%s:%d" % (MONGO_HOST, MONGO_PORT))

def get_db(db = DB_NAME):
    return client[db] 