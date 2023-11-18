import { Formik} from 'formik';
import * as Yup from 'yup';
import { Field, Form, ErrorMessage, Label, Button } from './ContactForm.styled'

const schema = Yup.object().shape({
    name: Yup.string().min(3, "Too short").required('Required'),
    number: Yup.string().matches(/^(\d{2,}-\d{2,}-\d{2,}|\d{2,}-\d{2,}|\d{5,})$/, "It must be min 5 numbers (1234567 or 123-45-67)").required('Required'),
});

export const ContactForm = ({onAdd}) => {
    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
            }}
            validationSchema={schema}
            onSubmit={(values, actions) => {
                onAdd(values);
                actions.resetForm();
            }}
        >

            <Form autoComplete="off">
                <Label>
                    Name
                        <Field type="text" name="name" placeholder="New contact"/>
                        <ErrorMessage name="name" component="p"/>
                </Label>
                <Label>
                    Number
                        <Field type="tel" name="number" placeholder="Enter a number"/>
                        <ErrorMessage name="number" component="p"/>
                </Label>
                <Button type="submit">Add contact</Button>
            </Form>
        </Formik>
    )
}