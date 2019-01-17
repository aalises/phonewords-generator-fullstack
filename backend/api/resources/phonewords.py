from flask_restful import Resource

class PhoneWords(Resource):
    def get(self, number):
        return {'message': 'Phone Number not found, pending implementation'}, 404
