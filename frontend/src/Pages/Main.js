import React from 'react'
import { Banner } from './Banner'
import { Facilities } from './Facilities'
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
