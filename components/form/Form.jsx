import React from 'react'
import {useForm} from 'react-hook-form';

function Form({children}) {
    const { handleSubmit } = useForm();

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>{children}</Form>
    )
}

export default Form
