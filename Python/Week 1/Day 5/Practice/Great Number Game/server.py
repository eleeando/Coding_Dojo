from flask import Flask, render_template,redirect,session,request
import random 

app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'

@app.route('/')
def index():
    session['one']= random.randint(1, 100)
    return render_template('index.html')

@app.route('/root' , methods=['POST'])
def newindex():
    session['number']= int(request.form['number'])
    return redirect('/')








if __name__ == "__main__":
    app.run(debug = True)