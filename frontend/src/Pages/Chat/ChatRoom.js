import React, { useEffect, useRef, useState } from 'react'
import {db} from '../../config/firebase'
import { collection, onSnapshot, query, orderBy} from 'firebase/firestore'
import { Message } from './Message';
import { SendMessage } from './SendMessage';
import {Link} from 'react-router-dom';
import '../../styles/ChatRoom.css'

export const ChatRoom = () => {
    const [messages,setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(collection(db,'messages'), orderBy('timestamp'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = []
            querySnapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id});
            });
            setMessages(messages)

        });
        return () => unsubscribe();
    },[])

    

    return (
        
        <main className='chatroom-container'>
            <div className='navigation-component'>
                <p>logo</p>
                <div className='chatroom-links'>
                    <p>Home</p>
                    <p>Services</p>
                    <p>Issues</p>
                </div>
                    <button className='bck-btn'>Back</button>
            </div>
            <div className='message-component'>
            {messages && 
                    messages.map((message) => (
                        <Message key={message.id} message={message}/>
                    ))}
            </div>

            
            <div className='send-message-container'>
            <SendMessage scroll={scroll}/>
            <span ref={scroll}></span>
            </div>
        </main>


    )
}
