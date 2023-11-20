from flask import Flask, render_template
app = Flask(__name__)

@app.route('/hello')
def hello():
    return "Hello From Server 🥷🥷🥷"

@app.route('/index')
def index():
    users = [
        {'firstname':"Michal",'lastname':"Choi"},
        {'firstname':"John",'lastname':"Supsupin"},
        {'firstname':"Mark",'lastname':"Guillen"},
    ]
    return render_template("index.html",users=users)     #????????





if __name__ == "__main__":
    app.run(debug = True)