/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Course.scss';
function Course(props) {
    const [imgs, setImgs] = useState([])
    useEffect(() => {
        axios.get('http://10.32.16.108:5000/api/v1/course', {
            headers: {
               "key" : "bbd21f2139c8b8a0524f9716c2d06615"
            }
        })
        .then(response => 
                {
                    console.log("response.data.data", response.data.data);
                    setImgs(response.data.data.courses)
                }
            )
        .catch(error => {
            console.error('There was an error!', error);
        });
    }, [])
    return (
        <div className="course-wrapper">
            <div className="course-content">
                {
                   imgs && imgs.length > 0 && imgs.map((item, index) => (
                       <div className="item" >
                        <a target="_blank" onClick={()=>{
                            window.open(item.link);
                        }}>
                            <img src={item.img} alt="chatbot"></img>
                        </a>
                       </div>
                       
                    ))
                }
            </div>
        </div>
    );
}
 
export default Course;