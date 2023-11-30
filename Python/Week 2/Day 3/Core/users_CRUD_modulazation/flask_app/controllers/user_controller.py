from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.user_model import User

@app.route('/')
def home():
    return redirect('/users')

@app.route('/users')
def dashboard():
    readers=User.read_all()
    print("🤖🤖"*5, readers,"🤖🤖"*5)
    return render_template("all_users.html", readers= readers)  #in jinja we will call our variable using the key="readers(left one)"

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



@app.route('/users/<int:id>/edit')
def user_edit(id):
    data={"id":id}
    one_user=User.read_one(data)
    return render_template("edit_user.html", one_user=one_user)

#Show Party Get
#http://127.0.0.1:5001/parties/{id}
#http://localhost:5001/parties/{id}
@app.route('/users/new')
def new_user_display():
    return render_template("new_user.html")

@app.route('/users/<int:id>/update', methods=['POST'])
def user_update(id):
    data={
        **request.form,
        "id":id
    }
    User.update_user(data)
    return redirect('/')

@app.route('/users/<int:id>')
def user_show(id):
    data={
        "id":id
    }
    show=User.read_one(data)
    return render_template("show_user.html", show=show)

