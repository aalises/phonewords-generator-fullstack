from flask import request
from collections import OrderedDict
from functions.phoneword_algorithm import phonewords_from_number

class PhoneWordModel():

    def __init__(self, success, data, error):
        self.success = success
        self.data = data
        self.error = error

    def json(self):
        phoneword = [('success', self.success),
                     ('data', self.data),
                     ('error', self.error)]

        return OrderedDict(phoneword)

    def compute_phonewords(self, number):
        return list(phonewords_from_number(number))
