import { useState } from "react"

export function TwitterFollowCardV2 ({children, userName='unknow', isFollowing}){

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClass = isFollowing ? 'is-following' : 'Seguir'
  
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
        <button 
        className={`tw-followCard-button ${buttonClass}`}>{text}</button>
      </aside>
    </article>
  )
} 
