from flask.ext.api import FlaskAPI
from flask import request, current_app, abort
from functools import wraps

app = FlaskAPI(__name__)
app.config.from_object('settings')


@app.route('/predict', methods=['POST'])
def predict():
    from engines import content_engine
    return content_engine.predict(str(38), 10)


@app.route('/train')
def train():
    from engines import content_engine
    data_url = request.data.get('data-url', None)
    content_engine.train(data_url)
    return {"message": "Training Completed!", "success": 1}


if __name__ == '__main__':
    app.debug = True
    app.run()
