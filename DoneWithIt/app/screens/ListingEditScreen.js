import React from 'react'
import Screen from '../Components/Screen'
import * as Yup from 'yup'

import { AppForm,AppFormField,AppFormPicker,SubmitButton } from '../Components/Forms'
import CategoryPickerItem from '../Components/CategoryPickerItem'
import FormImagePicker from '../Components/Forms/FormImagePicker'
import useLocation from '../hooks/useLocation'
import listingsApi from '../api/listings'

const validationSchema = Yup.object().shape({
    title:Yup.string().required().min(1).label('Title'),
    price:Yup.number().required().min(1).max(100000).label('Price'),
    description:Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
    images: Yup.array().min(1,"Please select at least one Image."),
})

const catgories = [
    {l:'Furniture',value:1,IconName:'floor-lamp',backgroundIconColor:'tomato'},
    {l:'Cars',value:2,IconName:'car',backgroundIconColor:'orange'},
    {l:'Cameras',value:3,IconName:'camera',backgroundIconColor:'yellow'},
    {l:'Games',value:4,IconName:'gamepad',backgroundIconColor:'green'},
    {l:'Clothing',value:5,IconName:'shoe-heel',backgroundIconColor:'teal'},
    {l:'Sports',value:6,IconName:'basketball',backgroundIconColor:'skyblue'},
    {l:'Movies & Music',value:7,IconName:'headphones',backgroundIconColor:'darkblue'},
    {l:'Books',value:8,IconName:'book-open-variant',backgroundIconColor:'purple'},
    {l:'Other',value:9,IconName:'window-maximize',backgroundIconColor:'grey'},
]

export default function ListingEditScreen() {
    const location = useLocation()

    const handleSubmit = async (listing) => {
        const result = await listingsApi.addListing({ ...listing, location })
        if (!result.ok) {
            alert('Could not save the listing. ERROR: '+result.problem)
        } else {
            alert('Success')
            
        }
        
    }
    return (
        <Screen>
            <AppForm
            initialValues={{
                title:'',
                price:'',
                description:'',
                category:null,
                images:[],
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            >
                <FormImagePicker name="images"/>
                <AppFormField
                    maxLength={255}
                    name='title'
                    placeholder='Title'
                />
                <AppFormField
                    keyboardType='numeric'
                    maxLength={8}
                    name='price'
                    placeholder='Price'
                    width='30%'
                />
                <AppFormPicker
                    items={catgories}
                    name='category'
                    numberOfColumns={3}
                    placeholder='Category'
                    //PickerItemComponent={CategoryPickerItem}
                    width='50%'
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    name='description'
                    numberOfLines={3}
                    placeholder='Description'
                />
                <SubmitButton title='Post'/>
            </AppForm>
        </Screen>
    )
}
