import { useState } from "react"

export function TwitterFollowCard ({children, userName='unknow', initialIsFollowing}) {
  
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

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
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
} 
