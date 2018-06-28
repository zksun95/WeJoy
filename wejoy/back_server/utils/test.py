import mongo
from cloud_amqp import CLoudAMQPCli
def test_mdb():
    db = mongo.get_db('test')
    db.demo.drop()
    assert db.demo.count()==0
    db.demo.insert({"test":123})
    print(db.demo.count())


def test_amqp():
    


if __name__ =="__main__":
    test_amqp()