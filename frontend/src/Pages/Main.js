import React from 'react'
import { NavBar } from '../components/NavBar'
import { Banner } from './Banner'
import { Facilities } from './Facilities'
import { Issue } from './Issue'


export const Main = () => {
    return (
        <div id='main'>
        <Banner/>
        {/* <Services/> */}
        <Facilities/>
        <Issue/>
        </div>

    )
}
