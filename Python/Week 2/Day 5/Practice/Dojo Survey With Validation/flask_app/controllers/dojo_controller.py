from flask_app import app
from flask import request, render_template, session, redirect, flash
from flask_app.models.dojo_model import Dojo


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/newaddd', methods=['POST'])
def add():
    if Dojo.validate(request.form):
        dojo_id = Dojo.add(request.form)
        session['name'] = request.form['name']
        session['language'] = request.form['language']
        session['comment'] = request.form['comment']
        print(session)
    return redirect('/newadd')

@app.route('/newadd')
def newadd():
    return render_template('newindex.html')






