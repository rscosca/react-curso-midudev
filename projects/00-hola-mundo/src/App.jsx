import { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: false
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomás',
    isFollowing: false
  }
]

export function App (){
  
  return (
    <section className="App">
      {
        users.map(user => {
          const {userName, name, isFollowing} = user
          return (
            <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}>
              {name}              
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
} 
