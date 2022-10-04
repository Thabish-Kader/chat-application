import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import { auth, db } from '../../config/firebase'
import '../../styles/ChatRoom.css'

export const SendMessage = ({scroll}) => {
    const [input, setInput] = useState("")

    const sendMessage = async (e) => {
        e.preventDefault();
        if(input === "") {
            alert("Please enter a valid message")
            return
        }
        const {uid, displayName} = auth.currentUser;

        await addDoc(collection(db, 'messages'), {
            text : input,
            name: displayName,
            uid, 
            timestamp: serverTimestamp()
        })
        setInput("");
        scroll.current.scrollIntoView({behavior:'smooth'})
    }



    return (
        <div>
        <form className="message-form" onSubmit={sendMessage}>
            <input className= "message-input" type="text" placeholder="Message" value = {input} onChange={e => setInput(e.target.value)}/>
            <button className='message-btn'>Send</button>
        </form>
        </div>

    )
}
