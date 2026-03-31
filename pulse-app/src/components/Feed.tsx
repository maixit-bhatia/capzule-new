import styles from './Feed.module.css'

export default function Feed() {
  return (
    <div className={styles.feed}>
      {/* 1. Stories */}
      <div className={styles.stories}>
        <div className={styles.storyCard}>
          <div className={`${styles.storyAvatarContainer} ${styles.myStory}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </div>
          <span className={styles.storyName}>Add Story</span>
        </div>
        {[ 'Liam_B', 'Sarah.V', 'Marcus', 'Chloe', 'Dave_B', 'Emma', 'Noah' ].map((user, i) => (
          <div className={styles.storyCard} key={user}>
            <div className={styles.storyAvatarContainer}>
              <img src={`https://i.pravatar.cc/150?u=${i}`} className={styles.storyAvatar} alt={user} />
            </div>
            <span className={styles.storyName}>{user}</span>
          </div>
        ))}
      </div>

      {/* 2. Create Post */}
      <div className={styles.createPost}>
        <div className={styles.createTop}>
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" style={{width:'36px', height:'36px', borderRadius:'50%'}} alt="Me" />
          <input type="text" className={styles.createInput} placeholder="What's on your mind?" />
          <button className={styles.iconBtn} style={{color: 'var(--primary-color)'}}>
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
          </button>
        </div>
        <div className={styles.createActions}>
          <div className={styles.actionLeft}>
            <button className={styles.toolbarBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg> Mood/Vibe
            </button>
            <button className={styles.toolbarBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg> Image
            </button>
          </div>
          <button className={`${styles.toolbarBtn} ${styles.primary}`}>Pulse It</button>
        </div>
      </div>

      {/* 3. Feed Filter */}
      <div className={styles.tabs}>
        <button className={`${styles.tab} ${styles.active}`}>For You</button>
        <button className={styles.tab}>Following</button>
        <button className={styles.tab}>Trending</button>
      </div>

      {/* 4. Posts */}
      
      {/* Post 1 */}
      <article className={styles.postCard}>
        <div className={styles.postHeader}>
          <div className={styles.postAuthor}>
            <img src="https://i.pravatar.cc/150?u=1" className={styles.authorAvatar} alt="Chloe Sterling" />
            <div className={styles.authorDetails}>
              <div className={styles.authorNameLine}>
                Chloe Sterling <span className={styles.moodIcon}>🧘‍♀️ Feeling Zen</span>
                <button className={styles.followBtn}>Follow</button>
              </div>
              <span className={styles.authorMeta}>@chloe_beats • 2m ago</span>
            </div>
          </div>
          <button className={styles.actionBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
          </button>
        </div>
        
        <div>
           <p className={styles.postText}>Just finished a deep meditation session. My thoughts on new soundscapes.</p>
           <div className={styles.tags}><span className={styles.tag}>#Meditation</span><span className={styles.tag}>#Ambient</span></div>
        </div>
        
        <div className={styles.audioPlayer}>
          <button className={styles.playBtn}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></button>
          <div className={styles.waveform}>
            {[8,12,20,10,24,18,12,6,10,16,22,24,18,12,6,8,18,24,12,6,10].map((h, i) => (
              <div key={i} className={styles.waveBar} style={{height: `${h}px`, opacity: i > 12 ? 0.4 : 1}} />
            ))}
          </div>
          <span className={styles.time}>02:44</span>
        </div>
        <div className={styles.listenCount}>2.4k plays</div>

        <div className={styles.postActions}>
          <div className={styles.actionGroup}>
            <button className={styles.actionBtn}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> 1.2k</button>
            <button className={styles.actionBtn}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path d="M12 7v5l3 3"/></svg> Voice Comment</button>
            <button className={styles.actionBtn}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg> Re-Pulse</button>
          </div>
          <button className={styles.actionBtn}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg> Save</button>
        </div>
        
        <div className={styles.commentsPreview}>
           <div className={styles.commentLine}><span className={styles.commentAuthor}>Liam_B</span> 🎧 Heard this, so relaxing!</div>
           <div className={styles.commentLine}><span className={styles.commentAuthor}>Emma</span> Completely agree. Need more of this.</div>
        </div>
      </article>

      {/* 5. Sponsored Post */}
      <article className={styles.postCard} style={{borderColor: 'rgba(47,128,237,0.3)'}}>
        <div className={styles.postHeader}>
          <div className={styles.postAuthor}>
            <div className={styles.authorAvatar} style={{backgroundColor: '#000', display:'flex', alignItems:'center', justifyContent:'center'}}>🎧</div>
            <div className={styles.authorDetails}>
              <div className={styles.authorNameLine}>Aura Audio Labs</div>
              <span className={styles.authorMeta}>Sponsored</span>
            </div>
          </div>
          <span className={styles.sponsoredIndicator}>Sponsored</span>
        </div>
        <p className={styles.postText}>Meet the Aura Pro X. Spatial audio that moves with you. Listen to our CEO explain the breakthrough tech.</p>
        <div className={styles.productImg}>[ Product Image Banner ]</div>
      </article>

      {/* Post 3 (Normal Post to satisfy 'At least 3 posts' requirement) */}
      <article className={styles.postCard}>
        <div className={styles.postHeader}>
          <div className={styles.postAuthor}>
            <img src="https://i.pravatar.cc/150?u=4" className={styles.authorAvatar} alt="Dave_B" />
            <div className={styles.authorDetails}>
              <div className={styles.authorNameLine}>
                Dave_B <span className={styles.moodIcon}>🔥 Hyped</span>
              </div>
              <span className={styles.authorMeta}>@dave_beats • 1h ago</span>
            </div>
          </div>
          <button className={styles.actionBtn}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></button>
        </div>
        
        <div>
           <p className={styles.postText}>Dropping an impromptu beatbox session. Let's go!</p>
           <div className={styles.tags}><span className={styles.tag}>#Beatbox</span><span className={styles.tag}>#Freestyle</span></div>
        </div>
        
        <div className={styles.audioPlayer}>
          <button className={styles.playBtn}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></button>
          <div className={styles.waveform}>
             {[24,18,32,24,18,34,12,6,12,24,12,28,16,12,18,24,32,18,12,8].map((h, i) => (
              <div key={i} className={styles.waveBar} style={{height: `${h/1.5}px`, opacity: i > 5 ? 0.4 : 1, backgroundColor: '#9b51e0'}} />
            ))}
          </div>
          <span className={styles.time} style={{color: '#9b51e0'}}>01:15</span>
        </div>
        <div className={styles.listenCount}>845 plays</div>

        <div className={styles.postActions}>
          <div className={styles.actionGroup}>
            <button className={styles.actionBtn}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> 354</button>
            <button className={styles.actionBtn}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path d="M12 7v5l3 3"/></svg> Voice Comment</button>
            <button className={styles.actionBtn}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg> Re-Pulse</button>
          </div>
          <button className={styles.actionBtn}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg> Save</button>
        </div>
      </article>

    </div>
  )
}
