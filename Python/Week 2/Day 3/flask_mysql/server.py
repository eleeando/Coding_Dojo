from flast import Flask, render_template, redirect, request
from book_model import Book

app = Flask(__name__)

@app.route('/')
def dashboard():
    books = Book.get_all()
    # print("Books as Objects:", "*"*25, books, "*" *25)
    return render_template("index.html", book)


# create new book => Get to see the form + post to add the new book to database
@app.route('/books/new')
def new_book():
    return render_template("new_book.html")

@app.route('/books/create', methods=['POST'])
def create_book():
    print(request.form, "*"*20)
    data ={
        "title":request.form["title"],
        "author":request.form["author"],
        "pages":request.form["pages"],
        "price":request.form["price"],
        "genre":request.form["genre"],
        "description":request.form["description"],
        "cover":request.form["cover"],
    }
    if "is-available" in request.form:
        data["is_available"]=True
    else:
        data["is_available"]=False
    Book.create(data)
    return redirect("/")

# View one
@app.route("/books/<int:id>")
def one_book(id):
    data ={"id": id}
    Book get_one_by_id(data)
    return render_template("one_book.html")

#Update Get 😎😎 -> Post 👋👋
@app.route('/books/<int:id>/edit') 
def edit(id):
    book_to_edit = Book.get_one_by_id({"id": id})
    return render_template("edit_book.html", book=book_to_edit)

@app.route('/books/<int:id>/update', methods=['post'])  #when we forget to mention the id we can add it in the route "/books/<int:id>/update', methods=['post']" or we can add it in the head of the html page which is the easir way
def updatr():
    print("🤡🤡"request.form)
    return redirect("/")

@app.route('/books/<int:id>/destroy')
def destroy(id):
    Book.delete({'id': id})
    return redirect('/')




if __name__ == '__main__':
    app.run(debug = True)