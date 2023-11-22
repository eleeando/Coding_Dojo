from flask import Flask, render_template,redirect,session,request
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/newaddd', methods=['POST'])
def add():
    session['pronom']=request.form['pronom']
    session['places']=request.form['places']
    session['language']=request.form['language']
    return redirect('/newadd')

@app.route('/newadd')
def newadd():
    return render_template('newindex.html')





if __name__ == "__main__":
    app.run(debug = True)