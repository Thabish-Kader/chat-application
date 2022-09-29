import React from 'react'
import '../styles/Issue.css'
import omega from '../assets/tom.svg'
import Form from 'react-bootstrap/Form';



export const Issue = () => {
    return (
        <section id="issue" className='issue-container'>
            <div className='issue-quote'>
            <span className='quote'>

                “Obstacles are those frightful things you see when you take your eyes off your goal.” – Henry Ford.
            </span>
            <img src={omega} alt='aspiration' className='issue-img'/>
            </div>

                <form className="issue-form">
                    <h1 className="issue-heading">Issue</h1>
                    <label className='issue-label'>Username</label>
                    <input id = "issue-input" type='text' placeholder="Enter your Username"/>

                    <label className='issue-label'>Description of Issue</label>
                    <textarea id= "issue-textarea" placeholder="Describe your Issue"/>

                    <Form.Select aria-label="Default select example" className='dropdown'>
                    <option>Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                    </Form.Select>

                    <button className="issue-btn" type='submit'>Submit</button>
                </form>

        </section>
    )
}
