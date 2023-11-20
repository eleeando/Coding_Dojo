from flask import Flask, render_template, redirect, session
app = Flask(__name__)
app.secret_key = 'we are not safe'  #set a secret key

#http://127.0.0.1/
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def process():
    print("*"*20, request.form, "*"*20)
    session["name"]= request.form["name"]
    session["name"]= request.form["age"]
    session["name"]= request.form["fav_number"]
    session["name"]= request.form["fav_food"]
    session["name"]= request.form["fav_color"]
    session["name"]= request.form["fav_sport"]
    return redirect('/display')

@app.route('/display')
def display():
    return render_template("display.html")

@app.route('/clear')
def clear():
    session.clear()
    return redirect('/display')


if __name__ == "__main__":
    app.run(debug=True, port=5020)