import * as Yup from 'yup';

interface PhoneWordRequest {
    number: string;
}

export interface PhoneWordResponse {
    success: boolean
    words: string[]
}

export default class PhoneWordModel {    
    static initialValues : PhoneWordRequest = {
        number: ''
    }

    static messages = {
        success: 'This is a valid phone number'
        info: 'The phone number has to contain only digits e.g 690394837'
    }
    
    static ValidationSchema = Yup.object().shape({
        number: Yup.string()
          .required('Phone number cannot be empty')
          .matches(/^[0-9 ]+$/,{ message: 'Only integer numbers are allowed (0-9)', excludeEmptyString: true })
    });
}
