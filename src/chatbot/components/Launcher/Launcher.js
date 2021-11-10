import React, { useState } from 'react'
function Launcher(props) {
    const { onReceiveData } = props;
    const [showChatBot, setShowChatBot] = useState(true)

    const chatOpen = () => {
        setShowChatBot(!showChatBot)
        onReceiveData(showChatBot)
    }
    return (
        <div className="bubble-chaticon" onClick={chatOpen} style={{ cursor: 'pointer'}}>              
        </div>
    );
}

export default Launcher;
