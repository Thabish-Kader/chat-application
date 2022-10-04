import React from 'react'
import '../styles/Facilities.css'
import chat from '../assets/char.svg'
import community from '../assets/community.svg'
import facilities from '../assets/facilities.svg'
import team from '../assets/team.svg'
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'

export const Facilities = () => {
    return (
        <section id='services-section'>
            <header className='facilities-header'>
                <h1>Facilities</h1>
                <p>Services we offer for students with problems</p>
            </header>
            <ul className='grid-list'>
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className='facility-item'>
                    <div className='facility-container'>
                        <a href='/chat' className='facility'>
                            <img className='facility-img' src={chat} alt="facility-img"/>
                            <div className='facility-info'>
                                <h1>Collaborate</h1>
                                <p>Collaborate with friends teachers and take your  project to the next level</p>
                                <div className='tags'>
                                    <span className='tag1'>#Collaborate</span>
                                    <span className='tag2'>#Success</span>
                                    <span className='tag3'>#Overcome</span>
                                    <span className='tag4'>#Achieve</span>
                                </div>

                            </div>
                        </a>
                    </div>

                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className='facility-item'>
                    <div className='facility-container'>
                        <a href="issueslist" className='facility'>
                            <img className='facility-img' src={community} alt="facility-img"/>
                            <div className='facility-info'>
                                <h1>Community</h1>
                                <p>Build relationship with community-based programs designed for social wellbeing </p>
                                <div className='tags'>
                                    <span className='tag5'>#Community</span>
                                    <span className='tag6'>#Empathy</span>
                                    <span className='tag7'>#Grow</span>
                                    <span className='tag8'>#Learn</span>
                                </div>
                                </div>

                        </a>
                    </div>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className='facility-item'>
                    <div className='facility-container'>
                        <a className='facility'>
                            <img className='facility-img' src={facilities} alt="facility-img"/>
                            <div className='facility-info'>
                                <h1>Technology</h1>
                                <p>Use technology to interact with firends, teacher to build everlasting relationships</p>
                                <div className='tags'>
                                    <span className='tag5'>#Technology</span>
                                    <span className='tag4'>#Advance</span>
                                    <span className='tag1'>#Pinnacle</span>
                                    <span className='tag2'>#Goals</span>
                                </div>

                            </div>
                        </a>
                    </div>
                </motion.li>
                <motion.li  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className='facility-item'>
                    <div className='facility-container'>
                        <a href="https://github.com/" className='facility'>
                            <img className='facility-img' src={team} alt="facility-img"/>
                            <div className='facility-info'>
                                <h1>Coaction</h1>
                                <p>Work with people for collaborative problem solving which leads to better outcomes</p>
                                <div className='tags'>
                                    <span className='tag7'>#Work</span>
                                    <span className='tag6'>#Spirit</span>
                                    <span className='tag3'>#Energy</span>
                                    <span className='tag8'>#Synergy</span>
                                </div>

                            </div>
                        </a>
                    </div>
                </motion.li>
            </ul>
        </section>
    )
}
