/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { CurrentPage } from '../common/contants';
import Footer from '../components/Footer/Footer';

import Header from '../components/Header/Header';
import Launcher from '../components/Launcher/Launcher';
import Conversation from './Conversation/Conversation';
import Course from './Course/Course';
import Home from './Home/Home';
import Library from './Library/Library';
import "./Main.scss";
import './../icons/_fontawesome-all.scss';
function MainChatBot(props) {
    const [showChatBot, setShowChatBot] = useState(false);
    const [showChatContent, setShowChatContent] = useState(false);
    const [currentPage, setCurrentPage] = useState(CurrentPage.HOME);
    let phoneNumber = '';
    useEffect(() => {
        phoneNumber = localStorage.getItem('phoneNumber')
        if (phoneNumber) {            
            setShowChatContent(true)            
        } else {
            localStorage.setItem("firsttime",true)
            setShowChatContent(false)      
        }
    }, [])
 
    const receiveData = (data) => {
        setShowChatBot(data)
    };

    const receiveInfo = (data) => {
        setShowChatContent(data)
    };
    const renderContentPage = () => {
        switch (currentPage) {
            case CurrentPage.HOME:
                return <Home ></Home>
            case CurrentPage.LIBRARY:
                return <Library ></Library>
            case CurrentPage.COURSE:
                return <Course ></Course>
            case CurrentPage.CONVERSATION:
                return <Conversation ></Conversation>
            default:
                return <Home ></Home>
        }
    }
    return (
        <div className="hyperfin-chatbot">
            <div className="launcher_bounce_in" >
                <Launcher onReceiveData={receiveData}></Launcher>
            </div>
            <div className={showChatBot ? "bubble-chatbox customer_chat_bounce_in" : "hidden customer_chat_bounce_out"}>
                <Header setShowChatBot={setShowChatBot} />
                {renderContentPage()}
                <Footer setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            </div>
        </div>
    );
}

export default MainChatBot;