import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import NavBar from '../components/template/navbar'
import Footer from '../components/template/footer'

import '../styles/layout.less'

import Home from '../pages/home'

export default function app() {
    return (
        <div className='container'>
            <NavBar />
            <div className='content'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Redirect from='*' to='/' />
                </Switch>
            </div>
            <Footer />
        </div>
    )
}