from flask import Flask  # import the Flask package
app = Flask(__name__)  # Create the Flask app
from datetime import date  # import datetime for our return value

# Route for when a user enters localhost:5000/time/someTimeType
@app.route('/time/<daymonthyear>')
def get_month(daymonthyear):
    if daymonthyear == "month":
        return {"time": date.today().month}  # Return month if they entered /month
    elif daymonthyear == "day":
        return {"time": date.today().day}  # Return day if they entered /day
    elif daymonthyear == "year":
        return {"time": date.today().year}  # Return year if they entered /year

app.run()  # run the application