from mysqlconnection import connectToMySQL
class User:
    def __init__(self, data_dict):
        self.id=data_dict['id']
        self.first_name=data_dict['first_name']
        self.last_name=data_dict['last_name']
        self.email=data_dict['email']
        self.created_at=data_dict['created_at']
        self.updated_at=data_dict['updated_at']
    
    @classmethod
    def read_all(cls):
        query ="Select * from users;"
        result= connectToMySQL("users_cr").query_db(query)     #we will execute the query by this line. It will return a list of dictionnary [{row_1},{row_2},....,{key:value}]
        dictionary=[]   #it's an empty array to push in it every instance from the database
        for user in result:
            dictionary.append(cls(user))   #cls(user): it will translate the rows into instances
        return dictionary #the new dictionnary will containe the list of instances
    
    @classmethod
    def create(cls, data): #data is a new thing that we will add to the database
        query="""INSERT INTO users (first_name, last_name, email) 
                    VALUES (%(first_name)s, %(last_name)s, %(email)s);  
                """ 
        db_result=connectToMySQL('users_cr').query_db(query, data)
        





