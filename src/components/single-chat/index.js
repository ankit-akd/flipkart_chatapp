import React from 'react'
import './single-chat.css'
import Header from './chat-header';
import ChatBody from './chat-body';
import { getDetailedData } from '../../utils/get-detailed-data';

const SingleChat = ({data, id}) => {

    
    const detailedData = getDetailedData(data,id)
    console.log('detailedData', detailedData);

    return(
        <div className='single-chat--container'>
            <div className='single-chat--container-sub-div'>
            <Header imageURL={detailedData?.imageURL} title={detailedData?.title}/>
            <ChatBody messageList={detailedData?.messageList}/>
            </div>
        </div>
    )

}

export default SingleChat;