from flask import Flask, render_template, redirect, request
from user_model import User

app =Flask(__name__)
app.secret_key="secret key"

db="users_cr"

@app.route('/users')
def dashboard():
    readers=User.read_all()
    print("🤖🤖"*5, readers,"🤖🤖"*5)
    return render_template("read_all.html", readers= readers)  #in jinja we will call our variable using the key="readers(left one)"

#display rout: just to render the page
#Create Party POST
#http://127.0.0.1:5001/create
#http://localhost:5001/create
@app.route('/processing', methods=['post'])
def new_user_process():
    # print("👋👋"*5, request.form,"👋👋"*5)
    fixed_data={
        "first_name":request.form["first_name"],
        "last_name":request.form["last_name"],
        "email":request.form["email"]
    } #this line will translate the database to the correct format (dictionnaire)
    User.create(fixed_data) #this line will insert the input of the user(request.form) into the database with create method
    return redirect('/users')

#Show Party Get
#http://127.0.0.1:5001/parties/{id}
#http://localhost:5001/parties/{id}
@app.route('/users/new')
def new_user_display():
    return render_template("create_all.html")








if __name__==('__main__'):
    app.run(debug=True, port=1337)