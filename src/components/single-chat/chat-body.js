import React, { useState } from 'react'
import { getTimeFormat } from '../../utils/get-time-format'

const ChatBody = ({messageList}) => {

    const reversedArray = [...messageList].reverse()

    const isLastUser = messageList[messageList.length - 1]?.sender === 'USER'

    const [messages, setMessages]  = useState([]);

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            const messageContent = event.target.value;
            const newMessage = {
                id: messages.length+1,
                sender: 'USER',
                messageType: 'text',
                content: messageContent,
                timestamp: new Date().toISOString(),
            };
            setMessages([...messages,newMessage]);
            event.target.value = '';
        }
    };
    

    return(
        <div className='chat-body--container'>
            <div className='chat-body--flex'>
                {reversedArray?.map((message, index)=>{
                    return(
                        <div key={index}>
                            {message.sender === "USER" ? (
                                <UserMessage message={message}/>
                            ):(
                                <SupportMessage message={message} isLastUser={isLastUser}/>
                            )}
                            </div>
                    )
                })}
            </div>
            <div  className='chat-body--input-container'>
                <input
                    type='text'
                    className='chat-body--input'
                    placeholder='Type a message'
                    onKeyUp={handleKeyPress}
                />
            </div>
        </div>
    )
}

const UserMessage = ({message}) => {

    return(
        <div style={{display:'flex', width:"100%", justifyContent:"right",transform:'translate(-20px,-30px)'}}>
        <div className='user-message--container'>
            <div>
                {message.message}
            </div>
            <div className='user-message--time'>
                <div>{getTimeFormat(message.timestamp)}</div>
                <div>
                    <img
                    alt="could not load"
                    src={"https://cdn-icons-png.flaticon.com/512/60/60727.png"}
                    className='user-message--image'
                    />
                </div>
            </div>
        </div>
        </div>

    )
}

const SupportMessage = ({message, isLastUser}) =>{


    return(
        <div style={{display:'flex', width:"100%", justifyContent:"left", transform:'translate(20px,-30px)'}}>
            <div className='support-message--container'>
                <div>
                    {message.message}
                </div>
                {message.messageType !== "optionedMessage" ? (
                <div className='support-message--time'>
                    <div>{getTimeFormat(message.timestamp)}</div>
                </div>)
                : message.options.map((optionMessage,index) => {
                    return(
                        <div key={index} className={`support-message--options ${isLastUser && 'disabled-background'}`}>
                            <div className='support-message--options-sub-container'>
                                <div>
                                {optionMessage.optionText}
                                </div>
                                <div>
                                {optionMessage.optionSubText}
                                </div>
                            </div>
                         </div>
                    )
                })  
            }

            </div>
        </div>
    )
}
export default ChatBody;