import React from 'react';
import '../../styles/ChatRoom.css';
import {auth} from '../../config/firebase';

export const Message = ({message}) => {

    const {uid} = auth.currentUser;
    console.log(message);

    return (
            <div className={`message-container ${uid == message.uid ? 'right-msg' : 'default'}`}>
                <div className={`user-inputs ${uid == message.uid ? 'sent' : 'recieved'}`}>
                    <h5 className='user-name'>{message.name}</h5>
                    <h5 className='user-message'>{message.text}</h5>
                </div>
            </div>
    )
}
