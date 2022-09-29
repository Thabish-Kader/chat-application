import React from 'react'
import { NavBar } from '../components/NavBar'
import { Banner } from './Banner'
import { Issue } from './Issue'
import { Services } from './Services'

export const Main = () => {
    return (
        <div id='main'>

        <Banner/>
        <Services/>
        <Issue/>
        </div>

    )
}
