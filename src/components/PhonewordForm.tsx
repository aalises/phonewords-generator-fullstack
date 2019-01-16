import React from "react";
import PhoneWordModel from "../models/phoneword-model";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styled from "styled-components";

import Button from "@kiwicom/orbit-components/lib/Button";
import InputField from "@kiwicom/orbit-components/lib/InputField";
import Alert from "@kiwicom/orbit-components/lib/Alert";

const FormBox = styled.div`
    width: 35vw
    border: 1px solid #D3D3D3
    border-radius: 5px
    padding: 1.5rem
`

const SubmitButton = styled(Button)`
    margin-top: 0.5rem
`

export default ({onSubmit}) => { 
    return (
        <Formik validateOnChange={false} onSubmit={ props => onSubmit(props)}  initialValues={PhoneWordModel.initialValues} validationSchema={PhoneWordModel.ValidationSchema} >
            {props => {
            const { handleSubmit, touched, values, errors, handleChange, handleBlur } = props;
                return (
                    <FormBox>
                        <Form> 
                            <InputField label="Phone Number" name="number" value={values.number} onBlur={handleBlur} onChange={handleChange} placeholder="Phone Number" type="text" />
                            {errors.number ?
                                <Alert type="warning" title={null} icon><ErrorMessage name="number"/></Alert> : 
                                touched.number ? 
                                    <Alert type="success" title={null} icon>{PhoneWordModel.messages.success}</Alert> :
                                    <Alert title={null} icon>{PhoneWordModel.messages.info}</Alert>
                            }
                            <SubmitButton onClick={handleSubmit} type="submit"> Compute Phone Words </SubmitButton>
                        </Form>
                    </FormBox>
                );
            }}
        </Formik>           
    )
}