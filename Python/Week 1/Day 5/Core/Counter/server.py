from flask import Flask, render_template,session,redirect
app = Flask(__name__)
app.secret_key = 'we are not safe'

@app.route('/')
def index():
    session['visits']=session.get('visits',0)+1
    return render_template("index.html",count=session['visits'])

@app.route('/destroy')
def destroy():
    session.clear()
    return redirect('/')

@app.route('/second')
def ind():
    session['visits']=session.get('visits',0)+2
    return render_template("index.html",count=session['visits'])


if __name__ == "__main__":
    app.run(debug = True)


# redirect takes me from one place to another
# sission.get is a function to bring things from html to python
# session.clear is a function that will 