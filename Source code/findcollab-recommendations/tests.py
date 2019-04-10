from flask import current_app
from web import app
import unittest
import json


class ContentEngineTestCase(unittest.TestCase):

    def test_similar(self):
        ctx = app.test_request_context()
        ctx.push()

        from engines import content_engine

        content_engine.train('training_data.csv')

        data = {'item': 1, 'num': 10}
        headers = [('Content-Type', 'application/json')]
        json_data = json.dumps(data)
        json_data_length = len(json_data)
        headers.append(('Content-Length', str(json_data_length)))

        response = app.test_client().post('/predict', headers=headers, data=json_data)
        response = json.loads(response.data)
        self.assertEqual(len(response), 38)
        self.assertEqual(response[0][0], "19")

if __name__ == '__main__':
    unittest.main()
