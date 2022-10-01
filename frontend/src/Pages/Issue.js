import React from 'react'
import '../styles/Issue.css'
import omega from '../assets/tom.svg'
import {useForm} from 'react-hook-form';
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup'
import {addDoc, collection} from 'firebase/firestore'
import {auth, db} from '../config/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';

export const Issue = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title : yup.string().required("Title is required"),
        description : yup.string().required("Description is required"),
        priority : yup.string()
    });

    const {register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    const issueRef = collection(db, "issues");

    const onCreatePost = async (data) => {
        await addDoc(issueRef, {
            Title : data.title,
            Description: data.description,
            Priority : data.priority,
            Username : user?.displayName,
            userId : user?.uid,
        });

        navigate('/issueslist');
    };



    return (
        <section id="issue" className='issue-container'>
            <div className='issue-quote'>
            <span className='quote'>
                “Obstacles are those frightful things you see when you take your eyes off your goal.” – Henry Ford.
            </span>
            <img src={omega} alt='aspiration' className='issue-img'/>
            </div>

                <form className="issue-form" onSubmit={handleSubmit(onCreatePost)}>
                    <h1 className="issue-heading">Issue</h1>
                    <label className='issue-label'>Issue Title</label>
                    <input id = "issue-input" type='text' placeholder="Enter Issue..." {...register('title')}/>
                    <label className='issue-label'>Description of Issue</label>
                    <textarea id= "issue-textarea" placeholder="Describe your Issue" {...register('description')}/>
                    <select className='dropdown' {...register("priority")}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                    </select>

                    <button type = "submit" className="issue-btn">Submit</button>
                </form>
        </section>
    )
}
