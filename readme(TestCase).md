# FindCollab Content-based Recommendation Engine

## Description
web.py contains the two endpoints:

1. /train -- calls engine.train() which precomputes item similarities based on their descriptions in training_data.csv using TF-IDF and cosine similarity.

2. /predict -- given an activity_id, returns the precomputed 'most similar' activities.


Start Redis Server

>redis-server

Starts redis server at  redis://localhost:6379

> conda create -n crec --file conda-requirements.txt

Now, in the virtualenv (``source activate crec``):

> python web.py

Then, in a separate terminal window, train the engine:

> curl -X GET -H "Content-Type: application/json; charset=utf-8" http://127.0.0.1:5000/train -d "{\"data-url\": \"sample-data.csv\"}"

And make a prediction!

> curl -X POST -H "Content-Type: application/json; charset=utf-8" http://127.0.0.1:5000/predict -d "{\"item\":18,\"num\":10}"


## Running tests


> python -m unittest tests
