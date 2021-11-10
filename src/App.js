import logo from './logo.svg';
import './App.css';
import Home from './pages'
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
    <Home></Home>
    <MainChatBot/>
    </>
  );
}

export default App;
