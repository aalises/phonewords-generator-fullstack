from flask_restful import Resource
from api.models.phonewords import PhoneWordModel
from flask import jsonify

class PhoneWords(Resource):
    def get(self, number):
        MAX_LENGTH = 9
        model_instance = PhoneWordModel(False, [], '')

        if not number.isdigit() or ("0" in number or "1" in number) or len(number) >= MAX_LENGTH:
            model_instance = PhoneWordModel(False, [], 'Phone number not valid. Has to contain only digits and no 0/1, maximum length 9')
            return model_instance.json(), 500

        phonewords = model_instance.compute_phonewords(number)

        if phonewords:
            model_instance = PhoneWordModel(True, phonewords, '')
            return model_instance.json(), 200

        model_instance = PhoneWordModel(False, [], 'Something went wrong, please try again')
        return model_instance.json(), 500
