from flask import Flask

app= Flask(__name__)
app.secret_key="hey"

DATABASE = "users_crud_erd"
