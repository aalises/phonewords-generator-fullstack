
const errorMessages = {
    notValid: 'Phone number not valid. Has to contain only digits and no 0/1'
}

const validate = (number) => {
    if(!number) return false;
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