/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import ReactHtmlParser from 'react-html-parser';
import './Library.scss';
function Library(props) {
    const [current, setCurrent] = useState(1)
    const [bog, setBog] = useState({})
    useEffect(() => {
        axios.get(`http://10.32.16.108:5000/api/v1/blog?blog_id=${current}`, {
            headers: {
               "key" : "bbd21f2139c8b8a0524f9716c2d06615"
            }
        })
        .then(response => 
                {
                    setBog(response.data.data)
                    console.log("response.data.data", response.data.data);
                }
            )
        .catch(error => {
            console.error('There was an error!', error);
        });
    }, [current])
    console.log(" bog.refer && bog.refer.length > 0",  bog.refer && bog.refer.length > 0);
    return (
        <div className="library-wrapper">
            <div className="title">
                {
                    bog?.title ? bog?.title : ""
                }
            </div>
            <div className="content">
                {
                    bog?.content || ""
                }
            </div>
            <div className="blog-more">
                <div className="title"> Bài liên quan</div>
                {
                    bog.refer && bog.refer.length > 0 && bog.refer.map((item, index) =>(
                        <React.Fragment>
                            <a className="item-more" onClick={()=>setCurrent(item.blog_id)}> {item.title}</a>
                            <br />
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    );
}
 
export default Library;