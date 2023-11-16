from flask import Flask , render_template # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"

#http://127.0.0.1/
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response

#http://127.0.0.1/hello
@app.route('/hello')
def hello():
    return "Hello From Server 🥷🥷🥷"

#http://127.0.0.1/hello/user
@app.route('/hello/user')
def say_hello():
    return "<h1>Hello James 😁😁😁</h1>"

#http://127.0.0.1/hello/user/<username>
@app.route('/hello/user/<username>')    #<.....> means that the variable is changebale
def say_hello_username(username):
    return f"<h1>Hello {username} 😁😁😁</h1>"

#http://127.0.0.1/hello/user/<username>/<times>
@app.route('/hello/user/<username>/<int:times>')   
def say_hello_username_time(username, times):
    return f"<h1>Hello {username} 😁😁😁</h1>"*times

#http://127.0.0.1/user/<username>/<age>
@app.route('/user/<username>/<int:age>')    #2 functions can't work  with the same route for that each one has to have her own route
def user_info(username, age):
    return f"<h1>USERNAME: {username} <br/> Age: {age} </h1>"

#http://127.0.0.1/index
@app.route('/index/<username>/<int:age>')    
def index(username, age):
    users = [
        {'name':"John",'age':35},
        {'name':"Sarah",'age':25},
        {'name':"Alex",'age':28},
        {'name':"Amelia",'age':23},
        {'name':"James",'age':22},
        {'name':"Eric",'age':56}
    ]
    return render_template("index.html", username=username, age=age, users=users) #we took the variables and we put them in the template

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

