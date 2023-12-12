from flask import Flask
app = Flask(__name__)


app.secret_key = "shhhhhh"  #it will be used in the session
DATABASE = "dojo_survey_db"