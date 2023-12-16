import React from 'react'
import './chat.css'
import ChatList from '../chat-list';

const Chat = ({data, id, setId}) => {

    return(
        <section className={`chat--container ${id && 'width-50'}`}>
            <ChatList data={data} id={id} setId={setId}/>
        </section>
    )

}

export default Chat;