import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';
import { TwitterFollowCardV2 } from './TwitterFollowCardV2.jsx';

export function App (){
  //const formatUserName = (userName) => `@${userName}`
  const midudev = { isFollowing: true, userName: 'midudev'}
  return (
    <section class="App">

      <TwitterFollowCard isFollowing userName="midudev" 
        name="Miguel Ángel Durán" />

      <TwitterFollowCard isFollowing={false}  userName="pheralb" 
        name="Pablo Hernández" />

      <TwitterFollowCardV2 isFollowing userName="elonmusk">
        Elon Musk
      </TwitterFollowCardV2>
      
      <TwitterFollowCardV2 isFollowing={false}>
        Vanderhart
      </TwitterFollowCardV2>
      
      <TwitterFollowCardV2 {...midudev}>
        Miguel Ángel Durán
      </TwitterFollowCardV2>

      {/*
      <TwitterFollowCardV3 
        formatUserName={formatUserName}
        isFollowing 
        userName="midudev">
        Miguel Ángel Durán
      </TwitterFollowCardV3>
      */}

    </section>
  )
} 
