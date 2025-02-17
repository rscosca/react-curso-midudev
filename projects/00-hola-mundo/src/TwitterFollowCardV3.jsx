export function TwitterFollowCardV2 ({children, formatUserName, userName, isFollowing}){
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
          className="tw-followCard-infoUserName">{formatUserName()}</span>
        </div>
      </header>
      <aside>
        <button 
        className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  )
} 
