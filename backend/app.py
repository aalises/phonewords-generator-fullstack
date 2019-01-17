from flask import redirect, jsonify, request
from config import APP_CONFIG, API_PREFIX
from api import create_app
from collections import OrderedDict

app = create_app(APP_CONFIG)

@app.after_request
def set_control_origin(response):
    response.headers['Access-Control-Allow-Origin'] = "*"
    return response

@app.route("/" + API_PREFIX)
def show_resources():
    resources = [('phoneword example', '{}/phonewords/911'.format(request.url))]  # Sample call from the root of the API
    return jsonify({'resources': OrderedDict(resources)})

@app.route("/")
def redirect_to_docs():
    return redirect("docs/", code=302)


if __name__ == "__main__":
    app.run(port=5000, debug=True, host='0.0.0.0')
