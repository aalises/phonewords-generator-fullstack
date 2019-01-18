from itertools import product

letters_numbers = {'2': 'ABC', '3': 'DEF', '4': 'GHI', '5': 'JKL',
                   '6': 'MNO', '7': 'PQRS', '8': 'TUV', '9': 'WXYZ'}


# Algorithm to compute all the possible phonewords from a number
def phonewords_from_number(number):
    letters_to_combine = (letters_numbers[digit] for digit in number)
    for letters_group in product(*letters_to_combine):
        yield ''.join(letters_group)
