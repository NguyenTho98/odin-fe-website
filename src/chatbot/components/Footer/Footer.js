import React from 'react';
import { CurrentPage } from '../../common/contants';
import './Footer.scss';
function Footer(props) {
    const { setCurrentPage, currentPage } = props;
    return (
        <div className="footer-chatbot">
            <div className="d-flex footer-content">
                <div className={`home item ${currentPage === CurrentPage.HOME ? 'current-active' : ''}`} onClick={()=>setCurrentPage(CurrentPage.HOME)}>
                    <div className="icon"><i className="fas fa-home"></i> </div>
                    {
                        currentPage === CurrentPage.CONVERSATION ? "" : <div className="title">Trang chủ</div>
                    }
                   
                </div>
                <div className={`library item ${currentPage === CurrentPage.LIBRARY ? 'current-active' : ''}`} onClick={()=>setCurrentPage(CurrentPage.LIBRARY)}>
                    <div className="icon"><i className="far fa-file-alt"></i>  </div>
                    {
                        currentPage === CurrentPage.CONVERSATION ? "" : <div className="title">Thư viện</div>
                    }
                </div>
                <div className={`course item ${currentPage === CurrentPage.COURSE ? 'current-active' : ''}`} onClick={()=>setCurrentPage(CurrentPage.COURSE)}>
                    <div className="icon"><i className="fas fa-graduation-cap"></i> </div>
                    {
                        currentPage === CurrentPage.CONVERSATION ? "" : <div className="title">Khóa học</div>
                    }
                </div>
                <div className={`conversation item ${currentPage === CurrentPage.CONVERSATION ? 'current-active' : ''}`} onClick={()=>setCurrentPage(CurrentPage.CONVERSATION)}>
                    <div className="icon"><i className="fas fa-comment-alt"></i> </div>
                    {
                        currentPage === CurrentPage.CONVERSATION ? "" : <div className="title">Hỏi đáp</div>
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Footer;