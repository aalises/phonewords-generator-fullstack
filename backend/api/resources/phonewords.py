from flask_restful import Resource
from api.models.phonewords import PhoneWordModel
from flask import jsonify

class PhoneWords(Resource):
    def get(self, number):
        model_instance = None
        if not number.isdigit():
            model_instance = PhoneWordModel(False, [], 'The phone number has to contain only digits')
            return model_instance.json(), 500

        phonewords = None
        phonewords = PhoneWordModel.compute_phonewords(number)

        if phonewords:
            model_instance = PhoneWordModel(True, phonewords, '')
            return model_instance.json(), 200

        model_instance = PhoneWordModel(False, [], 'Something went wrong, please try again')
        return model_instance.json(), 500
