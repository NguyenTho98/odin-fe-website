import './App.css';
import Main from './pages/main'
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./css/style.css";
import "./css/skin/skin-1.css";
import "./styles/globals.css";
import "./styles/switcher.css";
import MainChatBot from './chatbot/pages';
function App() {
  return (
    <>
    <Main></Main>
    <MainChatBot/>
    </>
  );
}

export default App;
