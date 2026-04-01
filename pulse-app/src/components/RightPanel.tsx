import styles from './RightPanel.module.css'

export default function RightPanel() {
  return (
<<<<<<< HEAD
    <aside className={styles.panel}>
      
      {/* 1. Trending Tags (Top 5) */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle} style={{color: 'var(--text-main)'}}>Trending Tags</h3>
        <style dangerouslySetInnerHTML={{__html: `.${styles.sectionTitle}::before { display: none !important; }`}} />
        <div className={styles.tags}>
          <span className={styles.tag}>#PulseLaunch</span>
          <span className={styles.tag}>#AIVoice</span>
          <span className={styles.tag}>#PodcastLife</span>
          <span className={styles.tag}>#MorningVibes</span>
          <span className={styles.tag}>#TechNews</span>
=======
    <aside className={styles.panel} style={{width: '280px', padding: '16px 0'}}>
      
      {/* 1. Trending Tags (Top 5) */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle} style={{color: 'var(--text-main)', fontSize: '14px'}}>Trending Tags</h3>
        <style dangerouslySetInnerHTML={{__html: `.${styles.sectionTitle}::before { display: none !important; }`}} />
        <div className={styles.tags} style={{gap: '6px'}}>
          <span className={styles.tag} style={{fontSize: '11px', padding: '4px 10px'}}>#PulseLaunch</span>
          <span className={styles.tag} style={{fontSize: '11px', padding: '4px 10px'}}>#AIVoice</span>
          <span className={styles.tag} style={{fontSize: '11px', padding: '4px 10px'}}>#PodcastLife</span>
          <span className={styles.tag} style={{fontSize: '11px', padding: '4px 10px'}}>#MorningVibes</span>
          <span className={styles.tag} style={{fontSize: '11px', padding: '4px 10px'}}>#TechNews</span>
>>>>>>> c01a3d28b1e77a718d42b9935372847a3bb5c880
        </div>
      </section>

      {/* 2. Live Rooms (Top 3) */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle} style={{fontSize: '14px'}}>Live Rooms</h3>
        </div>
        
        {/* Room 1 */}
<<<<<<< HEAD
        <div className={styles.liveRoomCard}>
=======
        <div className={styles.liveRoomCard} style={{padding: '12px', gap: '4px'}}>
>>>>>>> c01a3d28b1e77a718d42b9935372847a3bb5c880
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
             <span className={styles.roomCategory} style={{fontSize: '9px'}}>TECH TALK</span>
             <span style={{background:'#EF4444', color:'white', fontSize:'8px', padding:'2px 4px', borderRadius:'4px', fontWeight:700}}>LIVE</span>
          </div>
          <h4 className={styles.roomTitle} style={{fontSize: '13px'}}>Web3 vs AI: The Future?</h4>
          <div className={styles.roomFooter}>
            <div className={styles.avatars}>
              <div style={{width:'20px', height:'20px', borderRadius:'50%', backgroundColor:'#2F80ED', border:'2px solid var(--card-bg)'}}></div>
              <div style={{width:'20px', height:'20px', borderRadius:'50%', backgroundColor:'#9b51e0', border:'2px solid var(--card-bg)', marginLeft:'-6px'}}></div>
            </div>
            <span className={styles.listeners} style={{fontSize: '10px'}}>🎧 1,240</span>
          </div>
        </div>

        {/* Room 2 */}
        <div className={styles.liveRoomCard} style={{padding: '12px', gap: '4px'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
             <span className={styles.roomCategory} style={{color: '#10B981', fontSize: '9px'}}>MUSIC</span>
             <span style={{background:'#EF4444', color:'white', fontSize:'8px', padding:'2px 4px', borderRadius:'4px', fontWeight:700}}>LIVE</span>
          </div>
          <h4 className={styles.roomTitle} style={{fontSize: '13px'}}>Chill Lofi Beats Study</h4>
          <div className={styles.roomFooter}>
            <div className={styles.avatars}>
              <div style={{width:'20px', height:'20px', borderRadius:'50%', backgroundColor:'#10B981', border:'2px solid var(--card-bg)'}}></div>
              <div style={{width:'20px', height:'20px', borderRadius:'50%', backgroundColor:'#F59E0B', border:'2px solid var(--card-bg)', marginLeft:'-6px'}}></div>
            </div>
            <span className={styles.listeners} style={{fontSize: '10px'}}>🎧 840</span>
          </div>
        </div>

        {/* Room 3 */}
        <div className={styles.liveRoomCard} style={{padding: '12px', gap: '4px'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
             <span className={styles.roomCategory} style={{color: '#F59E0B', fontSize: '9px'}}>COMEDY</span>
             <span style={{background:'#EF4444', color:'white', fontSize:'8px', padding:'2px 4px', borderRadius:'4px', fontWeight:700}}>LIVE</span>
          </div>
          <h4 className={styles.roomTitle} style={{fontSize: '13px'}}>Late Night Standup</h4>
          <div className={styles.roomFooter}>
            <div className={styles.avatars}>
              <div style={{width:'20px', height:'20px', borderRadius:'50%', backgroundColor:'#F59E0B', border:'2px solid var(--card-bg)'}}></div>
              <div style={{width:'20px', height:'20px', borderRadius:'50%', backgroundColor:'#EF4444', border:'2px solid var(--card-bg)', marginLeft:'-6px'}}></div>
            </div>
            <span className={styles.listeners} style={{fontSize: '10px'}}>🎧 3.2k</span>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* 3. Banner Advertisement */}
      <div className={styles.promoCard} style={{padding: '16px', gap: '8px'}}>
        <span className={styles.promoTag} style={{fontSize: '8px'}}>ADVERTISEMENT</span>
        <h3 className={styles.promoTitle} style={{fontSize: '15px'}}>Pulse Creator Pro</h3>
        <p style={{fontSize: '11px', opacity: 0.9}}>Monetize your voice instantly.</p>
        <button className={styles.promoBtn} style={{fontSize: '12px', padding: '6px 0'}}>Upgrade Now</button>
      </div>

      {/* 4. Suggested Users (Top 3) */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle} style={{color: 'var(--text-main)'}}>Suggested People</h3>
        
        {[{n: 'Daniel Thorne', r: 'Product Designer'}, {n: 'Sarah Ventura', r: 'Voice Actor'}, {n: 'Markus T', r: 'Audio Engineer'}].map((u, i) => (
          <div className={styles.suggestedUser} key={u.n}>
=======
      {/* 3. Suggested Users (Top 3) */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle} style={{color: 'var(--text-main)', fontSize: '14px'}}>Suggested People</h3>
        
        {[{n: 'Daniel Thorne', r: 'Product Designer'}, {n: 'Sarah Ventura', r: 'Voice Actor'}, {n: 'Markus T', r: 'Audio Engineer'}].map((u, i) => (
          <div className={styles.suggestedUser} key={u.n} style={{marginBottom: '4px'}}>
>>>>>>> c01a3d28b1e77a718d42b9935372847a3bb5c880
            <div className={styles.userInfo}>
              <img src={`https://i.pravatar.cc/150?u=1${i}`} style={{width:'32px', height:'32px', borderRadius:'50%', objectFit:'cover'}} alt={u.n}/>
              <div style={{lineHeight: '1.2'}}>
                <span className={styles.userName} style={{fontSize: '13px'}}>{u.n}</span>
                <span className={styles.userRole} style={{fontSize: '11px'}}>{u.r}</span>
              </div>
            </div>
            <button className={styles.followBtn} style={{padding: '4px 12px'}}>Follow</button>
          </div>
        ))}
      </section>
<<<<<<< HEAD
=======

      {/* 4. Banner Advertisement */}
      <div className={styles.promoCard} style={{padding: '16px', gap: '8px'}}>
        <span className={styles.promoTag} style={{fontSize: '8px'}}>ADVERTISEMENT</span>
        <h3 className={styles.promoTitle} style={{fontSize: '15px'}}>Pulse Creator Pro</h3>
        <p style={{fontSize: '11px', opacity: 0.9}}>Monetize your voice instantly.</p>
        <button className={styles.promoBtn} style={{fontSize: '12px', padding: '6px 0'}}>Upgrade Now</button>
      </div>
>>>>>>> c01a3d28b1e77a718d42b9935372847a3bb5c880
    </aside>
  )
}
