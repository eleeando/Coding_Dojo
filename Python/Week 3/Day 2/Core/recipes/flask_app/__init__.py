from flask import Flask
app = Flask(__name__)
app.secret_key = "n tere mosso"
DATABASE = "log_reg_db"