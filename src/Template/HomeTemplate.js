
import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export const HomeTemplate = (props) => {
    let { Component, ...restParam } = props;
    return (
        <Route {...restParam} render={(propsRoute) => {
            return <>
                <Header />
                <Component {...propsRoute} />
                <Footer />
            </>
        }} />

    )
}