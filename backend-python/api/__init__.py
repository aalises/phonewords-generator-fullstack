from flask import Flask, Blueprint
from flask_restful import Api
from api.resources.phonewords import PhoneWords

from config import API_PREFIX, SWAGGER_CONFIG
from flasgger import Swagger

def create_app(cfg):
        app = Flask(__name__)
        app.config.update(cfg)

        api_blueprint = Blueprint(API_PREFIX + "/", __name__)
        api = Api(api_blueprint, prefix="/" + API_PREFIX)

        add_routes(api)
        add_docs(app, SWAGGER_CONFIG, '../data/apispecs.yaml')
        app.register_blueprint(api_blueprint)

        return app

def add_routes(api):
        api.add_resource(PhoneWords, '/phonewords/<string:number>')

def add_docs(app, cfg, template):
        Swagger(app, config=cfg, template_file=template)
