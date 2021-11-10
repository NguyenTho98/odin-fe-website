/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState, useRef } from "react";
import "./Home.scss";
import img from "../../images/icon_botedu.png";
import img1 from "./../../images/0.jpg";
import img2 from "./../../images/1.png";
import img3 from "./../../images/2.png";
import img4 from "./../../images/3.png";
import img5 from "./../../images/4.png";
import StarRatings from "react-star-ratings";
import axios from "axios";
import { generate_id } from "../../common/utils";
import { Rank } from "../../common/contants";
const sender_id = generate_id();

function Home(props) {
  const [currentQuizz, setCurrentQuizz] = useState();
  const [quizz, setQuizz] = useState({});
  const [user, setUser] = useState({});
  const [exp, setExp] = useState(0);
  const [rank, setRank] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const myRefA = useRef(null);
  const myRefB = useRef(null);
  const myRefC = useRef(null);
  const myRefD = useRef(null);
  useEffect(() => {
    if (currentQuizz) {
      axios
        .get(`http://10.32.16.108:5000/api/v1/quiz?quiz_id=${currentQuizz}`, {
          headers: {
            key: "bbd21f2139c8b8a0524f9716c2d06615",
          },
        })
        .then((response) => {
          if (response.data?.data) {
            setQuizz(response.data.data);
          }
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }
  }, [currentQuizz]);

  useEffect(() => {
    axios
      .post(
        `http://10.32.16.108:5000/api/v1/user_profile?sender_id=${sender_id}`,
        {},
        {
          headers: {
            KEY: "bbd21f2139c8b8a0524f9716c2d06615",
          },
        }
      )
      .then((response) => {
        if (response.data?.data) {
          setUser(response.data.data);
          setCurrentQuizz(response.data?.data?.target?.current_quiz);
          setExp(response.data.data?.exp);
          setRank(response.data.data?.rank);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);
  const onSelectResult = (tmp) => {
      if(!isFetching) {
        selectResult(tmp)
      } else{
          return;
      }
  }
  const selectResult = (tmp) => {
    setIsFetching(true)
    axios
      .post(
        `http://10.32.16.108:5000/api/v1/quiz?sender_id=${user.sender_id}&quiz_id=${quizz.quiz_id}&answer=${tmp}`,
        {},
        {
          headers: {
            KEY: "bbd21f2139c8b8a0524f9716c2d06615",
          },
        }
      )
      .then((response) => {
        const result = response?.data?.data;
        console.log("response", result);
        if(tmp === "A") {
            if(!result?.correct) {
                myRefA.current.classList.add("resultWrong");
                setTimeout(()=>{
                    myRefA.current.classList.remove("resultWrong");
                    setIsFetching(false)
                }, 1000)
            }else {
                myRefA.current.classList.add("resultSuccess");
                setTimeout(()=>{
                    myRefA.current.classList.remove("resultSuccess");
                    setCurrentQuizz(result.next_quiz);
                    setExp(result?.exp);
                    setRank(result?.rank);
                    setIsFetching(false)
                }, 1000)
            }
        }
        if(tmp === "B") {
            if(!result?.correct) {
                myRefB.current.classList.add("resultWrong");
                setTimeout(()=>{
                    myRefB.current.classList.remove("resultWrong");
                    setIsFetching(false)
                }, 1000)
            }else {
                myRefB.current.classList.add("resultSuccess");
                setTimeout(()=>{
                    myRefB.current.classList.remove("resultSuccess");
                    setCurrentQuizz(result.next_quiz);
                    setExp(result?.exp);
                    setRank(result?.rank);
                    setIsFetching(false)
                }, 1000)
            }
        }
        if(tmp === "C") {
            if(!result?.correct) {
                myRefC.current.classList.add("resultWrong");
                setTimeout(()=>{
                    myRefC.current.classList.remove("resultWrong");
                    setIsFetching(false)
                }, 1000)
            }else {
                myRefC.current.classList.add("resultSuccess");
                setTimeout(()=>{
                    myRefC.current.classList.remove("resultSuccess");
                    setCurrentQuizz(result.next_quiz);
                    setExp(result?.exp);
                    setRank(result?.rank);
                    setIsFetching(false)
                }, 1000)
            }
        }
        if(tmp === "D") {
            if(!result?.correct) {
                myRefD.current.classList.add("resultWrong");
                setTimeout(()=>{
                    myRefD.current.classList.remove("resultWrong");
                    setIsFetching(false)
                }, 1000)
            }else {
                myRefD.current.classList.add("resultSuccess");
                setTimeout(()=>{
                    myRefD.current.classList.remove("resultSuccess");
                    setCurrentQuizz(result.next_quiz);
                    setExp(result?.exp);
                    setRank(result?.rank);
                    setIsFetching(false)
                }, 1000)
            }
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  const findInfoRank = () => {
    const tmp = Rank.find((item, index)=> item.rank === rank)
    if(tmp) {
        return tmp
    }
    return ""
  }
  const info = findInfoRank();
  const renderImage = () => {
    const tmp = findInfoRank();
    if(tmp.rank === 0) {
        return img1
    }
    if(tmp.rank === 1) {
        return img2
    }
    if(tmp.rank === 2) {
        return img3
    }
    if(tmp.rank === 3) {
        return img4
    }
    if(tmp.rank === 4) {
        return img5
    }
    return img1
  }
  return (
    <div className="wrappre-home">
      <div className="d-flex introduce">
        <div className="introduce-image">
          <img src={img} alt="chatbot-image-1"></img>
        </div>
        <div className="comments">
          <div className="content">
            Xin chào, tôi là EBOT. Tôi sẽ giúp cho quá trình học hỏi và chơi
            chứng khoán của bạn sẽ dễ dàng hơn!
          </div>
        </div>
      </div>
      <hr className="hr"></hr>
      <div className="ratings">
        <div className="title">Xếp hạng hiện tại</div>
        <div className="d-flex ratings-content">
          <div className="rattings-image">
            <img src={renderImage()} alt="chatbot-image-2"></img>
          </div>
          <div className="comments">
            <div className="text-commnnts">
              {user?.advice?.content} bởi {user?.advice?.author}
            </div>
            <div className="armorial">
              {" "}
              Danh hiệu: <span>{info ? info.name : ''}</span>
            </div>
            <div className="experience">
              Kinh nghiệm: <span>{exp}</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr"></hr>
      <div className="target-day">
        <div className="title">Mục tiêu hôm nay</div>
        <div className="star">
          <StarRatings
            rating={exp / 100 || 0}
            starDimension="30px"
            starSpacing="15px"
          />
        </div>
      </div>
      <div className="question">
        <div className="question-title">{quizz.question}</div>
        <div className="question-content">
          <div className="content-item">
            {quizz.answers && quizz.answers.length > 0 && (
              <React.Fragment>
                <div
                  ref={myRefA}
                  className="result"
                  onClick={() => onSelectResult(quizz.answers[0].number)}
                >
                  {quizz.answers[0].number} {quizz.answers[0].text}
                </div>
                <div
                  ref={myRefB}
                  
                  className="result"
                  onClick={() => onSelectResult(quizz.answers[1].number)}
                >
                  {quizz.answers[1].number} {quizz.answers[1].text}
                </div>
                <div
                  ref={myRefC}
                  className="result"
                  onClick={() => onSelectResult(quizz.answers[2].number)}
                >
                  {quizz.answers[2].number} {quizz.answers[2].text}
                </div>
                <div
                  ref={myRefD}
                  className="result"
                  onClick={() => onSelectResult(quizz.answers[3].number)}
                >
                  {quizz.answers[3].number} {quizz.answers[3].text}
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
