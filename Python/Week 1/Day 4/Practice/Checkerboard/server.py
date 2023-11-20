from flask import Flask, render_template

app=Flask(__name__)

@app.route('/')
def  localhost():
    return render_template("index.html")

@app.route('/4')
def newlocal ():
    return render_template("newindex.html")

@app.route('/<int:x>/<int:y>')
def thirdlocal (x,y):
    return render_template("thirdindex.html",number1=x, number2=y)



if __name__ == "__main__":
    app.run(debug=True)