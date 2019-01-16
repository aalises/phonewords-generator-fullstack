import * as Yup from 'yup';

interface PhoneWordRequest {
    number: number;
}

export interface PhoneWordResponse {
    success: boolean
    words: string[]
}

export default class PhoneWordModel {    
    static initialValues : PhoneWordRequest = {
        number: ''
    }
    
    static ValidationSchema = Yup.object().shape({
        number: Yup.number()
          .required('Phone number cannot be empty')
          .integer('Only integer numbers are allowed')
          .positive('Only positive numbers are allowed')
    });
}
