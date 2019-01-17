import * as Yup from 'yup';


export default class PhoneWordModel {    
    static initialValues : PhoneWordRequest = {
        number: ''
    }

    static messages = {
        success: 'This is a valid phone number',
        info: 'The phone number has to contain only digits from 2 to 9, e.g 69394837 (0 and 1 do not contain phone word information)'
    }
    
    static ValidationSchema = Yup.object().shape({
        number: Yup.string()
          .required('Phone number cannot be empty')
          .matches(/^[2-9 ]+$/,{ message: 'Invalid number: Only integers from 2 to 9 are allowed', excludeEmptyString: true })
    });
}
