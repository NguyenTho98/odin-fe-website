/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { generate_id, generate_key, get_local_storage, is_empty, reander_text_links, mask_info, extract_name, get_current_time } from '../../common/utils'
import './Conversation.scss'
const SOURCE_SITE = "openaccountpilot.vps.com.vn"

const CHAT_IDLE = 5 * 60;
const CHAT_TIMEOUT = 15 * 60;
// const SERVER_CHATBOT = "https://hyperfin-test.financialdeepmind.com:5050/webhooks/vps_rest/webhook"
// const SERVER_CHATBOT = "https://chatbot.vps.com.vn/webhooks/vps_rest/webhook"
const SERVER_CHATBOT = "http://10.32.13.76:5006/webhooks/rest/webhook"
// const SERVER_CHATBOT = "http://localhost:5005/webhooks/vps_rest/webhook"

// const SERVER_CONTACT_CENTER = "wss://contactcenter.vps.com.vn:8001/websocket"
const SERVER_CONTACT_CENTER = "wss://testcontactcenter.vps.com.vn:8001/websocket"
const session_id = generate_id()
const MESSAGE_START = {
    "recipient_id": session_id,
    "text": "Chào anh/chị. Em là chatbot EBOT. Em có thể giúp gì cho anh/chị ạ?",
    "time": get_current_time()
}

function Conversation(props) {
    let timer = 0;
    let count = 0;
    let ws = null;
    let ccSessionId = null;
    let gender = "anh/chị";
    let name = "";
    const [history, setHistory] = useState([MESSAGE_START]);
    const [handOff, setHandOff] = useState(false);
    const chatboxInputRef = useRef(null);
    const chatboxBodyRef = useRef(null);


    const setPersonalInfo = () => {
        if (localStorage.getItem("name") != null) {
            name = extract_name(localStorage.getItem("name"))
        }
        if (localStorage.getItem("gender") === "Nam") {
            gender = "anh"
        }

        if (localStorage.getItem("gender") === "Nữ") {
            gender = "chị"
        }
        MESSAGE_START.text = "Chào " + gender + " " + name + ". Em là chatbot EBOT. Em có thể giúp gì cho " + gender + " ạ?"
    }
    useEffect(() => {
        setPersonalInfo()
        if (localStorage.getItem("firsttime") === "true") {
            const set_gender_msg = {
                "sender": get_local_storage("noti_key", session_id),
                "message": '/set_slot{"call_name": "' + gender + '"}',
            }
            sendData(set_gender_msg)
            localStorage.setItem("notify", null)
            localStorage.setItem("firsttime", false)
        }

        if (localStorage.getItem("reset") === "false") {
            let history_json = JSON.parse(localStorage.getItem("history"))
            if (localStorage.getItem("notify") !== "null") {
                let notify = {
                    "recipient_id": session_id,
                    "msg_type": "notify",
                    "text": localStorage.getItem("notify"),
                    "time": get_current_time()
                }
                history_json.push(notify)
                localStorage.setItem("notify", null)

                const set_gender_msg = {
                    "sender": get_local_storage("noti_key", session_id),
                    "message": '/set_slot{"call_name": "' + gender + '"}',
                }
                sendData(set_gender_msg)
            }
            setHistory(history_json)
            localStorage.setItem("reset", true)

        } else {
            localStorage.setItem("history", JSON.stringify([MESSAGE_START]))
            if (!handOff) {
                const reset_form_msg = {
                    "sender": get_local_storage("noti_key", session_id),
                    "message": '/restart',
                }
                sendData(reset_form_msg)
                // set gender
                const set_gender_msg = {
                    "sender": get_local_storage("noti_key", session_id),
                    "message": '/set_slot{"call_name": "' + gender + '"}',
                }
                sendData(set_gender_msg)
            }
        }
        chatScroll()
        timer = setInterval(chatTimeout, 1000);
    }, [])
    useEffect(() => {
        return () => {
            localStorage.setItem("history", JSON.stringify(history))
            localStorage.setItem("reset", false)
        }
    }, [])

    const chatScroll = () => {
        if (chatboxBodyRef.current != null) {
            setTimeout(() => {
                chatboxBodyRef.current.scrollTop = chatboxBodyRef.current.scrollHeight + 999
            }, 100)
        }
    }

    const chatTimeout = () => {
        count += 1;
        if (count === CHAT_IDLE) {
            const bot_res = {
                "recipient_id": get_local_storage("noti_key", session_id),
                "text": gender + " có cần EBOT bot hỗ trợ thêm gì không ạ?",
                "time": get_current_time()
            }
            setHistory([...history, bot_res])
            chatScroll()
            setHandOff(false)
            const reset_form_msg = {
                "sender": get_local_storage("noti_key", session_id),
                "message": '/restart',
            }
            sendData(reset_form_msg)
        }
        if (count >= CHAT_TIMEOUT) {
            clearInterval(timer);
            const bot_res = {
                "recipient_id": get_local_storage("noti_key", session_id),
                "text": "Cảm ơn " + gender + " đã chat với EBOT bot. Chúc " + gender + " ngày giao dịch thành công và vui vẻ!",
                "time": get_current_time()
            }
            setHistory([...history, bot_res])
            chatScroll()
            // init to syns history
            contactCenterInit()
        }
    }

    const chatSubmit = (event) => {
        event.preventDefault();
        count = 0;
        if (!is_empty(chatboxInputRef.current.value)) {
            const user_msg = {
                "sender": get_local_storage("noti_key", session_id),
                "message": chatboxInputRef.current.value.trim(),
                "message_mask": mask_info(chatboxInputRef.current.value),
                "time": get_current_time()
            }
            chatboxInputRef.current.value = ''
            // setHistory([...history, user_msg])
            chatScroll()
            sendData(user_msg)
        } else {
            alert("Xin vui lòng nhập tin nhắn của anh/chị")
        }
    }

    const buttonClick = (button = {}) => {
        if (!handOff) {
            // send to bot
            const user_msg = {
                "sender": get_local_storage("noti_key", session_id),
                "message": button.payload,
                "message_mask":  mask_info(button.payload),
                "time": get_current_time()
            }
            chatboxInputRef.current.value = ''
            sendData(user_msg)
            user_msg["message"] = button.title
            setHistory([...history, user_msg]);
            chatScroll()
        } else {
            // send to contact center
            chatboxInputRef.current.value = ''
            const user_msg = {
                "sender": get_local_storage("noti_key", session_id),
                "message": button.title,
                "time": get_current_time()
            }
            setHistory([...history, user_msg]);
            chatScroll()
            contactCenterLogin(button.queueId)
        }
    }

    const sendData = async (user_msg) => {
        if (!handOff) {
            // send messsage to bot
            const config = {
                headers: {
                    'Content-Type': 'text/plain'
                }
            }
            try {
                let bot_res = await axios.post(`${SERVER_CHATBOT}`, user_msg, config)
                let i
                for (i=0;i<bot_res.data.length;i++) {                    
                    bot_res.data[i].time = get_current_time()
                    console.log(bot_res.data[i])
                }
                const { data } = bot_res
                const historyNew = [...history];
                historyNew.push(user_msg);
                if (!is_empty(data)) {
                    if (data[0]['text'] !== "/handoff") {
                        setHistory([...historyNew, ...data])
                        chatScroll()
                    }
                    else {
                        setHandOff(true)
                        const bot_res = {
                            "recipient_id": get_local_storage("noti_key", session_id),
                            "text": "Dạ, EBOT đang chuyển cuộc trò chuyện của " + gender + " sang tổng đài viên hỗ trợ. " + gender + " xin vui lòng chờ trong giây lát.",
                            "time": get_current_time()
                        }
                        setHistory([...history, bot_res])
                        chatScroll()
                        // init to handoff
                        contactCenterInit()
                    }
                }
            } catch (error) {
                console.log('send_message catch error', error)
            }
        }
        if (handOff) {
            // send message to contact center
            if (ccSessionId != null) {
                const data = {
                    "id": user_msg.sender,
                    "sessionId": ccSessionId,
                    "action": "SendMsg",
                    "customerId": user_msg.sender,
                    "clientType": "customer",
                    "msg": user_msg.message,
                    "companyId": "186",
                    "status": 1
                }
                contactCenterSend(data)
            }
        }
    }

    const contactCenterGetGroups = (sender) => {
        const data = {
            "action": "getListQueueClient",
            "companyId": "186",
            "customerId": sender
        }
        contactCenterSend(data)
    }

    const contactCenterLogin = (queueId) => {
        let msg_history = getHistory()
        // let msg_history = []

        const message = {
            "hostname": SOURCE_SITE,
            "name": localStorage.getItem("name"),
            "email": "",
            "companyId": "186",
            "msgClient": "",
            "queue": queueId
        }
        const data = {
            "action": "BotLogin",
            "clientType": "customer",
            "queue": queueId,
            "searchAlgorithm": 3,
            "customerId": get_local_storage("noti_key", session_id),
            "msg": JSON.stringify(message),
            "keyHistory": "",
            "lstFirstMsg": msg_history
        }

        contactCenterSend(data)
    }

    const contactCenterSync = (queueId) => {
        let msg_history = getHistory()

        const message = {
            "hostname": SOURCE_SITE,
            "name": localStorage.getItem("name"),
            "email": "",
            "companyId": "186",
            "msgClient": "",
            "queue": queueId
        }
        const data = {
            "action": "BotSyncChat",
            "clientType": "customer",
            "queue": queueId,
            "searchAlgorithm": 3,
            "customerId": get_local_storage("noti_key", session_id),
            "msg": JSON.stringify(message),
            "keyHistory": "",
            "lstFirstMsg": msg_history
        }
        contactCenterSend(data)
        // change into bot
        setHandOff(false)
    }

    const contactCenterInit = () => {
        if (ws === null) {
            // connect to contact center
            ws = new WebSocket(SERVER_CONTACT_CENTER)
            ws.onopen = () => {
                // get list group
                contactCenterGetGroups(session_id)
            }
            ws.onmessage = (event) => {
                try {
                    const response = JSON.parse(event.data)
                    contactCenterResponse(response)
                } catch (error) {
                    console.log('ERROR RESPONSE', error)
                }
            }
        }
    }

    const contactCenterSend = (data) => {
        try {
            if (ws.readyState === 1) {
                ws.send(JSON.stringify(data))
            }
        } catch (error) {
            console.log('ERROR RESPONSE', error)
        }
    }

    const contactCenterResponse = (response) => {
        if (response['eventName'] === "ListQueueClient") {
            if (count < CHAT_TIMEOUT) {
                const buttons = [];
                const value = JSON.parse(response['value'])
                for (var queue in value['queue']) {
                    const button = {
                        title: value['queue'][queue]['queueName'],
                        queueId: value['queue'][queue]['queueId'],
                        algorithmSearchId: value['queue'][queue]['algorithmSearchId'],
                    }
                    buttons.push(button)
                }
                const cc_res = {
                    "text": gender + " vui lòng chọn nhóm hỗ trợ:",
                    "buttons": buttons
                }
                setHistory( [...history, cc_res] )
                chatScroll()
            } else {
                if (!handOff) {
                    const value = JSON.parse(response['value'])
                    contactCenterSync(value['queue'][0]['queueId']) //need to change into right id
                }
            }
        }

        if (response['eventName'] === "MsgFeedback") {
            setHandOff(false)
            const set_fullname_msg = {
                "sender": get_local_storage("noti_key", session_id),
                "message": '/set_slot{"fullname": "' + localStorage.getItem("name") + '"}',
            }
            sendData(set_fullname_msg)

            const set_phone_number_msg = {
                "sender": get_local_storage("noti_key", session_id),
                "message": '/set_slot{"phone_number": "' + localStorage.getItem("phone_number") + '"}',
            }
            sendData(set_phone_number_msg)

            const handoff_fail_msg = {
                "sender": get_local_storage("noti_key", session_id),
                "message": '/handoff_fail',
            }
            sendData(handoff_fail_msg)
        }

        if (response['eventName'] === "SessionCreated") {
            ccSessionId = response['value']['sessionId']
        }

        if (response['eventName'] === "EndChat") {
            setHandOff(false)
        }

        if (response['eventName'] === "Message") {
            const value = response['value']
            const cc_res = {
                "recipient_id": get_local_storage("noti_key", session_id),
                "text": value['msg']
            }
            setHistory([...history, cc_res] )
            chatScroll()
        }
    }

    const getHistory = () => {
        let msg_history = []
        for (let i in history) {
            let h = null
            if (history[i].message_mask) {
                h = {
                    "id": i,
                    "send_time": history[i].time,
                    "send_from": history[i].sender,
                    "send_type": "customer",
                    "message": history[i].message_mask
                }

            } else {
                h = {
                    "id": i,
                    "send_time": history[i].time,
                    "send_from": "chatbot EBOT",
                    "send_type": "agent",
                    "message": history[i].text
                }
            }
            msg_history.push(h)
        }
        return msg_history
    }


    const chatRender = () => {
        return history.map((message) => {
            if (message.sender) {
                // user send
                return (
                    <div className="chatbox-body-item chat-bot-text-right" key={generate_key("user")}>
                        <div className="chatbox-body-item-user chat-bot-text-left" dangerouslySetInnerHTML={{ __html: reander_text_links(message.message) }} />
                        <div className="chatbox-body-image-user"></div>
                    </div>
                )
            }

            if (message.msg_type === "notify") {
                // notify
                return (
                    <div className="notify" key={generate_key("notify")}>
                        <span>{message.text} lúc {message.time}</span>
                    </div>
                )
            }

            // bot msg
            return (
                <div className="chatbox-body-item" key={generate_key("bot")}>
                    <div className="chatbox-body-image-bot" alt="VPS"></div>
                    <div className="for-bot">
                        <div className="text-left chatbox-body-item-bot" dangerouslySetInnerHTML={{ __html: reander_text_links(message.text) }} />
                        {message.buttons && (<div className="chatbox-body-item-list-button">{message.buttons.map((button) => (<button key={generate_key("button")} className="btn btn-link btn-block buttun-chat-bot" type="button" onClick={() => buttonClick(button)}>{button.title}</button>))}</div>)}
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="conversation-wrapper">
            <div className="chatbox-body" ref={chatboxBodyRef}>
                {chatRender()}
                <span className="chatbot-copyright"> Liên hệ với chúng tôi: 19006457 - Powered by <a href="http://vps.com.vn" target="_blank" rel="noreferrer">VPS</a></span>
            </div>

            <div className="chatbox-footer">
                <form onSubmit={chatSubmit}>
                    <input ref={chatboxInputRef} type="text" autoComplete="off" name="chatbox_input" id="chatbox_input" placeholder="Nhập tin nhắn của bạn" />
                    <button type="submit" className="btn btn-link chatbox-footer-send-msg"></button>
                </form>

            </div>
        </div>
    );
}

export default Conversation;
