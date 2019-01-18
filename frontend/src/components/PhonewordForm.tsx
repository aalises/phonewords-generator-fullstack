import React from "react";
import PhoneWordModel from "../models/phoneword-model";
import PhoneKeyboard from "./PhoneKeyboard";
import { Formik, Form, ErrorMessage } from "formik";
import styled from "styled-components";

import Button from "@kiwicom/orbit-components/lib/Button";
import InputField from "@kiwicom/orbit-components/lib/InputField";
import Alert from "@kiwicom/orbit-components/lib/Alert";

const MAX_LENGTH = 6 // Max length of the word

const FormBox = styled.div`
    width: 35vw
    border: 1px solid #D3D3D3
    border-radius: 3px
    padding: 1.5rem

    @media (max-width: 768px) {
        width: 100%
    }
`

const SubmitButton = styled(Button)`
    margin-top: 0.5rem
`

//Adds a new number to the input not exceeding the max length, or subtract one
const computeNewValueKeyboard = (erase : boolean, val: string, currValue : string) : string => {
    if(erase){
        return currValue.slice(0,-1)
    }else{
        const newValue =  currValue + val;
        return newValue.length <= MAX_LENGTH ? currValue + val : currValue
    }
}

export default ({onSubmit, isSubmitting}) => { 
    return (
        <Formik validateOnChange={false} onSubmit={ props => onSubmit(props)}  initialValues={PhoneWordModel.initialValues} validationSchema={PhoneWordModel.ValidationSchema} >
            {props => {
            const { handleSubmit, setValues, resetForm, touched, values, errors, handleChange, handleBlur } = props;
                return (
                    <FormBox>
                        <Form> 
                            <InputField dataTest="phoneword-input" maxLength={MAX_LENGTH} label="Phone Number" name="number" value={values.number} onBlur={handleBlur} onChange={handleChange} placeholder="Phone Number" type="text" />
                            {errors.number ?
                                <Alert dataTest="phoneword-message" type="warning" title={null} icon><ErrorMessage name="number"/></Alert> : 
                                touched.number ? 
                                    <Alert type="success" dataTest="phoneword-message" title={null} icon>{PhoneWordModel.messages.success}</Alert> :
                                    <Alert dataTest="phoneword-message" title={null} icon>{PhoneWordModel.messages.info}</Alert>
                            }
                            <PhoneKeyboard setValues={(val,erase) => setValues({number: computeNewValueKeyboard(erase, val, values.number)})} resetForm={() => resetForm()} />
                            <SubmitButton dataTest="submit-phoneword-button" disabled={isSubmitting} type="secondary" onClick={handleSubmit} > Compute Phone Words </SubmitButton>
                        </Form>
                    </FormBox>
                );
            }}
        </Formik>           
    )
}