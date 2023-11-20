from flask import Flask, render_templates
app = Flask(__name__)

@app.route('/')
def Hello_world():
    return 'Hello World!'

@app.route('/Dojo')
def hello():
    return 'Dojo!'

@app.route('/say/user/<username>')
def say_hi_username(username):
    return f"Hi {username.capitalize()}"

@app.route('/hi/user/<string:username>/<int:times>')
def say_hi_username_time(username, times):
    return f"Hi {username}"*times


    # output = ''

    # for i in range(0,times):
    #     output += f"<p>{username}</p>"


    # return output








if __name__ == "__main__"
    app.run(debug = True)