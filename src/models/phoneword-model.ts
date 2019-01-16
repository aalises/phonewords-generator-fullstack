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
    
    static ValidationSchema = Yup.object().shape({
        number: Yup.string()
          .required('Phone number cannot be empty')
          .matches(/^[0-9]+$/,{ message: 'Only integer numbers are allowed (0-9)', excludeEmptyString: true })
    });
}
