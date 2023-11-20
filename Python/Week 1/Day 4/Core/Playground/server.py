from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')          
def hello_world():
    return f"<h1>Welcome</h1>"

@app.route('/box/<int:number>')
def boxes(number):
    return render_template("box.html", number=number)

@app.route('//box/<int:number>/<color>')
def colorful_boxes(number, color):
    return render_template("box.html", number=number, color=color)


if __name__=="__main__":
    app.run(debug=True)