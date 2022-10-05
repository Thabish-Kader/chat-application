import React from 'react'
import '../styles/Services.css';
import chat from '../assets/char.svg';
import community from '../assets/community.svg';
import facilities from '../assets/facilities.svg';
import team from '../assets/team.svg';

export const Services = () => {

    // Observer for intial messagess
    const contaniner = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        console.log("observer working !!!")
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add("show");
            }else {
                entry.target.classList.remove("show");

            }
        })
    } );

    contaniner.forEach((element) => observer.observe(element));

    //observer for cards
    const cardObserver = new IntersectionObserver ((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear')
            }else {
                entry.target.classList.remove("appear");
            }
        })
    });

    const cardContainer = document.querySelectorAll('.card-container');
    cardContainer.forEach((element) => cardObserver.observe(element));

    return (
    <section className='services-container' id='services-section'>

        <div className='hidden'>
            <h1 >Services</h1>
            <p>Services we <span className="animate-span">OFFER</span> to students</p>   
        </div>

        <div className='hidden'>
            <h1 id='work-together'>Work Together</h1>
            <p>Collaborate with friends teachers and take your <span className="animate-span2">PROJECT</span> to the next level</p>   
        </div>

        <div className='hidden'>
            <h1 id='troubleshoot'>Troubleshoot</h1>
            <p>Build relationship with <span className="animate-span3">COMMUNITY</span>-based programs designed for getting to the root cause of your problems </p>
        </div>

        <div className='cards'>
            <div className='card-container'>
                <a href='/chat' className='card-wrapper'>
                    <img className='card-img' src={chat} alt="facility-img"/>
                    <div className='card-info'>
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

            <div className='card-container'>
                <a href='issuesList' className='card-wrapper'>
                    <img className='card-img' src={community} alt="community-img"/>
                    <div className='card-info'>
                    <h1>Community</h1>
                    <p>Build relationship with community-based programs designed for social wellbeing </p>
                        <div className='tags'>
                            <span className='tag1'>#Collaborate</span>
                            <span className='tag2'>#Success</span>
                            <span className='tag3'>#Overcome</span>
                            <span className='tag4'>#Achieve</span>
                        </div>

                    </div>
                </a>
            </div>

            <div className='card-container'>
                <a href='facility' className='card-wrapper'>
                    <img className='card-img' src={facilities} alt="facility-img"/>
                    <div className='card-info'>
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

            <div className='card-container'>
                <a href="https://github.com/" className='card-wrapper'>
                    <img className='card-img' src={team} alt="facility-img"/>
                    <div className='card-info'>
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
        </div>
    </section>
    )
}
