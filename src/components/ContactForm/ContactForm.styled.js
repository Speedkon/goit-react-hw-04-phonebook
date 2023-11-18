import { Form as FormikForm,
        Field as FormikField,
        ErrorMessage as FormikError, } from "formik";
import styled from "styled-components";

export const Form = styled(FormikForm)`
    margin-bottom: 40px;
`;

export const Field = styled(FormikField)`
    display: block;
    margin: 8px 0;
    padding: 4px 8px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #000033;
`;

export const ErrorMessage = styled(FormikError)`
    font-size: 16px;
    color: #800000;
`;

export const Label = styled.label`
    font-size: 18px;
    color: #000033;
`;

export const Button = styled.button`
    padding: 8px 16px;
    color: #000033;
    font-size: 16px;
    background-color: transparent;
    border: none;
    box-shadow:rgb(130, 138, 158) 0px 2px 5px;
    &:hover{
    background-color: #ccccff;
    box-shadow: rgb(130, 138, 158) 0px 2px 8px;
    }
`;