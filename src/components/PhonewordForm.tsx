import React from "react";
import PhoneWordModel from "../models/phoneword-model";
import { Formik, Field, Form, ErrorMessage } from "formik";

export default () => { 
    return (
        <Formik validateOnChange={false} onSubmit={(values, obj) => obj.setSubmitting(false)} initialValues={PhoneWordModel.initialValues} validationSchema={PhoneWordModel.ValidationSchema} >
            {props => {
            const { isSubmitting, status, errors } = props;
                return (
                    <Form>
                        <div className="field">
                            <label>Enter Phone Number</label>
                            <Field name="number" placeholder="Phone Number" type="text" />
                            <p><ErrorMessage name="number"/></p>
                        </div>
                        <button type="submit" disabled={isSubmitting}> Check Phone Word </button>
                    </Form>
                );
            }}
        </Formik>           
    )
}