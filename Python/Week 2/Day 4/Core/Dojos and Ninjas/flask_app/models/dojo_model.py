from ..config.mysqlconnection import connectToMySQL
from flask_app import DATABASE

class Dojo:
    def __init__(self,data):
        self.name=data['name']  
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']

    @classmethod
    def create_dojo(cls,data):
        query="""
                Insert into dojos (name) values (%(name)s);
                """
        connectToMySQL(DATABASE).query_db(query,data)


    @classmethod
    def get_dojo_by_id(cls,data):
        query="""
                select * from dojos where id = %(id)s
                """
        result=connectToMySQL(DATABASE).query_db(query,data)
        return result[0]


    @classmethod
    def get_all_users(cls):
        query="""
                select * from dojos
                """
        results= connectToMySQL(DATABASE).query_db(query)
        return results
    
    @classmethod
    def get_ninjas_by_dojo(cls,data):
        query="""
                select * from dojos
                join ninjas on dojos.id= ninjas.dojo_id
                where ninjas.dojo_id= %(dojo_id)s ;
                
                """
        results= connectToMySQL(DATABASE).query_db(query,data)
        return results


