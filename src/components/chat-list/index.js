import React, { Fragment } from 'react';
import './chat-list.css'
import { getDataFormat } from '../../utils/get-date-format';
import { getLatestMessage } from '../../utils/get-latest-message';

const ChatList = ({data,id,setId}) => {

    return(
        <div>
            {data.map((item,index)=>{
                return(
                    <Card item={item} key={index} id={id} setId={setId}/>
                )
            })}
        </div>
    )

}

const Card = ({item, id, setId}) => {

    const date = getDataFormat(item.latestMessageTimestamp)

    const handleContainerClick = () =>{
        setId(item.id)
    }

    return(
        <Fragment>
        <div className={`card--container ${item.id === id && 'card--container-background'}`} onClick={handleContainerClick}>
            <div className='card--left-column'>
            <div className='card--image'>
                <img
                    src={item.imageURL}
                    alt="img could not be loaded"
                />
            </div>
            <div className='card--info-container'>
                <div className='class-info-container-flex'>
                    <div><strong>{item.title}</strong></div>
                    <div><strong>{`ORDER ${item?.orderId?.toUpperCase()}`}</strong></div>
                </div>
                <div className='card--secondary-message'>{getLatestMessage(item.messageList)}</div>
            </div>
            </div>
            <div className='card--date'>{date}</div>
        </div>
        </Fragment>
    )
}

export default ChatList