import { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';
import { TwitterFollowCardV2 } from './TwitterFollowCardV2.jsx';

export function App (){

  const [name, setName] = useState('midudev')
  
  return (
    <section className="App">

      <TwitterFollowCardV2 userName="elonmusk" initialIsFollowing={true}>
        Elon Musk
      </TwitterFollowCardV2>

      <TwitterFollowCardV2 userName={name}>
        {name}
      </TwitterFollowCardV2>

      <button onClick={() => setName('pedromichel')}>Cambiar nombre</button>
      
    </section>
  )
} 
