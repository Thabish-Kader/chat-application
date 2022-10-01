import React from 'react'
import '../styles/Facilities.css'

export const Facilities = () => {
    return (
        <section id='facilities'>
            <header className='facilities-header'>
                <h1>Facilities</h1>
                <p>Services we offer for students with problems</p>
            </header>
            <ul className='grid-list'>
                <li className='facility1'>
                    <div className='facility-container'>
                        <a className='facility'>
                            <img className='facility-img' alt="facility-img"/>
                            <div className='facility-info'>
                                <h5>Facility......</h5>
                                <p>Facility info.........</p>
                                <span>#Help</span>
                                <span>#Academic</span>
                                <span>#Help</span>
                                <span>#Depressed</span>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
        </section>
    )
}
