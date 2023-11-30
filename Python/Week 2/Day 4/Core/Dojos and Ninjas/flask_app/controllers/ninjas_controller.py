from flask_app import app
from ..models.dojo_model import Dojo
from ..models.ninja_model import Ninja
from flask import Flask,redirect,render_template,request

@app.route("/ninjas")
def new_ninja_display():
    dojos=Dojo.get_all_users()
    return render_template("new_ninja.html",dojos=dojos)

@app.route("/addninja", methods=['POST'])
def new_ninja_process():
    fixed_ninja={
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "age": request.form['age'],
        "dojo_id": int(request.form['dojo_id'])
    }
    dojo_id=request.form['dojo_id']
    Ninja.create_ninja(fixed_ninja)
    return redirect(f'/dojos/{dojo_id}')
