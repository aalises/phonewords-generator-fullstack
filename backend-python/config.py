import os

VERSION = 1
API_PREFIX = "api/v{}".format(VERSION)

APP_CONFIG = {
    'PROPAGATE_EXCEPTIONS': True,
    'JSONIFY_PRETTYPRINT_REGULAR': True,
    'JSON_SORT_KEYS': False,
    'SWAGGER': {
        'title': 'PhoneWords API',
        'uiversion': 3
    }
}

SWAGGER_CONFIG = {
    "headers": [
    ],
    "specs": [
        {
            "endpoint": 'apispec',
            "route": '/apispec.json'
        }
    ],
    'hide_top_bar': True,
    "static_url_path": "/flasgger_static",
    "swagger_ui": True,
    "specs_route": "/docs/"
}
