import React from "react";
import PhoneWordModel from "../models/phoneword-model";
import { Formik, Field, Form, ErrorMessage } from "formik";

import Button from "@kiwicom/orbit-components/lib/Button";
import InputField from "@kiwicom/orbit-components/lib/InputField";
import Alert from "@kiwicom/orbit-components/lib/Alert";

export default () => { 
    return (
        <Formik validateOnChange={false} onSubmit={(values, obj) => obj.setSubmitting(false)} initialValues={PhoneWordModel.initialValues} validationSchema={PhoneWordModel.ValidationSchema} >
            {props => {
            const { isSubmitting, values, errors, handleChange, handleBlur } = props;
                return (
                    <Form>
                        <div className="field">
                            <InputField label="Phone Number" name="number" value={values.number} onBlur={handleBlur} onChange={handleChange} placeholder="Phone Number" type="text" />
                            {errors.number ? <Alert type="warning" title={null} icon><ErrorMessage name="number"/></Alert> : null}
                        </div>
                        <Button type="submit" disabled={isSubmitting}> Compute Phone Words </Button>
                    </Form>
                );
            }}
        </Formik>           
    )
}