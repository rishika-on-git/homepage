import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero.js'
import Main from './Components/Main.js';
import TestimonialsGrid from './Components/Posts.js';
import Friends from './Components/Friends.js';
import MysteryComponent from './Components/Header.js';
import WrapComponent from './Components/Footer.js';
import ChatComponent from './Components/Chat.js';
import TextComponent from './Components/Entry.js';
import ChatInterface from './Components/Section1.js';

function App() {
  return (
    <div className="App">
     <TextComponent/>

      <MysteryComponent/>
      <Hero/>
      
   
    <Friends/>
  <WrapComponent/>


  <ChatInterface/>
    </div>
  );
}

export default App;
