import React, { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ApplicationContext from './context/ApplicationContext'
import App from './App'

export default function OuterApp() {
    return (
        <BrowserRouter>
            <ApplicationContext>
                <App />
            </ApplicationContext>
        </BrowserRouter>
    )
}