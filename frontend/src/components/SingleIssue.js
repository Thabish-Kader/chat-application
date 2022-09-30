import React from 'react';
import '../styles/IssuesList.css'
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const SingleIssue = ({data}) => {
    const {Username, Title, Description, Priority} = data;
    const [user] = useAuthState(auth);
    return (
        <div className='singleIssue-container'>
                <div className='issueList-row'>
                <div className='user'>
                    <h1 className='username-text'>{Username}</h1>
                </div>
                <div className='issue-data'>
                    <p className='issue-title'>{Title}</p>
                    <p className='issue-description'>{Description}</p>
                    <p className='issue-priority'>{Priority}</p>
                </div>
                <div className='issueList-btns'>
                    <button id='resolve-btn'>Resolve</button>
                    <button id='discuss-btn'>Discuss</button>
                </div>
                </div>
        </div>
    )
}

