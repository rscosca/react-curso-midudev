import { useState } from "react"

export function TwitterFollowCardV2 ({children, userName='unknow', initialIsFollowing}) {
  
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  /*
  Las siguientes 3 líneas son las misma declaración que la línea 5
  const state = useState(false)
  const isFollowing = state[0]
  const setIsFollowing = state[1]
  */

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClass = isFollowing ? 'is-following' : 'Seguir'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img 
          className="tw-followCard-avatar"
          alt="El avatar de Midudev" 
          src={`https://unavatar.io/${userName}`} />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span
          className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={`tw-followCard-button ${buttonClass}`} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  )
} 
