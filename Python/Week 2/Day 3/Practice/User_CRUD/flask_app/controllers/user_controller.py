from flask_app import app
from ..models.Users import User
from flask import Flask 
from flask import redirect, render_template,request


@app.route('/users/new')
def display_create():
    return render_template('create.html')

@app.route('/process_create', methods=['POST'])
def process_create():
    fixed_data={
                "first_name":request.form['first_name'],
        "last_name": request.form['last_name'],
        "email":request.form['email']
    }
    User.create(fixed_data)
    return redirect('/users')

@app.route("/users")
def display_all():
    users=User.read_all()

    return render_template('read_all.html',users=users)


@app.route('/users/<int:id>')
def display_one(id):
    fixed_id={
        "id":id
    }
    one_user=User.get_one_by_id(fixed_id)
    return render_template("read_one.html",user=one_user)


@app.route('/users/<int:id>/edit')
def edit_display(id):
    fixed_id={
        "id":id
    }
    one_user=User.get_one_by_id(fixed_id)
    return render_template('update.html',user=one_user)

@app.route("/process_update/<int:id>", methods=['POST'])
def process_update(id):
    fixed_data={
        "id":id,
        "first_name":request.form['first_name'],
        "last_name":request.form['last_name'],
        "email":request.form['email']
    }
    User.update_user(fixed_data)
    return redirect(f'/users/{id}')

@app.route('/process_delete/<int:id>', methods=['POST'])
def process_delete(id):
    fixed_id={
        "id":id
    }
    User.delete_user(fixed_id)
    return redirect("/users")
