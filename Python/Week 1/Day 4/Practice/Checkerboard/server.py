from flask import Flask, render_template

app=Flask(__name__)

@app.route('/')
def  localhost():
    return render_template("thirdindex.html")

@app.route('/4')
def newlocal ():
    return render_template("newindex.html")

@app.route('/<int:x>/<int:y>/<color1>/<color2>')
def thirdlocal (x,y,color1,color2):
    return render_template("thirdindex.html",number1=x, number2=y, color1=color1, color2=color2)



if __name__ == "__main__":
    app.run(debug=True)