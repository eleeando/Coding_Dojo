from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash

class Dojo:
    def __init__(self,data):
        self.id=data['id']
        self.name=data['name']
        self.location=data['location']
        self.language=data['language']
        self.comment=data['comment']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']

    @classmethod
    def add(cls,data):
        query="""INSERT INTO dojos (name,location, language, comment) 
        VALUES (%(name)s,%(location)s,%(language)s,%(comment)s);"""
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod #pour afficher tous les dojos
    def get_all(cls, data):
        query = """
        SELECT * FROM dojos;
        """
        result = connectToMySQL(DATABASE).query_db(query,data)
        dojos=[]
        for row in result:
            dojos.append(cls(row))
        return dojos
    
    @classmethod #pour afficher un seul dojo
    def get_by_id(cls, data):
        query = """
        SELECT * FROM dojos WHERE id = %(id)s;
        """
        result = connectToMySQL(DATABASE).query_db(query,data)
        return cls(result[0])
    
    @staticmethod
    def validate(data):
        is_valid = True #par défaut on suppose que l'utilisateur a donné des données correctes, puis on teste les erreurs
        
        if len(data['name'])< 3:
            flash("Name must be at least 3 charecters.")
            is_valid = False
        if len(data['location'])< 1:
            flash("You must choose a location!!!!!!!")
            is_valid = False
        if len(data['language'])< 1:
            flash("You must choose your favorite language")
            is_valid = False
        if len(data['comment'])< 3:
            flash("Comments must be at least 3 charecters.")
            is_valid = False
        
        return is_valid

