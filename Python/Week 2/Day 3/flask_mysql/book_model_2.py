from mysqlconnection import connectToMySQL
class Book:
    def __init__(self, data_dict):
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

        # all the queries will be written in this model

    #ALL CRUD QUERIES must be classmethods
    @classmethod
    def get_all(cls):
        query="SELECT * FROM books"
        db_result = connectToMySQL("fullstack_db").query_db("SELECT * FROM books;") #list of dictionaries
        all_books = []
        for element in db_result:
            first_book = Book(element) #input / element is 
            all_books.append(book_object)  #output
        return all_books


# if we want to run our application we can only use "server.py", for that we should import them in the server













