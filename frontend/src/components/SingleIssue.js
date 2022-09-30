import React from 'react';
import '../styles/IssuesList.css'
import { doc, deleteDoc, collection } from "firebase/firestore";
import {db } from '../config/firebase'
;

export const SingleIssue = ({data}) => {


    const {Username, Title, Description, Priority} = data;


    const resolveIssue =  async (id) => {
        const deleteIssue = doc(db,'issues', id);
        await deleteDoc(deleteIssue);
        
    }
    


    return (
        <div className='singleIssue-container'>
                <div className='issueList-row'>
                <div className='user'>
                    <h1 className='username-text'>{Username}</h1>
                </div>
                <div className='issue-data'>
                    <p className='issue-title'>{Title}</p>
                    <p className='issue-description'>{Description}</p>

                    {Priority === 'High' && <p className='issue-priority' style={{color:"red"}}>{Priority}</p>}
                    {Priority === 'Low' && <p className='issue-priority' style={{color:"green"}}>{Priority}</p>}
                    {Priority === 'Medium' && <p className='issue-priority' style={{color:"yellow"}}>{Priority}</p>}
                    

                    
                    
                </div>
                <div className='issueList-btns'>
                    <button id='resolve-btn' onClick={() => resolveIssue(data.id)}>Resolve</button>
                    <button id='discuss-btn'>Discuss</button>
                </div>
                </div>
        </div>
    )
}

