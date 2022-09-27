import React from 'react';
import '../styles/IssuesList.css'

export const SingleIssue = ({
    name,
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange
}) => {

    return (
        <div className='singleIssue-container'>
                <div className='issueList-row'>
                <div className='user'>
                    <img className="user-img" src='' alt='user'/>
                    <h1 className='username-text'>user</h1>
                </div>
                <div className='issue-data'>
                    <p className='issue-title'>title</p>
                    <p className='issue-description'>description</p>
                    <p className='issue-priority'>priority</p>
                </div>
                <div className='issueList-btns'>
                    <button id='resolve-btn'>Resolve</button>
                    <button id='discuss-btn'>Discuss</button>
                </div>
                </div>
        </div>
    )
}

