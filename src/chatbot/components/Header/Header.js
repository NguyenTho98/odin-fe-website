/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import img from '../../images/icon_botedu.png';
import "./Header.scss";
function Header(props)  {
    const { setShowChatBot } = props;
        return (
            <div className="d-flex header-chat-bot">
                <div className="header-image">
                    <img src={img} className="image-bot" alt="image-bot"></img>
                </div>
                <div className="d-flex header-right">
                    <div className="title-header">
                        Trợ lý EBOT
                    </div>
                    <div className="icon" onClick={()=>setShowChatBot(false)}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
            </div>
        );
}
 
export default Header;