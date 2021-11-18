//CREATED BY SWASTIK POOJARI

import { useFormikContext } from 'formik'
import React from 'react'
import ErrorMessage  from './ErrorMessage'
import ImageInputList from '../ImageInputList'

export default function FormImagePicker({name}) {
    const { errors, touched, setFieldValue, values } = useFormikContext()
    const ImageUris = values[name]

    const handleAdd = uri => {
        setFieldValue(name,[...ImageUris, uri])
    }
    const handleRemove = uri => {
        setFieldValue(name,ImageUris.filter(imageuri => imageuri !== uri))
    }
    return (
        <>
            <ImageInputList
                imageUris={ImageUris}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

