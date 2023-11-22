from mysqlconnection import connectToMySQL

class Book:
    def __init__(self, data_dict):   #Those attributes are the database columns
        self.id = data_dict["id"]
        self.title = data_dict["title"]
        self.author = data_dict["author"]
        self.description = data_dict["description"]
        self.genre = data_dict["genre"]
        self.cover = data_dict["cover"]
        self.price = data_dict["price"]
        self.is_available = data_dict["is_available"]
        self.created_at = data_dict["created_at"]
        self.updated_at = data_dict["updated_at"]


        #CRUD QUERIES = classmethods
        #*C
        @classmethod
        def get_all(cls):
            query ="SELECT * FROM books"    #c'est le meme quary qu'on a déjà écrit dans My SQL WORKBENCH
            db_result = connectToMySQL("fullstack_db")
            """db_result = connectToMySQL("fullstack_db").query_db(query): excute the query 
            the return of the function is a list of dicts [{row_1}, {row_2} .... {key:value}] """  #we will execute the query thanks to this line
            all_books = []
            for row in db_result :
                """ for each row in the list create an instance of the class Book
                add the created instance to all_books list """
                book = cls(row)  #1-
                all_books.append(book) #1-
            # return the list of instance 
            return all_books
        
        @classmethod
            def save(cls, data):
        query = """INSERT INTO books (title, author, description, pages)
    	    VALUES (%(first_name)s,%(last_name)s,%(occupation)s);"""
        result = connectToMySQL(cls.DB).query_db(query,data)
        return result