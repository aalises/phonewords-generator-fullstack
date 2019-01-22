
const errorMessages = {
    notValid: 'Phone number not valid. Has to contain only digits and no 0/1, maximum length 9'
}

const MAX_LENGTH = 9;

const validate = (number) => {
    if(!number || number.length >= MAX_LENGTH) return false;
    const reg = new RegExp('^[2-9]+$');
    return reg.test(number)
}

const json = (success, phonewords, error) => {
    return {
        'success': success, 
        'phonewords': phonewords, 
        'error': error
    }
}

module.exports = {
    json,
    validate,
    errorMessages
}