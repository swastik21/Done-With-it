import React, { useState } from 'react'
import { Image,StyleSheet } from 'react-native'
import * as Yup from 'yup'

import Screen from '../Components/Screen'
import { AppForm, AppFormField, SubmitButton } from '../Components/Forms'

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label('Email'),
    password: Yup.string().required().min(8).max(16).label('Password')
})

export default function LoginScreen() {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>

            <AppForm 
            initialValues={{email:'',password:''}} 
            onSubmit={(values)=> console.log(values)} 
            validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon='email'
                    keyboardType='email-address'
                    name='email'
                    placeholder='Email'
                    textContentType='emailAddress'
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon='lock'
                    name='password'
                    placeholder='Password'
                    secureTextEntry
                    textContentType='password'
                />
                <SubmitButton title='LOGIN'/>
            </AppForm>
            
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:10
    },
    error: {
        color: 'red',
    },
    logo:{
        width:80,
        height:80,
        marginTop:50,
        marginBottom:20,
        alignSelf:'center'
    }
})