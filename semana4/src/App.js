import React, { useState } from 'react';
import './App.css';
import { Emojis, Instructions, Modal } from './components'
//import Button from './components/Button';
import Select from './components/Select';

const emojis = [
  {emoji: '😃', name: "happy face" },
  {emoji: '😭', name: "hug face" },
  {emoji: '😈', name: "thinking face" }
]

const App = () => {
  const [visible, setVisible] = useState(false);
  const [emoji, setEmoji] = useState('')
  const [otroEmoji, setotroEmoji] = useState('💣')
  const cambioEmoji = (event) => {
    setotroEmoji('😃');
  }
  const displayEmojiName = (event) => {
    setVisible(true)
    setEmoji(event.target.id)
  }
  const closeModal = () => {
    setVisible(false)
  }
  return (
    <div className="container">
      <h1>Hello World!</h1>
      <Instructions data={otroEmoji} onClick={cambioEmoji}/>
      <p>I'm writing JSX</p>
      <Emojis data={emojis} onClick={displayEmojiName}/>
      <Modal visible={visible} closeModal={closeModal}>
        {emoji}
      </Modal>
    </div>
  );
}

export default App;