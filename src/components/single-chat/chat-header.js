import React from "react";

const ChatHeader = ({imageURL, title}) => {

    return(
        <header className="chat-header--container">
            <div>
                <img
                    alt="failed to load"
                    src={imageURL}
                />
            </div>
            <div>
                {title}
            </div>
        </header>
    )

}

export default ChatHeader