from ..config.mysqlconnection import connectToMySQL
from flask_app import DATABASE


class Ninja:
    def __init__ (self,data):
        self.first_name=data['first_name']
        self.last_name=data['last_name']
        self.age=data['age']
        self.dojo_id=data['dojo_id']

    @classmethod
    def create_ninja(cls,data):
        query="""
                insert into ninjas (first_name,last_name,age,dojo_id)
                values (%(first_name)s,%(last_name)s,%(age)s,%(dojo_id)s);
                """
        connectToMySQL(DATABASE).query_db(query,data)

    